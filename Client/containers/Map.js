// Default focus if location access not allowed or available. (Moscone Center)
var defaultCoord = [37.784005, -122.401551];

// Public accessToken. Set up from mapbox.com. Make sure is a public token
L.mapbox.accessToken = 'pk.eyJ1Ijoicm1jY2hlc24iLCJhIjoiY2lxbHkxbXFiMDA5dWZubm5mNWkwdGYwbiJ9.QC1lP-2tNymbJ5tHaMugZw';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

// Globl map
var mainMap, restaurantPoints, layerGroup;
var initialize = true;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp_collection: []
    };
  }

  componentDidMount() {
    this.props.actions.fetchCollection()
      .then((results) => {
        this.renderMap();
        this.getUserLocation(mainMap);
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    if (layerGroup) {
      layerGroup.clearLayers();
      layerGroup = L.layerGroup().addTo(mainMap)
    }
    //creates a uniqueId for already rated items
    var uniqueIds = this.props.totalCollection.map(id => id.name + id.latitude.toString().slice(0,2) + id.longitude.toString().slice(0,2))

    //render user search results
    nextProps.searchResults.forEach(yelpResultEntry => {
      //compare search results uniqueId with already rated items
      var id = yelpResultEntry.name + yelpResultEntry.latitude.toString().slice(0,2) + yelpResultEntry.longitude.toString().slice(0,2);
      if (uniqueIds.indexOf(id) === -1) {
        this.foundRestaurant(formatResObj(yelpResultEntry));
      }
    });
  }

  tempClickLocationSubmit(name, latitude, longitude, rating, image) {
  // Create object to make DB query
    console.log('tempClickLocationSubmit');
    const spotToAdd = {
      name: name,
      latitude: latitude,
      longitude: longitude,
      rating: "" + rating,
      yelpData: {
        image: image
      }
    };
    var newCollection = this.state.temp_collection.concat([spotToAdd]);
    this.setState({
      temp_collection: newCollection
    })
  }

  mapSearchCoord(e) {
    // e.preventDefault();
    this.props.actions.mapSearchCoord(e);
  }

  mapSearchZoom(e) {
    this.props.actions.mapSearchZoom(e);    
  }

  renderMap() {
    console.log('lmapbox', L.mapbox);
    mainMap = L.mapbox.map('map-one', 'mapbox.streets')
      .setView(defaultCoord, 16);

    // var geocoderControl = L.mapbox.geocoderControl('mapbox.places', {
    //   autocomplete: true,
    //   keepOpen: true,
    //   proximity: true,
    //   container: 'geocoder-container'
    // });
    // geocoderControl.addTo(mainMap);

    // geocoderControl.on('select', function(res, mainMap) {
    //   foundRestaurant(res, mainMap);
    // });
    
    //add a listener to the mainmap object that listens to moving
    //and on end will set the store coords to the center of map view 
    mainMap.on('moveend', () => {
      this.mapSearchCoord(mainMap.getBounds().getCenter());
    });

    mainMap.on('zoomend', () => {
      this.mapSearchZoom(mainMap.getZoom());
    })

    this.addPointsLayer(mainMap);
    layerGroup = L.layerGroup().addTo(mainMap)

    initialize = false;
    return mainMap;
  }

  // Helpers to handle search results
  addPointsLayer(map) {
    if (!initialize) {
      console.log('mainMap.removeLayer(restaurantPoints);');
      mainMap.removeLayer(restaurantPoints);
    }
    console.log('restaurantPoints', restaurantPoints);
    restaurantPoints = L.mapbox.featureLayer().addTo(map);

    restaurantPoints.on('layeradd', function(point) {
      var marker = point.layer;
      var feature = marker.feature;
      marker.setIcon(L.icon(feature.properties.icon));
      var content = '<h2>' + feature.properties.title + '<\/h2>' +
      '<img src="' + feature.properties.image + '" alt="">';
      marker.bindPopup(content);
      marker.on('mouseover', function(e) {
        this.openPopup();
      });
    });

    console.log('this.state.temp_collection', this.state.temp_collection);
    console.log('this.props.totalCollection', this.props.totalCollection);
    let collection = this.props.totalCollection.concat(this.state.temp_collection);
    console.log('total collection', this.props.totalCollection);
    // If any filters have been selected and a filtered collection
    // exists, send that into the map instead
    if (this.props.filteredCollection.length > 0) {
      collection = this.props.filteredCollection;
    }
    console.log('set geojson on', restaurantPoints, 'with', collection);
    const formattedPoints = formatGeoJSON(collection);
    console.log('formatted points are', formattedPoints);
    restaurantPoints.setGeoJSON(formatGeoJSON(collection));
  }


  // Helpers for interacting with users live location
  getUserLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      geoSuccess(position);
    }, geoError);
  }

  foundRestaurant(res) {
    // console.log('found a place', res, res.feature.text, res.feature.center); // -122, 33 long / lat
    // var onClick = (event) => { Actions.clickLocationSubmit(res.feature.text) };
    var pointQuery = L.mapbox.featureLayer().addTo(layerGroup);
    console.log('pointQuery', pointQuery);
    pointQuery.on('layeradd', function(point) {
      // console.log('actions', Actions);
      var marker = point.layer;
      var feature = marker.feature;
      marker.setIcon(L.icon(feature.properties.icon));
      var content = '<h2>' + feature.properties.title + '<\/h2>' +
      '<form>I would<br>' +
      `<input type="radio" name="goBack${pointQuery._leaflet_id}" required> Definitely and absolutely<br>` +
      `<input type="radio" name="goBack${pointQuery._leaflet_id}"> Never ever ever<br>` +
      'go back<br>' +
      `<input type="button" id="fistBump${pointQuery._leaflet_id}" value="Thumbs!!!!"></form>` +
      '<img src="' + feature.properties.image + '" alt="">';
      marker.bindPopup(content)
      marker.on('mouseover', function(e) {
        this.openPopup();
      });
    });

    var coordinates = res.feature.center;
    var pickedPlace = geoJSONPoint(coordinates[0], coordinates[1], res.feature.text, fistBump, res.feature.image || testImage);

    pointQuery.setGeoJSON(pickedPlace);
    pointQuery.openPopup();
    

    // Add listener for submission
    var that = this;
    $('.leaflet-popup-content').on('click', '#fistBump' + pointQuery._leaflet_id, function() {

      console.log('clicked')
      var radios = document.getElementsByName('goBack' + pointQuery._leaflet_id);
      var rating;
      radios[0].checked === true ? rating = 5 : rating = 0;
      Actions.clickLocationSubmit(res.feature.text, coordinates[1], coordinates[0], rating);
      that.tempClickLocationSubmit(res.feature.text, coordinates[1], coordinates[0], rating, res.feature.image);
      // console.log('calling mainMap.removeLayer(pointQuery)', pointQuery);
      mainMap.removeLayer(pointQuery);
      // that.addPointsLayer(mainMap);
    })
  }

  render() {
    // Sets collection to default to the entire collection
    // this.deleteExistingPointsLayer(mainMap)
    if (!initialize) {
      this.addPointsLayer(mainMap);
    }
    return (
      <div className='map' id='map-one'></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.FilterSelectedRestaurants.filters,
    totalCollection: state.CollectionRestaurantsFilters.collection,
    filteredCollection: state.FilterSelectedRestaurants.filteredRestaurants,
    searchResults: state.SearchBar.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

////////// TESTING DATA - TODO REMOVE /////////
// var tastyRestaurants = [
//   {
//     name: 'The Flying Falafal',
//     latitude: 37.7812322,
//     longitude: -122.4134787,
//     rating: 5
//   },
//   {
//     name: 'Show Dogs',
//     latitude: 37.7821228,
//     longitude: -122.4130593,
//     rating: 5
//   },
//   {
//     name: 'Lemonade',
//     latitude: 37.7848661,
//     longitude: -122.4057182,
//     rating: 5
//   },
//   {
//     name: 'Super Duper Burgers',
//     latitude: 37.7862143,
//     longitude: -122.4053212,
//     rating: 5
//   },
//   {
//     name: 'Réveille Coffee Co.',
//     latitude: 37.7735341,
//     longitude: -122.3942448,
//     rating: 5
//   },
//   {
//     name: 'Denny\'s',
//     latitude: 37.7859249,
//     longitude: -122.407801,
//     rating: 0
//   }
// ];

////////// TEST IMAGES TODO - REMOVE FOR FINAL //////////
var thumbDown = 'http://emojipedia-us.s3.amazonaws.com/cache/8f/32/8f32d2d9cdc00990f5d992396be4ab5a.png';
var thumbUp = 'http://emojipedia-us.s3.amazonaws.com/cache/79/bb/79bb8226054d3b254d3389ff8c9fe534.png';
var fistBump = 'http://emojipedia-us.s3.amazonaws.com/cache/2c/08/2c080d6b97f0416f9d914718b32a2478.png';
var testImage = 'http://img4.wikia.nocookie.net/__cb20140321012355/spiritedaway/images/1/1f/Totoro.gif';

////////// TEMPLATES FOR GEOPOINT and GEOSET in geoJSON FORMAT //////////
var geoJSONPoint = (longitude, latitude, name, thumb, image) => {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [longitude, latitude]
    },
    properties: {  // for styling
      title: name,
      image: image,
      icon: {
        iconUrl: thumb,
        iconSize: [35, 35],
        iconAnchor: [35, 17],
        popupAnchor: [-17, -17]
      }
    }
  };
};

var geoJSONSet = () => {
  return [
    {
      type: 'FeatureCollection',
      features: []
    }
  ];
};

////////// HELPER FUNCTIONS - TODO MODULARIZE //////////
function formatGeoJSON(array) {
  const geoPointArray = array.map((spot) => {
    // console.log('spot is', spot);
    let ratingImg = spot.rating === '5' ? thumbUp : thumbDown;
    return geoJSONPoint(spot.longitude, spot.latitude, spot.name, ratingImg, spot.yelpData.image);
  });
  return [
    {
      type: 'FeatureCollection',
      features: geoPointArray
    }
  ];
}
// Helpers for grabbing locations
var getSpots = () => {
  var spotsSet = geoJSONSet();
  var thumb = true;
  var restaurant, lati, long, thumb, name;

  for (var i = 0; i < tastyRestaurants.length; i += 1) {
    restaurant = tastyRestaurants[i];
    lati = restaurant.latitude;
    long = restaurant.longitude;
    name = restaurant.name;
    restaurant.rating === 0 ? thumb = thumbDown : thumb = thumbUp;
    restaurant = geoJSONPoint(long, lati, name, thumb, testImage);
    spotsSet[0].features.push(restaurant);
  }
  return spotsSet;
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

// Helpers for rendering mapping data


var geoError = () => {
  alert('Our apologies, but it appears we are unable to find you');
};

var geoSuccess = (position) => {
  mainMap.setView([position.coords.latitude, position.coords.longitude]);
};

var currentMapView = () => {
  return mainMap.getCenter();
};


var formatResObj = (yelpResultEntry) => {
  return {
    feature: {
      center: [yelpResultEntry.longitude, yelpResultEntry.latitude],
      text: yelpResultEntry.name,
      image: yelpResultEntry.image
    }
  }
};