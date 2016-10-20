// Default focus if location access not allowed or available. (Moscone Center)
var defaultCoord = [37.784005, -122.401551];

// Public accessToken. Set up from mapbox.com. Make sure is a public token
L.mapbox.accessToken = 'pk.eyJ1Ijoicm1jY2hlc24iLCJhIjoiY2lxbHkxbXFiMDA5dWZubm5mNWkwdGYwbiJ9.QC1lP-2tNymbJ5tHaMugZw';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
//import parseAgain from './utils';
// Globl map
var mainMap, restaurantPoints, layerGroup;
var initialize = true;

var parseAgain = function(res) {
  let ast = res.indexOf("*");
  if (ast > -1) {
    let split = res.split("");
    split.splice(ast, 1, "'");
    return split.join('');
  } else {
    return res;
  }
};

////////// TEST IMAGES TODO - REMOVE FOR FINAL //////////

var thumbDown = './component/map/Assets/thumbdown.png';
var thumbUp = './component/map/Assets/thumbup.png';
var fistBump = 'http://emojipedia-us.s3.amazonaws.com/cache/2c/08/2c080d6b97f0416f9d914718b32a2478.png';
var testImage = 'http://img4.wikia.nocookie.net/__cb20140321012355/spiritedaway/images/1/1f/Totoro.gif';
var giftImage = './component/map/Assets/giftImage.png';
var heartEmpty = './component/map/Assets/heartEmpty.png';
var heartRed = './component/map/Assets/heartRed.png';
var starEmpty = './component/map/Assets/starEmpty.png';
var starFill = './component/map/Assets/starFill.png';
var wishImage = './component/map/Assets/wishIcon.png';
var heartPink = './component/map/Assets/heartPink.png';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp_collection: [],
      collection: this.props.collection
    };
  }

  componentDidMount() {
    console.log('component mount, this.state.collection, ', this.state.collection);
    this.props.actions.fetchCollection()
      .then((results) => {
        this.renderMap();
        this.getUserLocation(mainMap);
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops, ', nextProps);
    console.log('componentWillReceiveProps');
    if (layerGroup) {
      layerGroup.clearLayers();
      layerGroup = L.layerGroup().addTo(mainMap);
    }

    //creates a uniqueId for already rated items
    console.log('this.state.collection in component will receive props, ', this.state.collection);
    let collection = nextProps.collection;
    var uniqueIds = collection.map(id => id.name + id.latitude.toString().slice(0,2) + id.longitude.toString().slice(0,2))

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
    console.log('tempClickLocationSubmit being run');
    const spotToAdd = {
      name: name,
      latitude: latitude,
      longitude: longitude,
      rating: "" + rating,
      yelpData: {
        image: image
      }
    };
    //make a db query on each click for thumbs up/down
    this.props.postSpots(spotToAdd);
  }

  tempClickWishListSubmit(name, latitude, longitude) {
    this.props.getUpdate({name: name, latitude: latitude, longitude: longitude});
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
    //add a listener to the mainmap object that listens to moving
    //and on end will set the store coords to the center of map view 
    mainMap.on('moveend', () => {
      this.mapSearchCoord(mainMap.getBounds().getCenter());
    });

    mainMap.on('zoomend', () => {
      this.mapSearchZoom(mainMap.getZoom());
    });

    this.addPointsLayer(mainMap);
    layerGroup = L.layerGroup().addTo(mainMap);

    initialize = false;
    return mainMap;
  }

  // Helpers to handle search results
  addPointsLayer(map) {

    var that = this;
    if (!initialize) {
      // console.log('mainMap.removeLayer(restaurantPoints);');
      mainMap.removeLayer(restaurantPoints);
    }
    // console.log('restaurantPoints', restaurantPoints);
    restaurantPoints = L.mapbox.featureLayer().addTo(map);

    restaurantPoints.on('layeradd', function(point) { 
      var that = this;
      var marker = point.layer;
      var feature = marker.feature;
      console.log("this is a point", feature.properties);
      var parsed = parseAgain(feature.properties.title);
     // console.log("this should =marks", feature.properties);
      marker.setIcon(L.icon(feature.properties.icon));
      var content = '<h2>' + parsed + '</h2>' +
      `<img className="popUpImage" src="${feature.properties.image || "http://bit.ly/2e99Pwd"}" alt="">` +
      `<img id="wishImage" src="${wishImage}" alt="">` + 
      ((marker.feature.properties.icon.iconUrl === starFill) ? `<img id="giftImage" src="${giftImage}"` : '') +
      ((feature.properties.friendWishOnly) ? `${feature.properties.friendWish[0].friendname}` : 'not a wish');

      //wish icon on click, change icon
      marker.bindPopup(content);
      marker.on('mouseover', function(e) {
        console.log(marker.feature.properties.icon.iconUrl);
        this.openPopup();
      });
      marker.on('popupopen', function(e) {
         //var that = this;
        $(`#wishImage`).click(function(event) {
          console.log('Image clicked', feature);
          //also call function to send info 
          let latlng = marker._latlng;
          that.tempClickWishListSubmit(feature.properties.title, latlng.lat, latlng.lng);
          // Actions.clickWishListSubmit(feature.properties.title, latlng.lat, latlng.lng);
          var wishData = {
            name: feature.properties.title,
            latitude: latlng.lat, 
            longitude: latlng.lng
          };
          marker.closePopup();
        });
      });
    });

    // console.log('this.state.temp_collection', this.state.temp_collection);
    console.log('this.props.collection', this.props.collection);
    var collection = this.props.collection;
    console.log('total collection', this.props.totalCollection);
    // If any filters have been selected and a filtered collection
    // exists, send that into the map instead
    if (this.props.filteredCollection.length > 0) {
      collection = this.props.filteredCollection;
    }
    // console.log('set geojson on', restaurantPoints, 'with', collection);
    const formattedPoints = formatGeoJSON(collection);
    // console.log('formatted points are', formattedPoints);
    restaurantPoints.setGeoJSON(formatGeoJSON(collection));
  }

  // Helpers for interacting with users live location
  getUserLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      geoSuccess(position);
    }, geoError);
  }
//
  foundRestaurant(res) {
    var that = this;
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
      `<input type="radio" name="goBack${pointQuery._leaflet_id}" required> Definitely!<br>` +
      `<input type="radio" name="goBack${pointQuery._leaflet_id}"> Never again! <br>` +
      `<input className="btn-default" type="button" id="fistBump${pointQuery._leaflet_id}" value="Thumbs!"></form>` +
      '<img src="' + feature.properties.image + '" alt="">' +
      `<img id="wishImage" src="${wishImage}" alt="">` +
      ((marker.feature.properties.icon.iconUrl === starFill) ? `<img id="giftImage" src="${giftImage}"` : '');
      
      marker.bindPopup(content);
      marker.on('mouseover', (e) => {
        this.openPopup();
      });
      marker.on('popupopen', function(e) {
       
        $(`#wishImage`).click(function(event) {
          console.log('Image clicked', marker);
          //also call function to send info 
          let latlng = marker._latlng;
          that.tempClickWishListSubmit(feature.properties.title, latlng.lat, latlng.lng);
          // Actions.clickWishListSubmit(feature.properties.title, latlng.lat, latlng.lng, rating);
          marker.closePopup();
        });
      });
    });

    var coordinates = res.feature.center;
    var pickedPlace = geoJSONPoint(coordinates[0], coordinates[1], res.feature.text, fistBump, res.feature.image || testImage);

    pointQuery.setGeoJSON(pickedPlace);
    pointQuery.openPopup();


    // Add listener for submission
    var that = this;
        $('.leaflet-popup-content').on('click', '#fistBump' + pointQuery._leaflet_id, ()=> {

          console.log('clicked');
          var radios = document.getElementsByName('goBack' + pointQuery._leaflet_id);
          var rating;
          radios[0].checked === true ? rating = 5 : rating = 0;

          if (radios[0].checked || radios[1].checked) {

            that.tempClickLocationSubmit(res.feature.text, coordinates[1], coordinates[0], rating, res.feature.image);
            mainMap.removeLayer(pointQuery);
            console.log("Rating logged");

          } else {

            console.log('You need to check something off!');

          }
        });


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

////////// TEMPLATES FOR GEOPOINT and GEOSET in geoJSON FORMAT //////////
var geoJSONPoint = (longitude, latitude, name, thumb, image, friendWishOnly, friendWish) => {
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
      },
      friendWishOnly: friendWishOnly,
      friendWish: friendWish
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
  console.log("this is the array", array);
  const geoPointArray = array.map((spot) => {
    // console.log('spot is', spot);
    var ratingImg;
    if (spot.yourWish && spot.friendWish.length && spot.wishStatus === 'open') {
      ratingImg = heartRed;
    } else if (spot.yourWish && spot.wishStatus === 'open') {
      ratingImg = heartPink;
    } else if (spot.yourWish && spot.wishStatus === 'accepted') {
      ratingImg = giftImage;
    //else if it is not your wish but your friends wish
    } else if (spot.friendWishOnly) {
      ratingImg = starFill;
    } else {
      ratingImg = spot.rating === '5' ? thumbUp : thumbDown;
    } 
    return geoJSONPoint(spot.longitude, spot.latitude, spot.name, ratingImg, spot.yelpData.image, spot.friendWishOnly, spot.friendWish);
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
  };
};