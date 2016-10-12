webpackHotUpdate(0,{

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	var _redux = __webpack_require__(166);

	var _actions = __webpack_require__(184);

	var Actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Default focus if location access not allowed or available. (Moscone Center)
	var defaultCoord = [37.784005, -122.401551];

	// Public accessToken. Set up from mapbox.com. Make sure is a public token
	L.mapbox.accessToken = 'pk.eyJ1Ijoicm1jY2hlc24iLCJhIjoiY2lxbHkxbXFiMDA5dWZubm5mNWkwdGYwbiJ9.QC1lP-2tNymbJ5tHaMugZw';


	// Globl map
	var mainMap, restaurantPoints, layerGroup;
	var initialize = true;

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

	var Map = function (_React$Component) {
	  _inherits(Map, _React$Component);

	  function Map(props) {
	    _classCallCheck(this, Map);

	    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

	    _this.state = {
	      temp_collection: [],
	      collection: _this.props.collection
	    };
	    return _this;
	  }

	  _createClass(Map, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      console.log('component mount, this.state.collection, ', this.state.collection);
	      this.props.actions.fetchCollection().then(function (results) {
	        _this2.renderMap();
	        _this2.getUserLocation(mainMap);
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      console.log('nextprops, ', nextProps);
	      console.log('componentWillReceiveProps');
	      if (layerGroup) {
	        layerGroup.clearLayers();
	        layerGroup = L.layerGroup().addTo(mainMap);
	      }

	      //creates a uniqueId for already rated items
	      console.log('this.state.collection in component will receive props, ', this.state.collection);
	      var collection = nextProps.collection;
	      var uniqueIds = collection.map(function (id) {
	        return id.name + id.latitude.toString().slice(0, 2) + id.longitude.toString().slice(0, 2);
	      });

	      //render user search results
	      nextProps.searchResults.forEach(function (yelpResultEntry) {
	        //compare search results uniqueId with already rated items
	        var id = yelpResultEntry.name + yelpResultEntry.latitude.toString().slice(0, 2) + yelpResultEntry.longitude.toString().slice(0, 2);
	        if (uniqueIds.indexOf(id) === -1) {
	          _this3.foundRestaurant(formatResObj(yelpResultEntry));
	        }
	      });
	    }
	  }, {
	    key: 'tempClickLocationSubmit',
	    value: function tempClickLocationSubmit(name, latitude, longitude, rating, image) {
	      // Create object to make DB query
	      console.log('tempClickLocationSubmit');
	      var spotToAdd = {
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
	      // var newCollection = this.state.temp_collection.concat([spotToAdd]);
	      //get updated data, and setState
	      // this.props.getSpots();
	      // this.setState({
	      //   temp_collection: newCollection
	      // })
	    }
	  }, {
	    key: 'tempClickWishListSubmit',
	    value: function tempClickWishListSubmit(name, latitude, longitude) {
	      this.props.getUpdate({ name: name, latitude: latitude, longitude: longitude });
	    }
	  }, {
	    key: 'mapSearchCoord',
	    value: function mapSearchCoord(e) {
	      // e.preventDefault();
	      this.props.actions.mapSearchCoord(e);
	    }
	  }, {
	    key: 'mapSearchZoom',
	    value: function mapSearchZoom(e) {
	      this.props.actions.mapSearchZoom(e);
	    }
	  }, {
	    key: 'renderMap',
	    value: function renderMap() {
	      var _this4 = this;

	      console.log('lmapbox', L.mapbox);
	      mainMap = L.mapbox.map('map-one', 'mapbox.streets').setView(defaultCoord, 16);

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
	      mainMap.on('moveend', function () {
	        _this4.mapSearchCoord(mainMap.getBounds().getCenter());
	      });

	      mainMap.on('zoomend', function () {
	        _this4.mapSearchZoom(mainMap.getZoom());
	      });

	      this.addPointsLayer(mainMap);
	      layerGroup = L.layerGroup().addTo(mainMap);

	      initialize = false;
	      return mainMap;
	    }

	    // Helpers to handle search results

	  }, {
	    key: 'addPointsLayer',
	    value: function addPointsLayer(map) {
	      var that = this;
	      if (!initialize) {
	        // console.log('mainMap.removeLayer(restaurantPoints);');
	        mainMap.removeLayer(restaurantPoints);
	      }
	      // console.log('restaurantPoints', restaurantPoints);
	      restaurantPoints = L.mapbox.featureLayer().addTo(map);

	      restaurantPoints.on('layeradd', function (point) {
	        // var that = this;
	        var marker = point.layer;
	        var feature = marker.feature;
	        marker.setIcon(L.icon(feature.properties.icon));
	        var content = '<h2>' + feature.properties.title + '<\/h2>' + '<img src="' + feature.properties.image + '" alt="">' + ('<img id="wishImage" src="' + wishImage + '" alt="">') + (marker.feature.properties.icon.iconUrl == starFill ? '<img id="giftImage" src="' + giftImage + '"' : '');
	        //wish icon on click, change icon
	        marker.bindPopup(content);
	        marker.on('mouseover', function (e) {
	          console.log(marker.feature.properties.icon.iconUrl);
	          this.openPopup();
	        });
	        marker.on('popupopen', function (e) {
	          // var that = this;
	          $('#wishImage').click(function (event) {
	            console.log('Image clicked', feature);
	            // marker.setIcon(L.icon({
	            //   iconUrl: starEmpty,
	            //   iconSize: [35, 35],
	            //   iconAnchor: [35, 17],
	            //   popupAnchor: [-17, -17]
	            // }))
	            //also call function to send info 
	            var latlng = marker._latlng;
	            that.tempClickWishListSubmit(feature.properties.title, latlng.lat, latlng.lng);
	            // Actions.clickWishListSubmit(feature.properties.title, latlng.lat, latlng.lng);
	            console.log(that);
	            var wishData = {
	              name: feature.properties.title,
	              latitude: latlng.lat,
	              longitude: latlng.lng
	            };
	            // let updatedCollection = that.props.getUpdate(wishData);
	            // that.setState({
	            //   collection: updatedCollection  
	            // })
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
	      var formattedPoints = formatGeoJSON(collection);
	      // console.log('formatted points are', formattedPoints);
	      restaurantPoints.setGeoJSON(formatGeoJSON(collection));
	    }

	    // Helpers for interacting with users live location

	  }, {
	    key: 'getUserLocation',
	    value: function getUserLocation() {
	      navigator.geolocation.getCurrentPosition(function (position) {
	        geoSuccess(position);
	      }, geoError);
	    }
	  }, {
	    key: 'foundRestaurant',
	    value: function foundRestaurant(res) {
	      // console.log('found a place', res, res.feature.text, res.feature.center); // -122, 33 long / lat
	      // var onClick = (event) => { Actions.clickLocationSubmit(res.feature.text) };
	      var pointQuery = L.mapbox.featureLayer().addTo(layerGroup);
	      console.log('pointQuery', pointQuery);
	      pointQuery.on('layeradd', function (point) {
	        // console.log('actions', Actions);
	        var marker = point.layer;
	        var feature = marker.feature;
	        marker.setIcon(L.icon(feature.properties.icon));
	        var content = '<h2>' + feature.properties.title + '<\/h2>' + '<form>I would<br>' + ('<input type="radio" name="goBack' + pointQuery._leaflet_id + '" required> Definitely and absolutely<br>') + ('<input type="radio" name="goBack' + pointQuery._leaflet_id + '"> Never ever ever<br>') + 'go back<br>' + ('<input type="button" id="fistBump' + pointQuery._leaflet_id + '" value="Thumbs!"></form>') + '<img src="' + feature.properties.image + '" alt="">' + ('<img id="wishImage" src="' + wishImage + '" alt="">') + (marker.feature.properties.icon.iconUrl == starFill ? '<img id="giftImage" src="' + giftImage + '"' : '');

	        marker.bindPopup(content);
	        marker.on('mouseover', function (e) {
	          this.openPopup();
	        });
	        marker.on('popupopen', function (e) {
	          $('#wishImage').click(function (event) {
	            console.log('Image clicked', marker);
	            // marker.setIcon(L.icon({
	            //   iconUrl: starEmpty,
	            //   iconSize: [35, 35],
	            //   iconAnchor: [35, 17],
	            //   popupAnchor: [-17, -17]
	            // }))
	            //also call function to send info 
	            var latlng = marker._latlng;
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
	      $('.leaflet-popup-content').on('click', '#fistBump' + pointQuery._leaflet_id, function () {
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
	  }, {
	    key: 'render',
	    value: function render() {
	      // Sets collection to default to the entire collection
	      // this.deleteExistingPointsLayer(mainMap)
	      if (!initialize) {
	        this.addPointsLayer(mainMap);
	      }
	      return _react2.default.createElement('div', { className: 'map', id: 'map-one' });
	    }
	  }]);

	  return Map;
	}(_react2.default.Component);

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
	    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
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

	////////// TEMPLATES FOR GEOPOINT and GEOSET in geoJSON FORMAT //////////
	var geoJSONPoint = function geoJSONPoint(longitude, latitude, name, thumb, image) {
	  return {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [longitude, latitude]
	    },
	    properties: { // for styling
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

	var geoJSONSet = function geoJSONSet() {
	  return [{
	    type: 'FeatureCollection',
	    features: []
	  }];
	};

	////////// HELPER FUNCTIONS - TODO MODULARIZE //////////
	function formatGeoJSON(array) {
	  var geoPointArray = array.map(function (spot) {
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
	    return geoJSONPoint(spot.longitude, spot.latitude, spot.name, ratingImg, spot.yelpData.image);
	  });
	  return [{
	    type: 'FeatureCollection',
	    features: geoPointArray
	  }];
	}
	// Helpers for grabbing locations
	var getSpots = function getSpots() {
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

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Map);

	// Helpers for rendering mapping data


	var geoError = function geoError() {
	  alert('Our apologies, but it appears we are unable to find you');
	};

	var geoSuccess = function geoSuccess(position) {
	  mainMap.setView([position.coords.latitude, position.coords.longitude]);
	};

	var currentMapView = function currentMapView() {
	  return mainMap.getCenter();
	};

	var formatResObj = function formatResObj(yelpResultEntry) {
	  return {
	    feature: {
	      center: [yelpResultEntry.longitude, yelpResultEntry.latitude],
	      text: yelpResultEntry.name,
	      image: yelpResultEntry.image
	    }
	  };
	};

/***/ }

})