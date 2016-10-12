webpackHotUpdate(0,Array(182).concat([
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Map = __webpack_require__(183);

	var _Map2 = _interopRequireDefault(_Map);

	var _Nav = __webpack_require__(195);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Panel = __webpack_require__(196);

	var _Panel2 = _interopRequireDefault(_Panel);

	var _reactRedux = __webpack_require__(159);

	var _redux = __webpack_require__(166);

	var _actions = __webpack_require__(184);

	var Actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      collection: []
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var that = this;
	      this.getSpots();
	      console.log('states during app mount, ', that.state.collection);
	    }
	  }, {
	    key: 'getUpdate',
	    value: function getUpdate(wish) {
	      console.log('calling getUpdate');
	      var that = this;
	      $.post('/api/wishes', wish, function (data, err) {
	        // this.state.collection = res;
	        // console.log('api/wishes called, ', data)
	        // console.log('error: ', err)
	      }).then(function (result) {
	        that.getSpots();
	      });
	    }
	  }, {
	    key: 'getSpots',
	    value: function getSpots() {
	      var that = this;
	      $.get('/api/spots', function (data, err) {
	        console.log('hi');
	      }).then(function (result) {
	        console.log("this is result.data", result.data);
	        that.setState({
	          collection: result.data
	        });
	      });
	    }
	  }, {
	    key: 'postSpots',
	    value: function postSpots(spotObj) {
	      var that = this;
	      $.post('/api/spots', spotObj, function (data, err) {
	        console.log('hii');
	      }).then(function (result) {
	        that.getSpots();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Nav2.default, null),
	        _react2.default.createElement(_Map2.default, {
	          collection: this.state.collection,
	          getUpdate: this.getUpdate.bind(this),
	          getSpots: this.getSpots.bind(this),
	          postSpots: this.postSpots.bind(this)
	        }),
	        _react2.default.createElement(_Panel2.default, null)
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	function mapStateToProps(state) {
	  return {
	    totalCollection: state.CollectionRestaurantsFilters.collection
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
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

	var _CollectionModel = __webpack_require__(211);

	var _CollectionModel2 = _interopRequireDefault(_CollectionModel);

	var _ResultModel = __webpack_require__(212);

	var _ResultModel2 = _interopRequireDefault(_ResultModel);

	var _FilterItem = __webpack_require__(213);

	var _FilterItem2 = _interopRequireDefault(_FilterItem);

	var _FriendModel = __webpack_require__(214);

	var _FriendModel2 = _interopRequireDefault(_FriendModel);

	var _actions = __webpack_require__(184);

	var Actions = _interopRequireWildcard(_actions);

	var _CollectionDetailModel = __webpack_require__(215);

	var _CollectionDetailModel2 = _interopRequireDefault(_CollectionDetailModel);

	var _utils = __webpack_require__(216);

	var _superagent = __webpack_require__(185);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = __webpack_require__(217).slide;

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel() {
	    _classCallCheck(this, Panel);

	    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
	  }

	  _createClass(Panel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.actions.fetchCollection();
	      this.props.actions.fetchFriendRequests();
	      this.props.actions.fetchCurrentFriends();
	      console.log('panel has mounted!!!');
	    }
	  }, {
	    key: 'submitFriendReq',
	    value: function submitFriendReq(e) {
	      e.preventDefault();

	      var friendRequest = {
	        requestee: document.getElementsByClassName('friendToAdd')[0].value
	      };
	      console.log(friendRequest);
	      var data = new Promise(function (resolve, reject) {
	        _superagent2.default.post('/api/friendRequest').send(friendRequest).end(function (err, res) {
	          if (err) {
	            console.log(err);
	            return reject(err);
	          }
	          console.log('response test', res.text);
	          if (res.text.indexOf('exist') !== -1) {
	            (0, _utils.fade)(".doesntExist");
	            console.log('doesnt exist');
	          } else if (res.text.indexOf('request sent') !== -1) {
	            (0, _utils.fade)(".requestSent");
	            console.log('request  sent!!');
	          } else if (res.text.indexOf('already send') !== -1) {
	            (0, _utils.fade)(".alreadySent");
	            console.log('request already sent');
	          } else {
	            (0, _utils.fade)(".alreadyAFriend");
	            document.getElementsByClassName("alreadyAFriend")[0].style.display = 'inline';
	          }
	          return resolve(res);
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var panelItems = void 0;
	      this.props.actions.createFilters(this.props.totalCollection, this.props.filters);
	      console.log(this.props.panelMode);
	      if (this.props.panelMode === 'friendRequests') {

	        panelItems = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'friendToAdd ', type: 'text', placeholder: 'Add a Friend' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'button', onClick: this.submitFriendReq.bind(this) },
	              'Send Request'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mess alreadyAFriend' },
	              ' Already a friend '
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mess doesntExist' },
	              ' This Person hasn\'t signed up '
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mess requestSent' },
	              ' Request Sent! '
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mess alreadySent' },
	              ' Already sent a friend request '
	            ),
	            !this.props.friendRequests.length ? _react2.default.createElement(
	              'p',
	              { className: 'noPending' },
	              'No pending friend requests'
	            ) : null
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            this.props.friendRequests.map(function (person) {
	              return _react2.default.createElement(_FriendModel2.default, { item: person });
	            })
	          )
	        );
	      } else if (this.props.panelMode === 'results') {
	        if (this.props.searchResults.length === 0) {

	          panelItems = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              { style: { color: "white" } },
	              'Search Something!'
	            )
	          );
	        } else {
	          panelItems = this.props.searchResults.map(function (restaurant) {
	            return _react2.default.createElement(_ResultModel2.default, { item: restaurant,
	              viewCollectionItem: _this2.props.actions.viewCollectionItem,
	              key: restaurant.name });
	          });
	        }
	      } else if (this.props.panelMode === 'filter') {

	        panelItems = this.props.filters.map(function (filter) {
	          return _react2.default.createElement(_FilterItem2.default, { filter: filter,
	            appliedFilters: _this2.props.filterSelected,
	            toggleFilter: _this2.props.actions.toggleFilter,
	            collection: _this2.props.totalCollection,
	            key: filter });
	        });
	      } else if (this.props.filteredCollection.length !== 0) {

	        panelItems = this.props.filteredCollection.map(function (restaurant) {
	          return _react2.default.createElement(_CollectionModel2.default, { item: restaurant, key: restaurant.name });
	        });
	      } else if (this.props.panelMode === 'collection') {
	        if (this.props.totalCollection.length === 0) {

	          panelItems = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              { style: { color: "white" } },
	              'Add some places to your collection!'
	            )
	          );
	        } else {
	          panelItems = this.props.totalCollection.map(function (restaurant) {
	            return _react2.default.createElement(_CollectionModel2.default, { item: restaurant,
	              viewCollectionItem: _this2.props.actions.viewCollectionItem,
	              key: restaurant.name });
	          });
	        }
	      }
	      return _react2.default.createElement(
	        Menu,
	        { style: { color: 'blue' },
	          id: 'panel',
	          right: true,
	          noOverlay: true,
	          customBurgerIcon: false,
	          customCrossIcon: false,
	          isOpen: this.props.isOpen },
	        panelItems
	      );
	    }
	  }]);

	  return Panel;
	}(_react2.default.Component);

	function mapStateToProps(state) {
	  return {
	    totalCollection: state.CollectionRestaurantsFilters.collection,
	    filters: state.FilterSelectedRestaurants.filters,
	    filterSelected: state.FilterSelectedRestaurants.filterSelected,
	    filteredCollection: state.FilterSelectedRestaurants.filteredRestaurants,
	    panelMode: state.PanelMode.panelMode,
	    isOpen: state.PanelMode.isOpen,
	    searchResults: state.SearchBar.searchResults,
	    friendRequests: state.FriendReqs.friendReqs

	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Panel);

/***/ },
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const $ = require('jquery');
	//
	// $('.restaurant').tooltip();
	//
	// $(document).ready(function(){
	// $('[data-toggle="tooltip"]').tooltip();
	//
	// });
	// $('#restaurant');

	var CollectionModel = function CollectionModel(_ref) {
	  var item = _ref.item;

	  console.log('item', item);
	  console.log('rewind');
	  var url = item.yelpData.url;
	  var yelpRating = item.yelpData.rating;
	  var address = item.yelpData.address;
	  console.log('address', address);
	  return _react2.default.createElement(
	    'div',
	    { id: 'restaurant', className: 'restaurant card' },
	    _react2.default.createElement('img', { className: 'card-img-top', src: item.yelpData.image }),
	    _react2.default.createElement(
	      'div',
	      { className: 'card-block' },
	      _react2.default.createElement(
	        'h4',
	        { className: 'card-title' },
	        _react2.default.createElement(
	          'a',
	          { href: url, target: '_blank' },
	          item.name
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'ul',
	      { className: 'list-group list-group-flush' },
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Address: ',
	        _react2.default.createElement(
	          'p',
	          { style: { fontSize: '12px' } },
	          address
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Your Rating: ',
	        item.rating
	      ),
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Yelp Rating: ',
	        yelpRating
	      ),
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Type: ',
	        item.yelpData.cuisine
	      )
	    )
	  );
	  console.log(here);
	};

	exports.default = CollectionModel;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const $ = require('jquery');
	//
	// $('.restaurant').tooltip();
	//
	// $(document).ready(function(){
	// $('[data-toggle="tooltip"]').tooltip();
	//
	// });
	// $('#restaurant');

	var ResultModel = function ResultModel(_ref) {
	  var item = _ref.item;

	  console.log('item', item);
	  var url = item.url;
	  var rating = item.rating;
	  var address = item.address;

	  return _react2.default.createElement(
	    'div',
	    { id: 'restaurant', className: 'restaurant card' },
	    _react2.default.createElement('img', { className: 'card-img-top', src: item.image }),
	    _react2.default.createElement(
	      'div',
	      { className: 'card-block' },
	      _react2.default.createElement(
	        'h4',
	        { className: 'card-title' },
	        _react2.default.createElement(
	          'a',
	          { href: url, target: '_blank' },
	          item.name
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'ul',
	      { className: 'list-group list-group-flush' },
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Address: ',
	        _react2.default.createElement(
	          'p',
	          { style: { fontSize: '12px' } },
	          address
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Yelp Rating: ',
	        rating
	      ),
	      _react2.default.createElement(
	        'li',
	        { className: 'list-group-item' },
	        'Type: ',
	        item.cuisine
	      )
	    )
	  );
	  console.log(here);
	};

	exports.default = ResultModel;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// The contets will be dependant on the form the information takes
	var FilterItem = function FilterItem(_ref) {
	  var filter = _ref.filter;
	  var appliedFilters = _ref.appliedFilters;
	  var toggleFilter = _ref.toggleFilter;
	  var collection = _ref.collection;

	  var cssClasses = 'btn btn-default btn-sm';
	  if (_.findIndex(appliedFilters, function (o) {
	    return o === filter;
	  }) > -1) {
	    cssClasses += ' active';
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: 'filter' },
	    _react2.default.createElement(
	      'div',
	      { className: cssClasses, onClick: function onClick() {
	          toggleFilter(filter, appliedFilters, collection);
	        } },
	      filter
	    )
	  );
	};

	exports.default = FilterItem;

/***/ },
/* 214 */
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

	var friendEndpoints = {
	  accept: '/api/confirmFriend',
	  decline: '/api/rejectFriend'
	};

	var FriendModel = function (_React$Component) {
	  _inherits(FriendModel, _React$Component);

	  //console.log('you should see a friend!');
	  function FriendModel(props) {
	    _classCallCheck(this, FriendModel);

	    return _possibleConstructorReturn(this, (FriendModel.__proto__ || Object.getPrototypeOf(FriendModel)).call(this, props));
	  }

	  _createClass(FriendModel, [{
	    key: 'accept',
	    value: function accept(person) {
	      var that = this;
	      $.post(friendEndpoints.accept, { friendname: person }, function (a, b) {
	        console.log('accept request!!', a, 'error(?):', b);
	        that.props.actions.fetchFriendRequests();
	        console.log('the new store!:', that.props.friendRequestsLower);
	      });
	    }
	  }, {
	    key: 'decline',
	    value: function decline(person) {
	      var that = this;
	      $.post(friendEndpoints.decline, { friendname: person }, function (a, b) {
	        console.log('decline request!!', a, 'error(?):', b);
	        that.props.actions.fetchFriendRequests();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var that = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.item.requestor,
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              that.accept(that.props.item.requestor);
	            } },
	          'Accept'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              that.decline(that.props.item.requestor);
	            } },
	          'Decline'
	        )
	      );
	    }
	  }]);

	  return FriendModel;
	}(_react2.default.Component);

	;

	function mapStateToProps(state) {
	  return {
	    friendRequestsLower: state.FriendReqs.friendReqs
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(Actions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FriendModel);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//{item, closeCollectionItem}
	// The contets will be dependant on the form the information takes
	var CollectionDetailModel = function CollectionDetailModel(props) {

	  console.log('here', props);
	  // return (
	  // <div className='detail'>
	  //   <span>Name</span><span>{item.name}</span>
	  //   <span>Rating</span><span>{item.rating}</span>
	  //   <span>Location</span><span>{item.location}</span>
	  //   <span>Keywords</span><span>{item.keywords}</span>
	  //   <span>Notes</span><span>{item.notes}</span>
	  //   <img src="" alt="Close Button" onClick={() => { closeCollectionItem(); }} />
	  // </div>
	  // );
	};

	exports.default = CollectionDetailModel;

/***/ },
/* 216 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fade = fade;
	function fade(el) {
	  $(el).fadeIn(1000);
	  $(el).fadeOut(1000);
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  slide: __webpack_require__(218),
	  stack: __webpack_require__(285),
	  elastic: __webpack_require__(286),
	  bubble: __webpack_require__(290),
	  push: __webpack_require__(291),
	  pushRotate: __webpack_require__(292),
	  scaleDown: __webpack_require__(293),
	  scaleRotate: __webpack_require__(294),
	  fallDown: __webpack_require__(295)
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _radium = __webpack_require__(220);

	var _radium2 = _interopRequireDefault(_radium);

	var _baseStyles = __webpack_require__(282);

	var _baseStyles2 = _interopRequireDefault(_baseStyles);

	var _BurgerIcon = __webpack_require__(283);

	var _BurgerIcon2 = _interopRequireDefault(_BurgerIcon);

	var _CrossIcon = __webpack_require__(284);

	var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

	exports['default'] = function (styles) {

	  return (0, _radium2['default'])(_react2['default'].createClass({

	    propTypes: {
	      customBurgerIcon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.oneOf([false])]),
	      customCrossIcon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.oneOf([false])]),
	      id: _react2['default'].PropTypes.string,
	      isOpen: _react2['default'].PropTypes.bool,
	      noOverlay: _react2['default'].PropTypes.bool,
	      onStateChange: _react2['default'].PropTypes.func,
	      outerContainerId: styles && styles.outerContainer ? _react2['default'].PropTypes.string.isRequired : _react2['default'].PropTypes.string,
	      pageWrapId: styles && styles.pageWrap ? _react2['default'].PropTypes.string.isRequired : _react2['default'].PropTypes.string,
	      right: _react2['default'].PropTypes.bool,
	      styles: _react2['default'].PropTypes.object,
	      width: _react2['default'].PropTypes.number
	    },

	    toggleMenu: function toggleMenu() {
	      // Order important: handle wrappers before setting sidebar state.
	      this.applyWrapperStyles();

	      var newState = { isOpen: !this.state.isOpen };
	      this.setState(newState, this.props.onStateChange.bind(null, newState));
	    },

	    // Applies component-specific styles to external wrapper elements.
	    applyWrapperStyles: function applyWrapperStyles() {
	      if (styles.pageWrap && this.props.pageWrapId) {
	        this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, true);
	      }

	      if (styles.outerContainer && this.props.outerContainerId) {
	        this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, true);
	      }
	    },

	    // Removes component-specific styles applied to external wrapper elements.
	    clearWrapperStyles: function clearWrapperStyles() {
	      if (styles.pageWrap && this.props.pageWrapId) {
	        this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, false);
	      }

	      if (styles.outerContainer && this.props.outerContainerId) {
	        this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, false);
	      }
	    },

	    // Sets or unsets styles on DOM elements outside the menu component.
	    // This is necessary for correct page interaction with some of the menus.
	    // Throws and returns if the required external elements don't exist,
	    // which means any external page animations won't be applied.
	    handleExternalWrapper: function handleExternalWrapper(id, wrapperStyles, set) {
	      var html = document.querySelector('html');
	      var body = document.querySelector('body');
	      var wrapper = document.getElementById(id);

	      if (!wrapper) {
	        console.error("Element with ID '" + id + "' not found");
	        return;
	      }

	      var builtStyles = wrapperStyles(this.state.isOpen, this.props.width, this.props.right);

	      for (var prop in builtStyles) {
	        if (builtStyles.hasOwnProperty(prop)) {
	          wrapper.style[prop] = set ? builtStyles[prop] : '';
	        }
	      }

	      // Prevent any horizontal scroll.
	      [html, body].forEach(function (element) {
	        element.style['overflow-x'] = set ? 'hidden' : '';
	      });
	    },

	    // Builds styles incrementally for a given element.
	    getStyles: function getStyles(el, index) {
	      var propName = 'bm' + el.replace(el.charAt(0), el.charAt(0).toUpperCase());

	      // Set base styles.
	      var output = _baseStyles2['default'][el] ? [_baseStyles2['default'][el](this.state.isOpen, this.props.width, this.props.right)] : [];

	      // Add animation-specific styles.
	      if (styles[el]) {
	        output.push(styles[el](this.state.isOpen, this.props.width, this.props.right, index + 1));
	      }

	      // Add custom styles.
	      if (this.props.styles[propName]) {
	        output.push(this.props.styles[propName]);
	      }

	      return output;
	    },

	    listenForClose: function listenForClose(e) {
	      e = e || window.event;

	      if (this.state.isOpen && (e.key === 'Escape' || e.keyCode === 27)) {
	        this.toggleMenu();
	      }
	    },

	    getDefaultProps: function getDefaultProps() {
	      return {
	        id: '',
	        noOverlay: false,
	        onStateChange: function onStateChange() {},
	        outerContainerId: '',
	        pageWrapId: '',
	        styles: {},
	        width: 300
	      };
	    },

	    getInitialState: function getInitialState() {
	      var initialIsOpenProp = this.props && typeof this.props.isOpen !== 'undefined';
	      return { isOpen: initialIsOpenProp ? this.props.isOpen : false };
	    },

	    componentWillMount: function componentWillMount() {
	      if (!styles) {
	        throw new Error('No styles supplied');
	      }

	      // Allow initial open state to be set by props.
	      if (this.props.isOpen) {
	        this.toggleMenu();
	      }
	    },

	    componentDidMount: function componentDidMount() {
	      window.onkeydown = this.listenForClose;

	      // Allow initial open state to be set by props for animations with wrapper elements.
	      if (this.props.isOpen) {
	        this.toggleMenu();
	      }
	    },

	    componentWillUnmount: function componentWillUnmount() {
	      window.onkeydown = null;

	      this.clearWrapperStyles();
	    },

	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;

	      if (styles.svg && this.isMounted()) {
	        (function () {
	          var morphShape = _reactDom2['default'].findDOMNode(_this, 'bm-morph-shape');
	          var path = styles.svg.lib(morphShape).select('path');

	          if (_this.state.isOpen) {
	            // Animate SVG path.
	            styles.svg.animate(path);
	          } else {
	            // Reset path (timeout ensures animation happens off screen).
	            setTimeout(function () {
	              path.attr('d', styles.svg.pathInitial);
	            }, 300);
	          }
	        })();
	      }
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	      if (typeof nextProps.isOpen !== 'undefined' && nextProps.isOpen !== this.state.isOpen) {
	        this.toggleMenu();
	      }
	    },

	    render: function render() {
	      var _this2 = this;

	      return _react2['default'].createElement(
	        'div',
	        null,
	        !this.props.noOverlay ? _react2['default'].createElement('div', { className: 'bm-overlay', onClick: this.toggleMenu, style: this.getStyles('overlay') }) : null,
	        _react2['default'].createElement(
	          'div',
	          { id: this.props.id, className: "bm-menu-wrap", style: this.getStyles('menuWrap') },
	          styles.svg ? _react2['default'].createElement(
	            'div',
	            { className: 'bm-morph-shape', style: this.getStyles('morphShape') },
	            _react2['default'].createElement(
	              'svg',
	              { width: '100%', height: '100%', viewBox: '0 0 100 800', preserveAspectRatio: 'none' },
	              _react2['default'].createElement('path', { d: styles.svg.pathInitial })
	            )
	          ) : null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'bm-menu', style: this.getStyles('menu') },
	            _react2['default'].createElement(
	              'nav',
	              { className: 'bm-item-list', style: this.getStyles('itemList') },
	              _react2['default'].Children.map(this.props.children, function (item, index) {
	                var extraProps = {
	                  key: index,
	                  style: _this2.getStyles('item', index)
	                };
	                return _react2['default'].cloneElement(item, extraProps);
	              })
	            )
	          ),
	          this.props.customCrossIcon !== false ? _react2['default'].createElement(
	            'div',
	            { style: this.getStyles('closeButton') },
	            _react2['default'].createElement(_CrossIcon2['default'], { onClick: this.toggleMenu, styles: this.props.styles, customIcon: this.props.customCrossIcon })
	          ) : null
	        ),
	        this.props.customBurgerIcon !== false ? _react2['default'].createElement(_BurgerIcon2['default'], { onClick: this.toggleMenu, styles: this.props.styles, customIcon: this.props.customBurgerIcon }) : null
	      );
	    }
	  }));
	};

	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enhancer = __webpack_require__(221);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _plugins = __webpack_require__(267);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _style = __webpack_require__(278);

	var _style2 = _interopRequireDefault(_style);

	var _styleRoot = __webpack_require__(279);

	var _styleRoot2 = _interopRequireDefault(_styleRoot);

	var _getState = __webpack_require__(263);

	var _getState2 = _interopRequireDefault(_getState);

	var _keyframes = __webpack_require__(281);

	var _keyframes2 = _interopRequireDefault(_keyframes);

	var _resolveStyles = __webpack_require__(223);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Radium(ComposedComponent) {
	  return (0, _enhancer2.default)(ComposedComponent);
	}

	Radium.Plugins = _plugins2.default;
	Radium.Style = _style2.default;
	Radium.StyleRoot = _styleRoot2.default;
	Radium.getState = _getState2.default;
	Radium.keyframes = _keyframes2.default;

	if (process.env.NODE_ENV !== 'production') {
	  Radium.TestMode = {
	    clearState: _resolveStyles.__clearStateForTests,
	    disable: _resolveStyles.__setTestMode.bind(null, false),
	    enable: _resolveStyles.__setTestMode.bind(null, true)
	  };
	}

	exports.default = Radium;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = enhanceWithRadium;

	var _react = __webpack_require__(1);

	var _styleKeeper = __webpack_require__(222);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _resolveStyles = __webpack_require__(223);

	var _resolveStyles2 = _interopRequireDefault(_resolveStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

	function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	}

	function isStateless(component) {
	  return !component.render && !(component.prototype && component.prototype.render);
	}

	function enhanceWithRadium(configOrComposedComponent) {
	  var _class, _temp;

	  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function v(configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }

	  var component = configOrComposedComponent;
	  var ComposedComponent = component;

	  // Handle stateless components
	  if (isStateless(ComposedComponent)) {
	    ComposedComponent = function (_Component) {
	      _inherits(ComposedComponent, _Component);

	      function ComposedComponent() {
	        _classCallCheck(this, ComposedComponent);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      ComposedComponent.prototype.render = function render() {
	        return component(this.props, this.context);
	      };

	      return ComposedComponent;
	    }(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }

	  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);

	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);

	      var _this2 = _possibleConstructorReturn(this, _ComposedComponent.apply(this, arguments));

	      _this2.state = _this2.state || {};
	      _this2.state._radiumStyleState = {};
	      _this2._radiumIsMounted = true;
	      return _this2;
	    }

	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }

	      this._radiumIsMounted = false;

	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }

	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };

	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};

	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }

	      var newContext = _extends({}, superChildContext);

	      if (this.props.radiumConfig) {
	        newContext._radiumConfig = this.props.radiumConfig;
	      }

	      return newContext;
	    };

	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }

	      return (0, _resolveStyles2.default)(this, renderedElement, currentConfig);
	    };

	    return RadiumEnhancer;
	  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

	  // Class inheritance uses Object.create and because of __proto__ issues
	  // with IE <10 any static properties of the superclass aren't inherited and
	  // so need to be manually populated.
	  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

	  copyProperties(component, RadiumEnhancer);

	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }

	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }

	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';

	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  return RadiumEnhancer;
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StyleKeeper = function () {
	  function StyleKeeper(userAgent) {
	    _classCallCheck(this, StyleKeeper);

	    this._userAgent = userAgent;
	    this._listeners = [];
	    this._cssSet = {};
	  }

	  StyleKeeper.prototype.subscribe = function subscribe(listener) {
	    var _this = this;

	    if (this._listeners.indexOf(listener) === -1) {
	      this._listeners.push(listener);
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        var listenerIndex = _this._listeners.indexOf(listener);
	        if (listenerIndex > -1) {
	          _this._listeners.splice(listenerIndex, 1);
	        }
	      }
	    };
	  };

	  StyleKeeper.prototype.addCSS = function addCSS(css) {
	    var _this2 = this;

	    if (!this._cssSet[css]) {
	      this._cssSet[css] = true;
	      this._emitChange();
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        delete _this2._cssSet[css];
	        _this2._emitChange();
	      }
	    };
	  };

	  StyleKeeper.prototype.getCSS = function getCSS() {
	    return Object.keys(this._cssSet).join('\n');
	  };

	  StyleKeeper.prototype._emitChange = function _emitChange() {
	    this._listeners.forEach(function (listener) {
	      return listener();
	    });
	  };

	  return StyleKeeper;
	}();

	exports.default = StyleKeeper;
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _appendImportantToEachValue = __webpack_require__(224);

	var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);

	var _cssRuleSetToString = __webpack_require__(227);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _getState = __webpack_require__(263);

	var _getState2 = _interopRequireDefault(_getState);

	var _getStateKey = __webpack_require__(264);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	var _hash = __webpack_require__(265);

	var _hash2 = _interopRequireDefault(_hash);

	var _mergeStyles = __webpack_require__(266);

	var _plugins = __webpack_require__(267);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _exenv = __webpack_require__(277);

	var _exenv2 = _interopRequireDefault(_exenv);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_CONFIG = {
	  plugins: [_plugins2.default.mergeStyleArray, _plugins2.default.checkProps, _plugins2.default.resolveMediaQueries, _plugins2.default.resolveInteractionStyles, _plugins2.default.keyframes, _plugins2.default.visited, _plugins2.default.removeNestedStyles, _plugins2.default.prefix, _plugins2.default.checkProps]
	};

	// Gross
	var globalState = {};

	// Declare early for recursive helpers.
	var resolveStyles = null;

	var _shouldResolveStyles = function _shouldResolveStyles(component) {
	  return component.type && !component.type._isRadiumEnhanced;
	};

	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;

	  if (!children) {
	    return children;
	  }

	  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }

	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2.default.isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap, true);
	      }
	      return result;
	    };
	  }

	  if (_react2.default.Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2.default.Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap, true);
	  }

	  return _react2.default.Children.map(children, function (child) {
	    if (_react2.default.isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap, true);
	    }

	    return child;
	  });
	};

	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;

	  var newProps = props;

	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }

	    var propValue = props[prop];
	    if (_react2.default.isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap, true);
	    }
	  });

	  return newProps;
	};

	var _buildGetKey = function _buildGetKey(_ref3) {
	  var componentName = _ref3.componentName;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var renderedElement = _ref3.renderedElement;

	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = (0, _getStateKey2.default)(originalKey);

	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }

	    alreadyGotKey = true;

	    if (existingKeyMap[key]) {
	      var elementName = void 0;
	      if (typeof renderedElement.type === 'string') {
	        elementName = renderedElement.type;
	      } else if (renderedElement.type.constructor) {
	        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
	      }

	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
	    }

	    existingKeyMap[key] = true;

	    return key;
	  };

	  return getKey;
	};

	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }

	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;

	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};

	var _runPlugins = function _runPlugins(_ref4) {
	  var component = _ref4.component;
	  var config = _ref4.config;
	  var existingKeyMap = _ref4.existingKeyMap;
	  var props = _ref4.props;
	  var renderedElement = _ref4.renderedElement;

	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2.default.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }

	  var newProps = props;

	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

	  var componentName = component.constructor.displayName || component.constructor.name;
	  var getKey = _buildGetKey({ renderedElement: renderedElement, existingKeyMap: existingKeyMap, componentName: componentName });
	  var getComponentField = function getComponentField(key) {
	    return component[key];
	  };
	  var getGlobalState = function getGlobalState(key) {
	    return globalState[key];
	  };
	  var componentGetState = function componentGetState(stateKey, elementKey) {
	    return (0, _getState2.default)(component.state, elementKey || getKey(), stateKey);
	  };
	  var setState = function setState(stateKey, value, elementKey) {
	    return _setStyleState(component, elementKey || getKey(), stateKey, value);
	  };

	  var addCSS = function addCSS(css) {
	    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
	    if (!styleKeeper) {
	      if (__isTestModeEnabled) {
	        return {
	          remove: function remove() {}
	        };
	      }

	      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
	    }

	    return styleKeeper.addCSS(css);
	  };

	  var newStyle = props.style;

	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2.default,
	      addCSS: addCSS,
	      appendImportantToEachValue: _appendImportantToEachValue2.default,
	      componentName: componentName,
	      config: config,
	      cssRuleSetToString: _cssRuleSetToString2.default,
	      getComponentField: getComponentField,
	      getGlobalState: getGlobalState,
	      getState: componentGetState,
	      hash: _hash2.default,
	      mergeStyles: _mergeStyles.mergeStyles,
	      props: newProps,
	      setState: setState,
	      isNestedStyle: _mergeStyles.isNestedStyle,
	      style: newStyle
	    }) || {};

	    newStyle = result.style || newStyle;

	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });

	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });

	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }

	  return newProps;
	};

	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { 'data-radium': true });
	  }

	  return _react2.default.cloneElement(renderedElement, newProps, newChildren);
	};

	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function resolveStyles(component, // ReactComponent, flow+eslint complaining
	renderedElement) {
	  var config = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_CONFIG : arguments[2];
	  var existingKeyMap = arguments[3];
	  var shouldCheckBeforeResolve = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props['data-radium'] ||

	  // Bail if this element is a radium enhanced element, because if it is,
	  // then it will take care of resolving its own styles.
	  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
	    return renderedElement;
	  }

	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });

	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });

	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });

	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }

	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};

	// Only for use by tests
	var __isTestModeEnabled = false;
	if (process.env.NODE_ENV !== 'production') {
	  resolveStyles.__clearStateForTests = function () {
	    globalState = {};
	  };
	  resolveStyles.__setTestMode = function (isEnabled) {
	    __isTestModeEnabled = isEnabled;
	  };
	}

	exports.default = resolveStyles;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendImportantToEachValue;

	var _appendPxIfNeeded = __webpack_require__(225);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _mapObject = __webpack_require__(226);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appendImportantToEachValue(style) {
	  return (0, _mapObject2.default)(style, function (result, key) {
	    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendPxIfNeeded;


	// Copied from https://github.com/facebook/react/blob/
	// 102cd291899f9942a76c40a0e78920a6fe544dc1/
	// src/renderers/dom/shared/CSSProperty.js
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	function appendPxIfNeeded(propertyName, value) {
	  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
	  return needsPxSuffix ? value + 'px' : value;
	}
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapObject;
	function mapObject(object, mapper) {
	  return Object.keys(object).reduce(function (result, key) {
	    result[key] = mapper(object[key], key);
	    return result;
	  }, {});
	}
	module.exports = exports["default"];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cssRuleSetToString;

	var _appendPxIfNeeded = __webpack_require__(225);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _camelCasePropsToDashCase = __webpack_require__(228);

	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

	var _mapObject = __webpack_require__(226);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	var _prefixer = __webpack_require__(229);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMarkupForStyles(style) {
	  return Object.keys(style).map(function (property) {
	    return property + ': ' + style[property] + ';';
	  }).join('\n');
	}

	function cssRuleSetToString(selector, rules, userAgent) {
	  if (!rules) {
	    return '';
	  }

	  var rulesWithPx = (0, _mapObject2.default)(rules, function (value, key) {
	    return (0, _appendPxIfNeeded2.default)(key, value);
	  });
	  var prefixedRules = (0, _prefixer.getPrefixedStyle)(rulesWithPx, userAgent);
	  var cssPrefixedRules = (0, _camelCasePropsToDashCase2.default)(prefixedRules);
	  var serializedRules = createMarkupForStyles(cssPrefixedRules);

	  return selector + '{' + serializedRules + '}';
	}
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var _camelCaseRegex = /([a-z])?([A-Z])/g;

	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};

	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};

	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);

	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }

	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};

	exports.default = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Based on https://github.com/jsstyles/css-vendor, but without having to
	                                                                                                                                                                                                                                                   * convert between different cases all the time.
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * 
	                                                                                                                                                                                                                                                   */

	exports.getPrefixedKeyframes = getPrefixedKeyframes;
	exports.getPrefixedStyle = getPrefixedStyle;

	var _inlineStylePrefixer = __webpack_require__(230);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
	      value = value.toString();
	    }

	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}

	var _hasWarnedAboutUserAgent = false;
	var _lastUserAgent = void 0;
	var _cachedPrefixer = void 0;

	function getPrefixer(userAgent) {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

	  if (process.env.NODE_ENV !== 'production') {
	    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      _hasWarnedAboutUserAgent = true;
	    }
	  }

	  if (!_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
	    if (actualUserAgent === 'all') {
	      _cachedPrefixer = {
	        prefix: _inlineStylePrefixer2.default.prefixAll,
	        prefixedKeyframes: 'keyframes'
	      };
	    } else {
	      _cachedPrefixer = new _inlineStylePrefixer2.default({ userAgent: actualUserAgent });
	    }
	    _lastUserAgent = actualUserAgent;
	  }
	  return _cachedPrefixer;
	}

	function getPrefixedKeyframes(userAgent) {
	  return getPrefixer(userAgent).prefixedKeyframes;
	}

	// Returns a new style object with vendor prefixes added to property names
	// and values.
	function getPrefixedStyle(style, userAgent) {
	  var styleWithFallbacks = transformValues(style);
	  var prefixer = getPrefixer(userAgent);
	  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
	  return prefixedStyle;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _inlineStylePrefixAll = __webpack_require__(231);

	var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

	var _utilsGetBrowserInformation = __webpack_require__(246);

	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);

	var _utilsGetPrefixedKeyframes = __webpack_require__(249);

	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);

	var _utilsCapitalizeString = __webpack_require__(250);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(251);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _prefixProps = __webpack_require__(252);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _pluginsCalc = __webpack_require__(253);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(255);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(256);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(257);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(258);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(259);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(261);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(262);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];

	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */

	  function Prefixer() {
	    var _this = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Prefixer);

	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;

	    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }

	    var data = this._browserInfo.browser && _prefixProps2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */

	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _inlineStylePrefixAll2['default'])(styles);
	      }

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      styles = (0, _utilsAssign2['default'])({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }

	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            var resolvedStyles = plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            });
	            (0, _utilsAssign2['default'])(styles, resolvedStyles);
	          });
	        }
	      });

	      return styles;
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _inlineStylePrefixAll2['default'])(styles);
	    }
	  }]);

	  return Prefixer;
	})();

	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = prefixAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefixProps = __webpack_require__(232);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _utilsCapitalizeString = __webpack_require__(233);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(234);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _pluginsCalc = __webpack_require__(235);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(239);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(240);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(241);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(242);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(243);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(244);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(245);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'], _pluginsFlex2['default']];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */

	function prefixAll(styles) {
	  return Object.keys(styles).reduce(function (prefixedStyles, property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      prefixedStyles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2['default']).forEach(function (prefix) {
	        var properties = _prefixProps2['default'][prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          prefixedStyles[prefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	        }
	      });

	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return (0, _utilsAssign2['default'])(prefixedStyles, plugin(property, value));
	      });
	    }

	    return prefixedStyles;
	  }, styles);
	}

	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "borderImage": true, "borderImageOutset": true, "borderImageRepeat": true, "borderImageSlice": true, "borderImageSource": true, "borderImageWidth": true, "tabSize": true, "objectFit": true, "objectPosition": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 233 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 234 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  return Object.keys(extend).reduce(function (out, key) {
	    base[key] = extend[key];
	    return out;
	  }, {});
	};

	module.exports = exports["default"];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(236);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(238);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	function calc(property, value) {
	  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _camelToDashCase = __webpack_require__(237);

	var _camelToDashCase2 = _interopRequireDefault(_camelToDashCase);

	// returns a style object with a single concated prefixed value string

	exports['default'] = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return (function () {
	    return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	      return replacer(prefix, value);
	    }));
	  })();
	};

	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(236);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(237);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(236);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(236);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(238);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && value.match(values) !== null) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(237);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(233);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsIsPrefixedValue = __webpack_require__(238);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var _prefixProps = __webpack_require__(232);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(',').filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _utilsIsPrefixedValue2['default'])(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2['default']).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2['default'][prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _utilsCamelToDashCase2['default'])(prop);

	        if (val.indexOf(dashCaseProperty) > -1) {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(237);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bowser = __webpack_require__(247);

	var _bowser2 = _interopRequireDefault(_bowser);

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};

	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie']],
	  edge: [['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }

	  var info = _bowser2['default']._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  info.browser = name;
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);

	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }

	  return info;
	};

	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */

	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) __webpack_require__(248)(name, definition)
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , samsungBrowser = /SamsungBrowser/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result

	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    } else if (/opr|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera'
	        , opera: t
	        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android'
	        , samsungBrowser: t
	        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    } else if (mac) {
	      result.mac = t
	    } else if (xbox) {
	      result.xbox = t
	    } else if (windows) {
	      result.windows = t
	    } else if (linux) {
	      result.linux = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.samsungBrowser && result.version >= 4) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        || (result.chromium && result.version >= 20)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        || (result.chromium && result.version < 20)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }

	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }

	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [], i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }

	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);

	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");

	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });

	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      }
	      else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      }
	      else {
	        return -1;
	      }
	    }
	  }

	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;

	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void(0);
	    }

	    if (strictMode === void(0)) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }

	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }

	    return strictMode; // not found
	  }

	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }

	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 249 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';

	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 251 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return base;
	};

	module.exports = exports["default"];

/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 52, "userSelect": 52, "fontKerning": 32, "textEmphasisPosition": 52, "textEmphasis": 52, "textEmphasisStyle": 52, "textEmphasisColor": 52, "boxDecorationBreak": 52, "clipPath": 52, "maskImage": 52, "maskMode": 52, "maskRepeat": 52, "maskPosition": 52, "maskClip": 52, "maskOrigin": 52, "maskSize": 52, "maskComposite": 52, "mask": 52, "maskBorderSource": 52, "maskBorderMode": 52, "maskBorderSlice": 52, "maskBorderWidth": 52, "maskBorderOutset": 52, "maskBorderRepeat": 52, "maskBorder": 52, "maskType": 52, "textDecorationStyle": 52, "textDecorationSkip": 52, "textDecorationLine": 52, "textDecorationColor": 52, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 52, "breakBefore": 52, "breakInside": 52, "columnCount": 52, "columnFill": 52, "columnGap": 52, "columnRule": 52, "columnRuleColor": 52, "columnRuleStyle": 52, "columnRuleWidth": 52, "columns": 52, "columnSpan": 52, "columnWidth": 52 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 9.1, "userSelect": 9.1, "backdropFilter": 9.1, "fontKerning": 9.1, "scrollSnapType": 9.1, "scrollSnapPointsX": 9.1, "scrollSnapPointsY": 9.1, "scrollSnapDestination": 9.1, "scrollSnapCoordinate": 9.1, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 9.1, "clipPath": 9.1, "maskImage": 9.1, "maskMode": 9.1, "maskRepeat": 9.1, "maskPosition": 9.1, "maskClip": 9.1, "maskOrigin": 9.1, "maskSize": 9.1, "maskComposite": 9.1, "mask": 9.1, "maskBorderSource": 9.1, "maskBorderMode": 9.1, "maskBorderSlice": 9.1, "maskBorderWidth": 9.1, "maskBorderOutset": 9.1, "maskBorderRepeat": 9.1, "maskBorder": 9.1, "maskType": 9.1, "textDecorationStyle": 9.1, "textDecorationSkip": 9.1, "textDecorationLine": 9.1, "textDecorationColor": 9.1, "shapeImageThreshold": 9.1, "shapeImageMargin": 9.1, "shapeImageOutside": 9.1, "filter": 9, "hyphens": 9.1, "flowInto": 9.1, "flowFrom": 9.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 9.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 47, "userSelect": 47, "boxSizing": 28, "textAlignLast": 47, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 47, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 37, "userSelect": 37, "fontKerning": 19, "textEmphasisPosition": 37, "textEmphasis": 37, "textEmphasisStyle": 37, "textEmphasisColor": 37, "boxDecorationBreak": 37, "clipPath": 37, "maskImage": 37, "maskMode": 37, "maskRepeat": 37, "maskPosition": 37, "maskClip": 37, "maskOrigin": 37, "maskSize": 37, "maskComposite": 37, "mask": 37, "maskBorderSource": 37, "maskBorderMode": 37, "maskBorderSlice": 37, "maskBorderWidth": 37, "maskBorderOutset": 37, "maskBorderRepeat": 37, "maskBorder": 37, "maskType": 37, "filter": 37, "fontFeatureSettings": 37, "breakAfter": 37, "breakBefore": 37, "breakInside": 37, "columnCount": 37, "columnFill": 37, "columnGap": 37, "columnRule": 37, "columnRuleColor": 37, "columnRuleStyle": 37, "columnRuleWidth": 37, "columns": 37, "columnSpan": 37, "columnWidth": 37 }, "ie": { "gridTemplateRows": 11, "breakInside": 11, "transformOriginY": 9, "gridRowStart": 11, "gridColumn": 11, "regionFragment": 11, "breakBefore": 11, "userSelect": 11, "gridColumnEnd": 11, "gridRowEnd": 11, "gridTemplateColumns": 11, "gridColumnStart": 11, "gridArea": 11, "flexDirection": 10, "gridRowGap": 11, "gridTemplateAreas": 11, "gridAutoRows": 11, "gridRow": 11, "scrollSnapDestination": 11, "scrollSnapPointsY": 11, "touchAction": 10, "gridGap": 11, "gridColumnGap": 11, "wrapFlow": 11, "scrollSnapPointsX": 11, "flowFrom": 11, "transform": 9, "breakAfter": 11, "wrapMargin": 11, "scrollSnapCoordinate": 11, "flexWrap": 10, "scrollSnapType": 11, "flex": 10, "wrapThrough": 11, "gridAutoColumns": 11, "flexFlow": 10, "gridTemplate": 11, "hyphens": 11, "grid": 11, "transformOriginX": 9, "flowInto": 11, "transformOrigin": 9, "gridAutoFlow": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 47, "userSelect": 47, "fontKerning": 4.4, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_chr": { "appearance": 47, "userSelect": 47, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "textDecorationStyle": 47, "textDecorationSkip": 47, "textDecorationLine": 47, "textDecorationColor": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": { "borderImage": 5, "borderImageOutset": 5, "borderImageRepeat": 5, "borderImageSlice": 5, "borderImageSource": 5, "borderImageWidth": 5, "tabSize": 5, "objectFit": 5, "objectPosition": 5 } };
	module.exports = exports["default"];

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	function calc(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, value.replace(/calc\(/g, css + 'calc(') + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = {
	  'flex': true,
	  'inline-flex': true
	};

	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(250);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsUnprefixProperty = __webpack_require__(260);

	var _utilsUnprefixProperty2 = _interopRequireDefault(_utilsUnprefixProperty);

	var properties = { transition: true, transitionProperty: true };

	function transition(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var css = _ref2.prefix.css;
	  var requiresPrefix = _ref2.requiresPrefix;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _utilsUnprefixProperty2['default'])(property);
	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = (function () {
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _utilsCamelToDashCase2['default'])(prop);
	      });

	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	      requiresPrefixDashCased.forEach(function (property) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(property) > -1) {
	            multipleValues[index] = val.replace(property, css + property) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });

	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    })();

	    if (typeof _ret === 'object') return _ret.v;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 260 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};

	module.exports = exports['default'];

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	var properties = Object.keys(alternativeProps).reduce(function (result, prop) {
	  result[prop] = true;
	  return result;
	}, {});

	function flexboxIE(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var styles = _ref2.styles;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(254);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];

	var properties = Object.keys(alternativeProps).concat(otherProps).reduce(function (result, prop) {
	  result[prop] = true;
	  return result;
	}, {});

	function flexboxOld(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var styles = _ref2.styles;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getStateKey = __webpack_require__(264);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getState = function getState(state, elementKey, value) {
	  var key = (0, _getStateKey2.default)(elementKey);

	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};

	exports.default = getState;
	module.exports = exports['default'];

/***/ },
/* 264 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var getStateKey = function getStateKey(elementKey) {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};

	exports.default = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 265 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hash;


	// a simple djb2 hash based on hash-string:
	// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
	// returns a hex-encoded hash
	function hash(text) {
	  if (!text) {
	    return '';
	  }

	  var hashValue = 5381;
	  var index = text.length - 1;

	  while (index) {
	    hashValue = hashValue * 33 ^ text.charCodeAt(index);
	    index -= 1;
	  }

	  return (hashValue >>> 0).toString(16);
	}
	module.exports = exports['default'];

/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.isNestedStyle = isNestedStyle;
	exports.mergeStyles = mergeStyles;
	function isNestedStyle(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return value && value.constructor === Object && value.toString === Object.prototype.toString;
	}

	// Merge style objects. Deep merge plain object values.
	function mergeStyles(styles) {
	  var result = {};

	  styles.forEach(function (style) {
	    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	      return;
	    }

	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }

	    Object.keys(style).forEach(function (key) {
	      // Simple case, nothing nested
	      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
	        result[key] = style[key];
	        return;
	      }

	      // If nested media, don't merge the nested styles, append a space to the
	      // end (benign when converted to CSS). This way we don't end up merging
	      // media queries that appear later in the chain with those that appear
	      // earlier.
	      if (key.indexOf('@media') === 0) {
	        var newKey = key;
	        while (true) {
	          // eslint-disable-line no-constant-condition
	          newKey += ' ';
	          if (!result[newKey]) {
	            result[newKey] = style[key];
	            return;
	          }
	        }
	      }

	      // Merge all other nested styles recursively
	      result[key] = mergeStyles([result[key], style[key]]);
	    });
	  });

	  return result;
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkPropsPlugin = __webpack_require__(268);

	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);

	var _keyframesPlugin = __webpack_require__(269);

	var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);

	var _mergeStyleArrayPlugin = __webpack_require__(270);

	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);

	var _prefixPlugin = __webpack_require__(271);

	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);

	var _removeNestedStylesPlugin = __webpack_require__(272);

	var _removeNestedStylesPlugin2 = _interopRequireDefault(_removeNestedStylesPlugin);

	var _resolveInteractionStylesPlugin = __webpack_require__(273);

	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);

	var _resolveMediaQueriesPlugin = __webpack_require__(275);

	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);

	var _visitedPlugin = __webpack_require__(276);

	var _visitedPlugin2 = _interopRequireDefault(_visitedPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  checkProps: _checkPropsPlugin2.default,
	  keyframes: _keyframesPlugin2.default,
	  mergeStyleArray: _mergeStyleArrayPlugin2.default,
	  prefix: _prefixPlugin2.default,
	  removeNestedStyles: _removeNestedStylesPlugin2.default,
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2.default,
	  resolveMediaQueries: _resolveMediaQueriesPlugin2.default,
	  visited: _visitedPlugin2.default
	};
	/* eslint-disable block-scoped-const */

	module.exports = exports['default'];

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _checkProps = function checkProps() {};

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };

	    _checkProps = function checkProps(config) {
	      var componentName = config.componentName;
	      var style = config.style;

	      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
	        return;
	      }

	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });

	      styleKeys.forEach(function (k) {
	        return _checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}

	exports.default = _checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 269 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframesPlugin;
	function keyframesPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var addCSS = _ref.addCSS;
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === 'animationName' && value && value.__radiumKeyframes) {
	      var keyframesValue = value;

	      var _keyframesValue$__pro = keyframesValue.__process(config.userAgent);

	      var animationName = _keyframesValue$__pro.animationName;
	      var css = _keyframesValue$__pro.css;

	      addCSS(css);
	      value = animationName;
	    }

	    newStyleInProgress[key] = value;
	    return newStyleInProgress;
	  }, {});
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 270 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;
	  // eslint-disable-line no-shadow
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};

	exports.default = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixPlugin;

	var _prefixer = __webpack_require__(229);

	function prefixPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = (0, _prefixer.getPrefixedStyle)(style, config.userAgent);
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeNestedStyles;
	function removeNestedStyles(_ref) {
	  var isNestedStyle = _ref.isNestedStyle;
	  var style = _ref.style;
	  // eslint-disable-line no-shadow
	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (!isNestedStyle(value)) {
	      newStyleInProgress[key] = value;
	    }
	    return newStyleInProgress;
	  }, {});

	  return {
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mouseUpListener = __webpack_require__(274);

	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};

	var resolveInteractionStyles = function resolveInteractionStyles(config) {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;


	  var newComponentFields = {};
	  var newProps = {};

	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };

	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }

	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };

	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };

	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }

	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };

	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }

	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2.default.subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }

	  // Merge the styles in the order they were defined
	  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });

	  var newStyle = mergeStyles([style].concat(interactionStyles));

	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});

	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};

	exports.default = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 274 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var _callbacks = [];
	var _mouseUpListenerIsActive = false;

	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}

	var subscribe = function subscribe(callback) {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }

	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }

	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);

	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};

	exports.default = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 275 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = resolveMediaQueries;


	var _windowMatchMedia = void 0;
	function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	}

	function _filterObject(obj, predicate) {
	  return Object.keys(obj).filter(function (key) {
	    return predicate(obj[key], key);
	  }).reduce(function (result, key) {
	    result[key] = obj[key];
	    return result;
	  }, {});
	}

	function _removeMediaQueries(style) {
	  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = style[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	}

	function _topLevelRulesToCSS(_ref) {
	  var addCSS = _ref.addCSS;
	  var appendImportantToEachValue = _ref.appendImportantToEachValue;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var hash = _ref.hash;
	  var isNestedStyle = _ref.isNestedStyle;
	  var style = _ref.style;
	  var userAgent = _ref.userAgent;

	  var className = '';
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
	      return !isNestedStyle(value);
	    }));

	    if (!Object.keys(topLevelRules).length) {
	      return;
	    }

	    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

	    // CSS classes cannot start with a number
	    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
	    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

	    addCSS(css);

	    className += (className ? ' ' : '') + mediaQueryClassName;
	  });
	  return className;
	}

	function _subscribeToMediaQuery(_ref2) {
	  var listener = _ref2.listener;
	  var listenersByQuery = _ref2.listenersByQuery;
	  var matchMedia = _ref2.matchMedia;
	  var mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery;
	  var query = _ref2.query;

	  query = query.replace('@media ', '');

	  var mql = mediaQueryListsByQuery[query];
	  if (!mql && matchMedia) {
	    mediaQueryListsByQuery[query] = mql = matchMedia(query);
	  }

	  if (!listenersByQuery || !listenersByQuery[query]) {
	    mql.addListener(listener);

	    listenersByQuery[query] = {
	      remove: function remove() {
	        mql.removeListener(listener);
	      }
	    };
	  }
	  return mql;
	}

	function resolveMediaQueries(_ref3) {
	  var ExecutionEnvironment = _ref3.ExecutionEnvironment;
	  var addCSS = _ref3.addCSS;
	  var appendImportantToEachValue = _ref3.appendImportantToEachValue;
	  var config = _ref3.config;
	  var cssRuleSetToString = _ref3.cssRuleSetToString;
	  var getComponentField = _ref3.getComponentField;
	  var getGlobalState = _ref3.getGlobalState;
	  var hash = _ref3.hash;
	  var isNestedStyle = _ref3.isNestedStyle;
	  var mergeStyles = _ref3.mergeStyles;
	  var props = _ref3.props;
	  var setState = _ref3.setState;
	  var style = _ref3.style;
	  // eslint-disable-line no-shadow
	  var newStyle = _removeMediaQueries(style);
	  var mediaQueryClassNames = _topLevelRulesToCSS({
	    addCSS: addCSS,
	    appendImportantToEachValue: appendImportantToEachValue,
	    cssRuleSetToString: cssRuleSetToString,
	    hash: hash,
	    isNestedStyle: isNestedStyle,
	    style: style,
	    userAgent: config.userAgent
	  });

	  var newProps = mediaQueryClassNames ? {
	    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
	  } : null;

	  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

	  if (!matchMedia) {
	    return {
	      props: newProps,
	      style: newStyle
	    };
	  }

	  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
	  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var nestedRules = _filterObject(style[query], isNestedStyle);

	    if (!Object.keys(nestedRules).length) {
	      return;
	    }

	    var mql = _subscribeToMediaQuery({
	      listener: function listener() {
	        return setState(query, mql.matches, '_all');
	      },
	      listenersByQuery: listenersByQuery,
	      matchMedia: matchMedia,
	      mediaQueryListsByQuery: mediaQueryListsByQuery,
	      query: query
	    });

	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, nestedRules]);
	    }
	  });

	  return {
	    componentFields: {
	      _radiumMediaQueryListenersByQuery: listenersByQuery
	    },
	    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
	    props: newProps,
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 276 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = visited;
	function visited(_ref) {
	  var addCSS = _ref.addCSS;
	  var appendImportantToEachValue = _ref.appendImportantToEachValue;
	  var config = _ref.config;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var hash = _ref.hash;
	  var props = _ref.props;
	  var style = _ref.style;
	  // eslint-disable-line no-shadow
	  var className = props.className;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === ':visited') {
	      value = appendImportantToEachValue(value);
	      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
	      var visitedClassName = 'rad-' + hash(ruleCSS);
	      var css = '.' + visitedClassName + ':visited' + ruleCSS;

	      addCSS(css);
	      className = (className ? className + ' ' : '') + visitedClassName;
	    } else {
	      newStyleInProgress[key] = value;
	    }

	    return newStyleInProgress;
	  }, {});

	  return {
	    props: className === props.className ? null : { className: className },
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _cssRuleSetToString = __webpack_require__(227);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Style = _react2.default.createClass({
	  displayName: 'Style',

	  propTypes: {
	    radiumConfig: _react.PropTypes.object,
	    rules: _react.PropTypes.object,
	    scopeSelector: _react.PropTypes.string
	  },

	  contextTypes: {
	    _radiumConfig: _react.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      scopeSelector: ''
	    };
	  },
	  _buildStyles: function _buildStyles(styles) {
	    var _this = this;

	    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

	    var scopeSelector = this.props.scopeSelector;

	    var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
	      if (_typeof(styles[selector]) !== 'object') {
	        accumulator[selector] = styles[selector];
	      }

	      return accumulator;
	    }, {});
	    var rootStyles = Object.keys(rootRules).length ? (0, _cssRuleSetToString2.default)(scopeSelector || '', rootRules, userAgent) : '';

	    return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];

	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else if (_typeof(styles[selector]) === 'object') {
	        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
	          return scopeSelector + ' ' + part.trim();
	        }).join(',') : selector;

	        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
	      }

	      return accumulator;
	    }, '');
	  },
	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery) {
	    var _this2 = this;

	    var mediaQueryString = '';

	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      mediaQueryString += '@media ' + query + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });

	    return mediaQueryString;
	  },
	  render: function render() {
	    if (!this.props.rules) {
	      return null;
	    }

	    var styles = this._buildStyles(this.props.rules);

	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});

	exports.default = Style;
	module.exports = exports['default'];

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _enhancer = __webpack_require__(221);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _styleKeeper = __webpack_require__(222);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _styleSheet = __webpack_require__(280);

	var _styleSheet2 = _interopRequireDefault(_styleSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _getStyleKeeper(instance) {
	  if (!instance._radiumStyleKeeper) {
	    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
	    instance._radiumStyleKeeper = new _styleKeeper2.default(userAgent);
	  }

	  return instance._radiumStyleKeeper;
	}

	var StyleRoot = function (_Component) {
	  _inherits(StyleRoot, _Component);

	  function StyleRoot() {
	    _classCallCheck(this, StyleRoot);

	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

	    _getStyleKeeper(_this);
	    return _this;
	  }

	  StyleRoot.prototype.getChildContext = function getChildContext() {
	    return { _radiumStyleKeeper: _getStyleKeeper(this) };
	  };

	  StyleRoot.prototype.render = function render() {
	    /* eslint-disable no-unused-vars */
	    // Pass down all props except config to the rendered div.
	    var _props = this.props;
	    var radiumConfig = _props.radiumConfig;

	    var otherProps = _objectWithoutProperties(_props, ['radiumConfig']);
	    /* eslint-enable no-unused-vars */

	    return _react2.default.createElement(
	      'div',
	      otherProps,
	      this.props.children,
	      _react2.default.createElement(_styleSheet2.default, null)
	    );
	  };

	  return StyleRoot;
	}(_react.Component);

	StyleRoot.contextTypes = {
	  _radiumConfig: _react.PropTypes.object,
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot.childContextTypes = {
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot = (0, _enhancer2.default)(StyleRoot);

	exports.default = StyleRoot;
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styleKeeper = __webpack_require__(222);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StyleSheet = (_temp = _class = function (_Component) {
	  _inherits(StyleSheet, _Component);

	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);

	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

	    _this.state = _this._getCSSState();

	    _this._onChange = _this._onChange.bind(_this);
	    return _this;
	  }

	  StyleSheet.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
	    this._onChange();
	  };

	  StyleSheet.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    if (this._subscription) {
	      this._subscription.remove();
	    }
	  };

	  StyleSheet.prototype._getCSSState = function _getCSSState() {
	    return { css: this.context._radiumStyleKeeper.getCSS() };
	  };

	  StyleSheet.prototype._onChange = function _onChange() {
	    var _this2 = this;

	    setTimeout(function () {
	      _this2._isMounted && _this2.setState(_this2._getCSSState());
	    }, 0);
	  };

	  StyleSheet.prototype.render = function render() {
	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.state.css } });
	  };

	  return StyleSheet;
	}(_react.Component), _class.contextTypes = {
	  _radiumStyleKeeper: _react2.default.PropTypes.instanceOf(_styleKeeper2.default)
	}, _temp);
	exports.default = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframes;

	var _cssRuleSetToString = __webpack_require__(227);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _hash = __webpack_require__(265);

	var _hash2 = _interopRequireDefault(_hash);

	var _prefixer = __webpack_require__(229);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function keyframes(keyframeRules, name) {
	  return {
	    __radiumKeyframes: true,
	    __process: function __process(userAgent) {
	      var keyframesPrefixed = (0, _prefixer.getPrefixedKeyframes)(userAgent);
	      var rules = Object.keys(keyframeRules).map(function (percentage) {
	        return (0, _cssRuleSetToString2.default)(percentage, keyframeRules[percentage], userAgent);
	      }).join('\n');
	      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0, _hash2.default)(rules);
	      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
	      return { css: css, animationName: animationName };
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var styles = {

	  overlay: function overlay(isOpen) {
	    return {
	      position: 'fixed',
	      zIndex: 1,
	      width: '100%',
	      height: '100%',
	      background: 'rgba(0, 0, 0, 0.3)',
	      opacity: isOpen ? 1 : 0,
	      transform: isOpen ? '' : 'translate3d(100%, 0, 0)',
	      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
	    };
	  },

	  menuWrap: function menuWrap(isOpen, width, right) {
	    return {
	      position: 'fixed',
	      right: right ? 0 : 'inherit',
	      zIndex: 2,
	      width: width,
	      height: '100%',
	      transform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
	      transition: 'all 0.5s'
	    };
	  },

	  menu: function menu() {
	    return {
	      height: '100%',
	      boxSizing: 'border-box',
	      overflow: 'auto'
	    };
	  },

	  itemList: function itemList() {
	    return {
	      height: '100%'
	    };
	  },

	  item: function item() {
	    return {
	      display: 'block',
	      outline: 'none'
	    };
	  }

	};

	exports['default'] = styles;
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(220);

	var _radium2 = _interopRequireDefault(_radium);

	var BurgerIcon = (0, _radium2['default'])(_react2['default'].createClass({

	  propTypes: {
	    customIcon: _react2['default'].PropTypes.element,
	    styles: _react2['default'].PropTypes.object
	  },

	  getLineStyle: function getLineStyle(index) {
	    return {
	      position: 'absolute',
	      height: '20%',
	      left: 0,
	      right: 0,
	      top: 20 * (index * 2) + '%',
	      opacity: this.state.hover ? 0.6 : 1
	    };
	  },

	  handleHover: function handleHover() {
	    this.setState({ hover: !this.state.hover });
	  },

	  getInitialState: function getInitialState() {
	    return { hover: false };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      styles: {}
	    };
	  },

	  render: function render() {
	    var icon = undefined;
	    var buttonStyle = {
	      position: 'absolute',
	      left: 0,
	      top: 0,
	      width: '100%',
	      height: '100%',
	      margin: 0,
	      padding: 0,
	      border: 'none',
	      opacity: 0,
	      fontSize: 8
	    };

	    if (this.props.customIcon) {
	      var extraProps = {
	        className: 'bm-icon',
	        style: [{ width: '100%', height: '100%' }, this.props.styles.bmIcon]
	      };
	      icon = _react2['default'].cloneElement(this.props.customIcon, extraProps);
	    } else {
	      icon = _react2['default'].createElement(
	        'span',
	        null,
	        _react2['default'].createElement('span', { className: 'bm-burger-bars', style: [this.getLineStyle(0), this.props.styles.bmBurgerBars] }),
	        _react2['default'].createElement('span', { className: 'bm-burger-bars', style: [this.getLineStyle(1), this.props.styles.bmBurgerBars] }),
	        _react2['default'].createElement('span', { className: 'bm-burger-bars', style: [this.getLineStyle(2), this.props.styles.bmBurgerBars] })
	      );
	    }

	    return _react2['default'].createElement(
	      'div',
	      { className: 'bm-burger-button', style: [{ zIndex: 1 }, this.props.styles.bmBurgerButton] },
	      icon,
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.props.onClick,
	          onMouseEnter: this.handleHover,
	          onMouseLeave: this.handleHover,
	          style: buttonStyle },
	        'Open Menu'
	      )
	    );
	  }
	}));

	exports['default'] = BurgerIcon;
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(220);

	var _radium2 = _interopRequireDefault(_radium);

	var CrossIcon = (0, _radium2['default'])(_react2['default'].createClass({

	  propTypes: {
	    customIcon: _react2['default'].PropTypes.element,
	    styles: _react2['default'].PropTypes.object
	  },

	  getCrossStyle: function getCrossStyle(type) {
	    return {
	      position: 'absolute',
	      width: 3,
	      height: 14,
	      transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      styles: {}
	    };
	  },

	  render: function render() {
	    var icon;
	    var buttonWrapperStyle = {
	      position: 'absolute',
	      width: 24,
	      height: 24,
	      right: 8,
	      top: 8
	    };
	    var buttonStyle = {
	      position: 'absolute',
	      left: 0,
	      top: 0,
	      width: '100%',
	      height: '100%',
	      margin: 0,
	      padding: 0,
	      border: 'none',
	      textIndent: -9999,
	      background: 'transparent',
	      outline: 'none'
	    };

	    if (this.props.customIcon) {
	      var extraProps = {
	        className: 'bm-cross',
	        style: [{ width: '100%', height: '100%' }, this.props.styles.bmCross]
	      };
	      icon = _react2['default'].cloneElement(this.props.customIcon, extraProps);
	    } else {
	      icon = _react2['default'].createElement(
	        'span',
	        { style: [{ position: 'absolute', top: '6px', right: '14px' }] },
	        _react2['default'].createElement('span', { className: 'bm-cross', style: [this.getCrossStyle('before'), this.props.styles.bmCross] }),
	        _react2['default'].createElement('span', { className: 'bm-cross', style: [this.getCrossStyle('after'), this.props.styles.bmCross] })
	      );
	    }

	    return _react2['default'].createElement(
	      'div',
	      { className: 'bm-cross-button', style: [buttonWrapperStyle, this.props.styles.bmCrossButton] },
	      icon,
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.props.onClick, style: buttonStyle },
	        'Close Menu'
	      )
	    );
	  }
	}));

	exports['default'] = CrossIcon;
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  menuWrap: function menuWrap(isOpen, width, right) {
	    width += 20;
	    return {
	      transform: isOpen ? '' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
	      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
	    };
	  },

	  item: function item(isOpen, width, right, nthChild) {
	    return {
	      transform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
	      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _snapsvgImporter = __webpack_require__(287);

	var _snapsvgImporter2 = _interopRequireDefault(_snapsvgImporter);

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  svg: {
	    lib: _snapsvgImporter2['default'],
	    pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
	    pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
	    animate: function animate(path) {
	      path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
	    }
	  },

	  morphShape: function morphShape(isOpen, width, right) {
	    return {
	      position: 'fixed',
	      width: 120,
	      height: '100%',
	      right: right ? 'inherit' : 0,
	      left: right ? 0 : 'inherit',
	      transform: right ? 'rotateY(180deg)' : ''
	    };
	  },

	  menuWrap: function menuWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
	      transition: 'all 0.3s'
	    };
	  },

	  menu: function menu(isOpen, width, right) {
	    return {
	      position: 'fixed',
	      right: right ? 0 : 'inherit',
	      width: 'calc(100% - 120px)',
	      whiteSpace: 'nowrap',
	      boxSizing: 'border-box'
	    };
	  },

	  itemList: function itemList(isOpen, width, right) {
	    if (right) {
	      return {
	        position: 'relative',
	        left: '-110px'
	      };
	    }
	  },

	  pageWrap: function pageWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
	      transition: isOpen ? 'all 0.3s' : 'all 0.3s 0.1s'
	    };
	  },

	  outerContainer: function outerContainer(isOpen) {
	    return {
	      overflow: isOpen ? '' : 'hidden'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  var Snap = undefined;
	  try {
	    Snap = __webpack_require__(288);
	  } finally {
	    return Snap;
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	window.eve = __webpack_require__(289)

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	var mina = (function (eve) {
	    var animations = {},
	    requestAnimFrame = window.requestAnimationFrame       ||
	                       window.webkitRequestAnimationFrame ||
	                       window.mozRequestAnimationFrame    ||
	                       window.oRequestAnimationFrame      ||
	                       window.msRequestAnimationFrame     ||
	                       function (callback) {
	                           setTimeout(callback, 16);
	                       },
	    isArray = Array.isArray || function (a) {
	        return a instanceof Array ||
	            Object.prototype.toString.call(a) == "[object Array]";
	    },
	    idgen = 0,
	    idprefix = "M" + (+new Date).toString(36),
	    ID = function () {
	        return idprefix + (idgen++).toString(36);
	    },
	    diff = function (a, b, A, B) {
	        if (isArray(a)) {
	            res = [];
	            for (var i = 0, ii = a.length; i < ii; i++) {
	                res[i] = diff(a[i], b, A[i], B);
	            }
	            return res;
	        }
	        var dif = (A - a) / (B - b);
	        return function (bb) {
	            return a + dif * (bb - b);
	        };
	    },
	    timer = Date.now || function () {
	        return +new Date;
	    },
	    sta = function (val) {
	        var a = this;
	        if (val == null) {
	            return a.s;
	        }
	        var ds = a.s - val;
	        a.b += a.dur * ds;
	        a.B += a.dur * ds;
	        a.s = val;
	    },
	    speed = function (val) {
	        var a = this;
	        if (val == null) {
	            return a.spd;
	        }
	        a.spd = val;
	    },
	    duration = function (val) {
	        var a = this;
	        if (val == null) {
	            return a.dur;
	        }
	        a.s = a.s * val / a.dur;
	        a.dur = val;
	    },
	    stopit = function () {
	        var a = this;
	        delete animations[a.id];
	        a.update();
	        eve("mina.stop." + a.id, a);
	    },
	    pause = function () {
	        var a = this;
	        if (a.pdif) {
	            return;
	        }
	        delete animations[a.id];
	        a.update();
	        a.pdif = a.get() - a.b;
	    },
	    resume = function () {
	        var a = this;
	        if (!a.pdif) {
	            return;
	        }
	        a.b = a.get() - a.pdif;
	        delete a.pdif;
	        animations[a.id] = a;
	    },
	    update = function () {
	        var a = this,
	            res;
	        if (isArray(a.start)) {
	            res = [];
	            for (var j = 0, jj = a.start.length; j < jj; j++) {
	                res[j] = +a.start[j] +
	                    (a.end[j] - a.start[j]) * a.easing(a.s);
	            }
	        } else {
	            res = +a.start + (a.end - a.start) * a.easing(a.s);
	        }
	        a.set(res);
	    },
	    frame = function () {
	        var len = 0;
	        for (var i in animations) if (animations.hasOwnProperty(i)) {
	            var a = animations[i],
	                b = a.get(),
	                res;
	            len++;
	            a.s = (b - a.b) / (a.dur / a.spd);
	            if (a.s >= 1) {
	                delete animations[i];
	                a.s = 1;
	                len--;
	                (function (a) {
	                    setTimeout(function () {
	                        eve("mina.finish." + a.id, a);
	                    });
	                }(a));
	            }
	            a.update();
	        }
	        len && requestAnimFrame(frame);
	    },
	    /*\
	     * mina
	     [ method ]
	     **
	     * Generic animation of numbers
	     **
	     - a (number) start _slave_ number
	     - A (number) end _slave_ number
	     - b (number) start _master_ number (start time in general case)
	     - B (number) end _master_ number (end time in gereal case)
	     - get (function) getter of _master_ number (see @mina.time)
	     - set (function) setter of _slave_ number
	     - easing (function) #optional easing function, default is @mina.linear
	     = (object) animation descriptor
	     o {
	     o         id (string) animation id,
	     o         start (number) start _slave_ number,
	     o         end (number) end _slave_ number,
	     o         b (number) start _master_ number,
	     o         s (number) animation status (0..1),
	     o         dur (number) animation duration,
	     o         spd (number) animation speed,
	     o         get (function) getter of _master_ number (see @mina.time),
	     o         set (function) setter of _slave_ number,
	     o         easing (function) easing function, default is @mina.linear,
	     o         status (function) status getter/setter,
	     o         speed (function) speed getter/setter,
	     o         duration (function) duration getter/setter,
	     o         stop (function) animation stopper
	     o         pause (function) pauses the animation
	     o         resume (function) resumes the animation
	     o         update (function) calles setter with the right value of the animation
	     o }
	    \*/
	    mina = function (a, A, b, B, get, set, easing) {
	        var anim = {
	            id: ID(),
	            start: a,
	            end: A,
	            b: b,
	            s: 0,
	            dur: B - b,
	            spd: 1,
	            get: get,
	            set: set,
	            easing: easing || mina.linear,
	            status: sta,
	            speed: speed,
	            duration: duration,
	            stop: stopit,
	            pause: pause,
	            resume: resume,
	            update: update
	        };
	        animations[anim.id] = anim;
	        var len = 0, i;
	        for (i in animations) if (animations.hasOwnProperty(i)) {
	            len++;
	            if (len == 2) {
	                break;
	            }
	        }
	        len == 1 && requestAnimFrame(frame);
	        return anim;
	    };
	    /*\
	     * mina.time
	     [ method ]
	     **
	     * Returns the current time. Equivalent to:
	     | function () {
	     |     return (new Date).getTime();
	     | }
	    \*/
	    mina.time = timer;
	    /*\
	     * mina.getById
	     [ method ]
	     **
	     * Returns an animation by its id
	     - id (string) animation's id
	     = (object) See @mina
	    \*/
	    mina.getById = function (id) {
	        return animations[id] || null;
	    };

	    /*\
	     * mina.linear
	     [ method ]
	     **
	     * Default linear easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.linear = function (n) {
	        return n;
	    };
	    /*\
	     * mina.easeout
	     [ method ]
	     **
	     * Easeout easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.easeout = function (n) {
	        return Math.pow(n, 1.7);
	    };
	    /*\
	     * mina.easein
	     [ method ]
	     **
	     * Easein easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.easein = function (n) {
	        return Math.pow(n, .48);
	    };
	    /*\
	     * mina.easeinout
	     [ method ]
	     **
	     * Easeinout easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.easeinout = function (n) {
	        if (n == 1) {
	            return 1;
	        }
	        if (n == 0) {
	            return 0;
	        }
	        var q = .48 - n / 1.04,
	            Q = Math.sqrt(.1734 + q * q),
	            x = Q - q,
	            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
	            y = -Q - q,
	            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
	            t = X + Y + .5;
	        return (1 - t) * 3 * t * t + t * t * t;
	    };
	    /*\
	     * mina.backin
	     [ method ]
	     **
	     * Backin easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.backin = function (n) {
	        if (n == 1) {
	            return 1;
	        }
	        var s = 1.70158;
	        return n * n * ((s + 1) * n - s);
	    };
	    /*\
	     * mina.backout
	     [ method ]
	     **
	     * Backout easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.backout = function (n) {
	        if (n == 0) {
	            return 0;
	        }
	        n = n - 1;
	        var s = 1.70158;
	        return n * n * ((s + 1) * n + s) + 1;
	    };
	    /*\
	     * mina.elastic
	     [ method ]
	     **
	     * Elastic easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.elastic = function (n) {
	        if (n == !!n) {
	            return n;
	        }
	        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
	            (2 * Math.PI) / .3) + 1;
	    };
	    /*\
	     * mina.bounce
	     [ method ]
	     **
	     * Bounce easing
	     - n (number) input 0..1
	     = (number) output 0..1
	    \*/
	    mina.bounce = function (n) {
	        var s = 7.5625,
	            p = 2.75,
	            l;
	        if (n < (1 / p)) {
	            l = s * n * n;
	        } else {
	            if (n < (2 / p)) {
	                n -= (1.5 / p);
	                l = s * n * n + .75;
	            } else {
	                if (n < (2.5 / p)) {
	                    n -= (2.25 / p);
	                    l = s * n * n + .9375;
	                } else {
	                    n -= (2.625 / p);
	                    l = s * n * n + .984375;
	                }
	            }
	        }
	        return l;
	    };
	    window.mina = mina;
	    return mina;
	})(typeof eve == "undefined" ? function () {} : eve);
	// Copyright (c) 2013 - 2015 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	var Snap = (function(root) {
	Snap.version = "0.4.0";
	/*\
	 * Snap
	 [ method ]
	 **
	 * Creates a drawing surface or wraps existing SVG element.
	 **
	 - width (number|string) width of surface
	 - height (number|string) height of surface
	 * or
	 - DOM (SVGElement) element to be wrapped into Snap structure
	 * or
	 - array (array) array of elements (will return set of elements)
	 * or
	 - query (string) CSS query selector
	 = (object) @Element
	\*/
	function Snap(w, h) {
	    if (w) {
	        if (w.nodeType) {
	            return wrap(w);
	        }
	        if (is(w, "array") && Snap.set) {
	            return Snap.set.apply(Snap, w);
	        }
	        if (w instanceof Element) {
	            return w;
	        }
	        if (h == null) {
	            w = glob.doc.querySelector(String(w));
	            return wrap(w);
	        }
	    }
	    w = w == null ? "100%" : w;
	    h = h == null ? "100%" : h;
	    return new Paper(w, h);
	}
	Snap.toString = function () {
	    return "Snap v" + this.version;
	};
	Snap._ = {};
	var glob = {
	    win: root.window,
	    doc: root.window.document
	};
	Snap._.glob = glob;
	var has = "hasOwnProperty",
	    Str = String,
	    toFloat = parseFloat,
	    toInt = parseInt,
	    math = Math,
	    mmax = math.max,
	    mmin = math.min,
	    abs = math.abs,
	    pow = math.pow,
	    PI = math.PI,
	    round = math.round,
	    E = "",
	    S = " ",
	    objectToString = Object.prototype.toString,
	    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
	    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
	    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
	    reURLValue = /^url\(#?([^)]+)\)$/,
	    separator = Snap._.separator = /[,\s]+/,
	    whitespace = /[\s]/g,
	    commaSpaces = /[\s]*,[\s]*/,
	    hsrg = {hs: 1, rg: 1},
	    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
	    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
	    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
	    idgen = 0,
	    idprefix = "S" + (+new Date).toString(36),
	    ID = function (el) {
	        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
	    },
	    xlink = "http://www.w3.org/1999/xlink",
	    xmlns = "http://www.w3.org/2000/svg",
	    hub = {},
	    URL = Snap.url = function (url) {
	        return "url('#" + url + "')";
	    };

	function $(el, attr) {
	    if (attr) {
	        if (el == "#text") {
	            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
	        }
	        if (el == "#comment") {
	            el = glob.doc.createComment(attr.text || attr["#text"] || "");
	        }
	        if (typeof el == "string") {
	            el = $(el);
	        }
	        if (typeof attr == "string") {
	            if (el.nodeType == 1) {
	                if (attr.substring(0, 6) == "xlink:") {
	                    return el.getAttributeNS(xlink, attr.substring(6));
	                }
	                if (attr.substring(0, 4) == "xml:") {
	                    return el.getAttributeNS(xmlns, attr.substring(4));
	                }
	                return el.getAttribute(attr);
	            } else if (attr == "text") {
	                return el.nodeValue;
	            } else {
	                return null;
	            }
	        }
	        if (el.nodeType == 1) {
	            for (var key in attr) if (attr[has](key)) {
	                var val = Str(attr[key]);
	                if (val) {
	                    if (key.substring(0, 6) == "xlink:") {
	                        el.setAttributeNS(xlink, key.substring(6), val);
	                    } else if (key.substring(0, 4) == "xml:") {
	                        el.setAttributeNS(xmlns, key.substring(4), val);
	                    } else {
	                        el.setAttribute(key, val);
	                    }
	                } else {
	                    el.removeAttribute(key);
	                }
	            }
	        } else if ("text" in attr) {
	            el.nodeValue = attr.text;
	        }
	    } else {
	        el = glob.doc.createElementNS(xmlns, el);
	    }
	    return el;
	}
	Snap._.$ = $;
	Snap._.id = ID;
	function getAttrs(el) {
	    var attrs = el.attributes,
	        name,
	        out = {};
	    for (var i = 0; i < attrs.length; i++) {
	        if (attrs[i].namespaceURI == xlink) {
	            name = "xlink:";
	        } else {
	            name = "";
	        }
	        name += attrs[i].name;
	        out[name] = attrs[i].textContent;
	    }
	    return out;
	}
	function is(o, type) {
	    type = Str.prototype.toLowerCase.call(type);
	    if (type == "finite") {
	        return isFinite(o);
	    }
	    if (type == "array" &&
	        (o instanceof Array || Array.isArray && Array.isArray(o))) {
	        return true;
	    }
	    return  (type == "null" && o === null) ||
	            (type == typeof o && o !== null) ||
	            (type == "object" && o === Object(o)) ||
	            objectToString.call(o).slice(8, -1).toLowerCase() == type;
	}
	/*\
	 * Snap.format
	 [ method ]
	 **
	 * Replaces construction of type `{<name>}` to the corresponding argument
	 **
	 - token (string) string to format
	 - json (object) object which properties are used as a replacement
	 = (string) formatted string
	 > Usage
	 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
	 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
	 |     x: 10,
	 |     y: 20,
	 |     dim: {
	 |         width: 40,
	 |         height: 50,
	 |         "negative width": -40
	 |     }
	 | }));
	\*/
	Snap.format = (function () {
	    var tokenRegex = /\{([^\}]+)\}/g,
	        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
	        replacer = function (all, key, obj) {
	            var res = obj;
	            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
	                name = name || quotedName;
	                if (res) {
	                    if (name in res) {
	                        res = res[name];
	                    }
	                    typeof res == "function" && isFunc && (res = res());
	                }
	            });
	            res = (res == null || res == obj ? all : res) + "";
	            return res;
	        };
	    return function (str, obj) {
	        return Str(str).replace(tokenRegex, function (all, key) {
	            return replacer(all, key, obj);
	        });
	    };
	})();
	function clone(obj) {
	    if (typeof obj == "function" || Object(obj) !== obj) {
	        return obj;
	    }
	    var res = new obj.constructor;
	    for (var key in obj) if (obj[has](key)) {
	        res[key] = clone(obj[key]);
	    }
	    return res;
	}
	Snap._.clone = clone;
	function repush(array, item) {
	    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
	        return array.push(array.splice(i, 1)[0]);
	    }
	}
	function cacher(f, scope, postprocessor) {
	    function newf() {
	        var arg = Array.prototype.slice.call(arguments, 0),
	            args = arg.join("\u2400"),
	            cache = newf.cache = newf.cache || {},
	            count = newf.count = newf.count || [];
	        if (cache[has](args)) {
	            repush(count, args);
	            return postprocessor ? postprocessor(cache[args]) : cache[args];
	        }
	        count.length >= 1e3 && delete cache[count.shift()];
	        count.push(args);
	        cache[args] = f.apply(scope, arg);
	        return postprocessor ? postprocessor(cache[args]) : cache[args];
	    }
	    return newf;
	}
	Snap._.cacher = cacher;
	function angle(x1, y1, x2, y2, x3, y3) {
	    if (x3 == null) {
	        var x = x1 - x2,
	            y = y1 - y2;
	        if (!x && !y) {
	            return 0;
	        }
	        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
	    } else {
	        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
	    }
	}
	function rad(deg) {
	    return deg % 360 * PI / 180;
	}
	function deg(rad) {
	    return rad * 180 / PI % 360;
	}
	function x_y() {
	    return this.x + S + this.y;
	}
	function x_y_w_h() {
	    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
	}

	/*\
	 * Snap.rad
	 [ method ]
	 **
	 * Transform angle to radians
	 - deg (number) angle in degrees
	 = (number) angle in radians
	\*/
	Snap.rad = rad;
	/*\
	 * Snap.deg
	 [ method ]
	 **
	 * Transform angle to degrees
	 - rad (number) angle in radians
	 = (number) angle in degrees
	\*/
	Snap.deg = deg;
	/*\
	 * Snap.sin
	 [ method ]
	 **
	 * Equivalent to `Math.sin()` only works with degrees, not radians.
	 - angle (number) angle in degrees
	 = (number) sin
	\*/
	Snap.sin = function (angle) {
	    return math.sin(Snap.rad(angle));
	};
	/*\
	 * Snap.tan
	 [ method ]
	 **
	 * Equivalent to `Math.tan()` only works with degrees, not radians.
	 - angle (number) angle in degrees
	 = (number) tan
	\*/
	Snap.tan = function (angle) {
	    return math.tan(Snap.rad(angle));
	};
	/*\
	 * Snap.cos
	 [ method ]
	 **
	 * Equivalent to `Math.cos()` only works with degrees, not radians.
	 - angle (number) angle in degrees
	 = (number) cos
	\*/
	Snap.cos = function (angle) {
	    return math.cos(Snap.rad(angle));
	};
	/*\
	 * Snap.asin
	 [ method ]
	 **
	 * Equivalent to `Math.asin()` only works with degrees, not radians.
	 - num (number) value
	 = (number) asin in degrees
	\*/
	Snap.asin = function (num) {
	    return Snap.deg(math.asin(num));
	};
	/*\
	 * Snap.acos
	 [ method ]
	 **
	 * Equivalent to `Math.acos()` only works with degrees, not radians.
	 - num (number) value
	 = (number) acos in degrees
	\*/
	Snap.acos = function (num) {
	    return Snap.deg(math.acos(num));
	};
	/*\
	 * Snap.atan
	 [ method ]
	 **
	 * Equivalent to `Math.atan()` only works with degrees, not radians.
	 - num (number) value
	 = (number) atan in degrees
	\*/
	Snap.atan = function (num) {
	    return Snap.deg(math.atan(num));
	};
	/*\
	 * Snap.atan2
	 [ method ]
	 **
	 * Equivalent to `Math.atan2()` only works with degrees, not radians.
	 - num (number) value
	 = (number) atan2 in degrees
	\*/
	Snap.atan2 = function (num) {
	    return Snap.deg(math.atan2(num));
	};
	/*\
	 * Snap.angle
	 [ method ]
	 **
	 * Returns an angle between two or three points
	 > Parameters
	 - x1 (number) x coord of first point
	 - y1 (number) y coord of first point
	 - x2 (number) x coord of second point
	 - y2 (number) y coord of second point
	 - x3 (number) #optional x coord of third point
	 - y3 (number) #optional y coord of third point
	 = (number) angle in degrees
	\*/
	Snap.angle = angle;
	/*\
	 * Snap.len
	 [ method ]
	 **
	 * Returns distance between two points
	 > Parameters
	 - x1 (number) x coord of first point
	 - y1 (number) y coord of first point
	 - x2 (number) x coord of second point
	 - y2 (number) y coord of second point
	 = (number) distance
	\*/
	Snap.len = function (x1, y1, x2, y2) {
	    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
	};
	/*\
	 * Snap.len2
	 [ method ]
	 **
	 * Returns squared distance between two points
	 > Parameters
	 - x1 (number) x coord of first point
	 - y1 (number) y coord of first point
	 - x2 (number) x coord of second point
	 - y2 (number) y coord of second point
	 = (number) distance
	\*/
	Snap.len2 = function (x1, y1, x2, y2) {
	    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
	};
	/*\
	 * Snap.closestPoint
	 [ method ]
	 **
	 * Returns closest point to a given one on a given path.
	 > Parameters
	 - path (Element) path element
	 - x (number) x coord of a point
	 - y (number) y coord of a point
	 = (object) in format
	 {
	    x (number) x coord of the point on the path
	    y (number) y coord of the point on the path
	    length (number) length of the path to the point
	    distance (number) distance from the given point to the path
	 }
	\*/
	// Copied from http://bl.ocks.org/mbostock/8027637
	Snap.closestPoint = function (path, x, y) {
	    function distance2(p) {
	        var dx = p.x - x,
	            dy = p.y - y;
	        return dx * dx + dy * dy;
	    }
	    var pathNode = path.node,
	        pathLength = pathNode.getTotalLength(),
	        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
	        best,
	        bestLength,
	        bestDistance = Infinity;

	    // linear scan for coarse approximation
	    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
	        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
	            best = scan, bestLength = scanLength, bestDistance = scanDistance;
	        }
	    }

	    // binary search for precise estimate
	    precision *= .5;
	    while (precision > .5) {
	        var before,
	            after,
	            beforeLength,
	            afterLength,
	            beforeDistance,
	            afterDistance;
	        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
	            best = before, bestLength = beforeLength, bestDistance = beforeDistance;
	        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
	            best = after, bestLength = afterLength, bestDistance = afterDistance;
	        } else {
	            precision *= .5;
	        }
	    }

	    best = {
	        x: best.x,
	        y: best.y,
	        length: bestLength,
	        distance: Math.sqrt(bestDistance)
	    };
	    return best;
	}
	/*\
	 * Snap.is
	 [ method ]
	 **
	 * Handy replacement for the `typeof` operator
	 - o (…) any object or primitive
	 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
	 = (boolean) `true` if given value is of given type
	\*/
	Snap.is = is;
	/*\
	 * Snap.snapTo
	 [ method ]
	 **
	 * Snaps given value to given grid
	 - values (array|number) given array of values or step of the grid
	 - value (number) value to adjust
	 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
	 = (number) adjusted value
	\*/
	Snap.snapTo = function (values, value, tolerance) {
	    tolerance = is(tolerance, "finite") ? tolerance : 10;
	    if (is(values, "array")) {
	        var i = values.length;
	        while (i--) if (abs(values[i] - value) <= tolerance) {
	            return values[i];
	        }
	    } else {
	        values = +values;
	        var rem = value % values;
	        if (rem < tolerance) {
	            return value - rem;
	        }
	        if (rem > values - tolerance) {
	            return value - rem + values;
	        }
	    }
	    return value;
	};
	// Colour
	/*\
	 * Snap.getRGB
	 [ method ]
	 **
	 * Parses color string as RGB object
	 - color (string) color string in one of the following formats:
	 # <ul>
	 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
	 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
	 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
	 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
	 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
	 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
	 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
	 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
	 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
	 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
	 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
	 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
	 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
	 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
	 # </ul>
	 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
	 = (object) RGB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••,
	 o     error (boolean) true if string can't be parsed
	 o }
	\*/
	Snap.getRGB = cacher(function (colour) {
	    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
	    }
	    if (colour == "none") {
	        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
	    }
	    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
	    if (!colour) {
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
	    }
	    var res,
	        red,
	        green,
	        blue,
	        opacity,
	        t,
	        values,
	        rgb = colour.match(colourRegExp);
	    if (rgb) {
	        if (rgb[2]) {
	            blue = toInt(rgb[2].substring(5), 16);
	            green = toInt(rgb[2].substring(3, 5), 16);
	            red = toInt(rgb[2].substring(1, 3), 16);
	        }
	        if (rgb[3]) {
	            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
	            green = toInt((t = rgb[3].charAt(2)) + t, 16);
	            red = toInt((t = rgb[3].charAt(1)) + t, 16);
	        }
	        if (rgb[4]) {
	            values = rgb[4].split(commaSpaces);
	            red = toFloat(values[0]);
	            values[0].slice(-1) == "%" && (red *= 2.55);
	            green = toFloat(values[1]);
	            values[1].slice(-1) == "%" && (green *= 2.55);
	            blue = toFloat(values[2]);
	            values[2].slice(-1) == "%" && (blue *= 2.55);
	            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
	            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	        }
	        if (rgb[5]) {
	            values = rgb[5].split(commaSpaces);
	            red = toFloat(values[0]);
	            values[0].slice(-1) == "%" && (red /= 100);
	            green = toFloat(values[1]);
	            values[1].slice(-1) == "%" && (green /= 100);
	            blue = toFloat(values[2]);
	            values[2].slice(-1) == "%" && (blue /= 100);
	            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
	            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            return Snap.hsb2rgb(red, green, blue, opacity);
	        }
	        if (rgb[6]) {
	            values = rgb[6].split(commaSpaces);
	            red = toFloat(values[0]);
	            values[0].slice(-1) == "%" && (red /= 100);
	            green = toFloat(values[1]);
	            values[1].slice(-1) == "%" && (green /= 100);
	            blue = toFloat(values[2]);
	            values[2].slice(-1) == "%" && (blue /= 100);
	            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
	            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            return Snap.hsl2rgb(red, green, blue, opacity);
	        }
	        red = mmin(math.round(red), 255);
	        green = mmin(math.round(green), 255);
	        blue = mmin(math.round(blue), 255);
	        opacity = mmin(mmax(opacity, 0), 1);
	        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
	        rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
	        rgb.opacity = is(opacity, "finite") ? opacity : 1;
	        return rgb;
	    }
	    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
	}, Snap);
	/*\
	 * Snap.hsb
	 [ method ]
	 **
	 * Converts HSB values to a hex representation of the color
	 - h (number) hue
	 - s (number) saturation
	 - b (number) value or brightness
	 = (string) hex representation of the color
	\*/
	Snap.hsb = cacher(function (h, s, b) {
	    return Snap.hsb2rgb(h, s, b).hex;
	});
	/*\
	 * Snap.hsl
	 [ method ]
	 **
	 * Converts HSL values to a hex representation of the color
	 - h (number) hue
	 - s (number) saturation
	 - l (number) luminosity
	 = (string) hex representation of the color
	\*/
	Snap.hsl = cacher(function (h, s, l) {
	    return Snap.hsl2rgb(h, s, l).hex;
	});
	/*\
	 * Snap.rgb
	 [ method ]
	 **
	 * Converts RGB values to a hex representation of the color
	 - r (number) red
	 - g (number) green
	 - b (number) blue
	 = (string) hex representation of the color
	\*/
	Snap.rgb = cacher(function (r, g, b, o) {
	    if (is(o, "finite")) {
	        var round = math.round;
	        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
	    }
	    return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
	});
	var toHex = function (color) {
	    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
	        red = "rgb(255, 0, 0)";
	    toHex = cacher(function (color) {
	        if (color.toLowerCase() == "red") {
	            return red;
	        }
	        i.style.color = red;
	        i.style.color = color;
	        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
	        return out == red ? null : out;
	    });
	    return toHex(color);
	},
	hsbtoString = function () {
	    return "hsb(" + [this.h, this.s, this.b] + ")";
	},
	hsltoString = function () {
	    return "hsl(" + [this.h, this.s, this.l] + ")";
	},
	rgbtoString = function () {
	    return this.opacity == 1 || this.opacity == null ?
	            this.hex :
	            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
	},
	prepareRGB = function (r, g, b) {
	    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
	        b = r.b;
	        g = r.g;
	        r = r.r;
	    }
	    if (g == null && is(r, string)) {
	        var clr = Snap.getRGB(r);
	        r = clr.r;
	        g = clr.g;
	        b = clr.b;
	    }
	    if (r > 1 || g > 1 || b > 1) {
	        r /= 255;
	        g /= 255;
	        b /= 255;
	    }

	    return [r, g, b];
	},
	packageRGB = function (r, g, b, o) {
	    r = math.round(r * 255);
	    g = math.round(g * 255);
	    b = math.round(b * 255);
	    var rgb = {
	        r: r,
	        g: g,
	        b: b,
	        opacity: is(o, "finite") ? o : 1,
	        hex: Snap.rgb(r, g, b),
	        toString: rgbtoString
	    };
	    is(o, "finite") && (rgb.opacity = o);
	    return rgb;
	};
	/*\
	 * Snap.color
	 [ method ]
	 **
	 * Parses the color string and returns an object featuring the color's component values
	 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
	 = (object) Combined RGB/HSB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••,
	 o     error (boolean) `true` if string can't be parsed,
	 o     h (number) hue,
	 o     s (number) saturation,
	 o     v (number) value (brightness),
	 o     l (number) lightness
	 o }
	\*/
	Snap.color = function (clr) {
	    var rgb;
	    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
	        rgb = Snap.hsb2rgb(clr);
	        clr.r = rgb.r;
	        clr.g = rgb.g;
	        clr.b = rgb.b;
	        clr.opacity = 1;
	        clr.hex = rgb.hex;
	    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
	        rgb = Snap.hsl2rgb(clr);
	        clr.r = rgb.r;
	        clr.g = rgb.g;
	        clr.b = rgb.b;
	        clr.opacity = 1;
	        clr.hex = rgb.hex;
	    } else {
	        if (is(clr, "string")) {
	            clr = Snap.getRGB(clr);
	        }
	        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
	            rgb = Snap.rgb2hsl(clr);
	            clr.h = rgb.h;
	            clr.s = rgb.s;
	            clr.l = rgb.l;
	            rgb = Snap.rgb2hsb(clr);
	            clr.v = rgb.b;
	        } else {
	            clr = {hex: "none"};
	            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
	            clr.error = 1;
	        }
	    }
	    clr.toString = rgbtoString;
	    return clr;
	};
	/*\
	 * Snap.hsb2rgb
	 [ method ]
	 **
	 * Converts HSB values to an RGB object
	 - h (number) hue
	 - s (number) saturation
	 - v (number) value or brightness
	 = (object) RGB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••
	 o }
	\*/
	Snap.hsb2rgb = function (h, s, v, o) {
	    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
	        v = h.b;
	        s = h.s;
	        o = h.o;
	        h = h.h;
	    }
	    h *= 360;
	    var R, G, B, X, C;
	    h = (h % 360) / 60;
	    C = v * s;
	    X = C * (1 - abs(h % 2 - 1));
	    R = G = B = v - C;

	    h = ~~h;
	    R += [C, X, 0, 0, X, C][h];
	    G += [X, C, C, X, 0, 0][h];
	    B += [0, 0, X, C, C, X][h];
	    return packageRGB(R, G, B, o);
	};
	/*\
	 * Snap.hsl2rgb
	 [ method ]
	 **
	 * Converts HSL values to an RGB object
	 - h (number) hue
	 - s (number) saturation
	 - l (number) luminosity
	 = (object) RGB object in the following format:
	 o {
	 o     r (number) red,
	 o     g (number) green,
	 o     b (number) blue,
	 o     hex (string) color in HTML/CSS format: #••••••
	 o }
	\*/
	Snap.hsl2rgb = function (h, s, l, o) {
	    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
	        l = h.l;
	        s = h.s;
	        h = h.h;
	    }
	    if (h > 1 || s > 1 || l > 1) {
	        h /= 360;
	        s /= 100;
	        l /= 100;
	    }
	    h *= 360;
	    var R, G, B, X, C;
	    h = (h % 360) / 60;
	    C = 2 * s * (l < .5 ? l : 1 - l);
	    X = C * (1 - abs(h % 2 - 1));
	    R = G = B = l - C / 2;

	    h = ~~h;
	    R += [C, X, 0, 0, X, C][h];
	    G += [X, C, C, X, 0, 0][h];
	    B += [0, 0, X, C, C, X][h];
	    return packageRGB(R, G, B, o);
	};
	/*\
	 * Snap.rgb2hsb
	 [ method ]
	 **
	 * Converts RGB values to an HSB object
	 - r (number) red
	 - g (number) green
	 - b (number) blue
	 = (object) HSB object in the following format:
	 o {
	 o     h (number) hue,
	 o     s (number) saturation,
	 o     b (number) brightness
	 o }
	\*/
	Snap.rgb2hsb = function (r, g, b) {
	    b = prepareRGB(r, g, b);
	    r = b[0];
	    g = b[1];
	    b = b[2];

	    var H, S, V, C;
	    V = mmax(r, g, b);
	    C = V - mmin(r, g, b);
	    H = (C == 0 ? null :
	         V == r ? (g - b) / C :
	         V == g ? (b - r) / C + 2 :
	                  (r - g) / C + 4
	        );
	    H = ((H + 360) % 6) * 60 / 360;
	    S = C == 0 ? 0 : C / V;
	    return {h: H, s: S, b: V, toString: hsbtoString};
	};
	/*\
	 * Snap.rgb2hsl
	 [ method ]
	 **
	 * Converts RGB values to an HSL object
	 - r (number) red
	 - g (number) green
	 - b (number) blue
	 = (object) HSL object in the following format:
	 o {
	 o     h (number) hue,
	 o     s (number) saturation,
	 o     l (number) luminosity
	 o }
	\*/
	Snap.rgb2hsl = function (r, g, b) {
	    b = prepareRGB(r, g, b);
	    r = b[0];
	    g = b[1];
	    b = b[2];

	    var H, S, L, M, m, C;
	    M = mmax(r, g, b);
	    m = mmin(r, g, b);
	    C = M - m;
	    H = (C == 0 ? null :
	         M == r ? (g - b) / C :
	         M == g ? (b - r) / C + 2 :
	                  (r - g) / C + 4);
	    H = ((H + 360) % 6) * 60 / 360;
	    L = (M + m) / 2;
	    S = (C == 0 ? 0 :
	         L < .5 ? C / (2 * L) :
	                  C / (2 - 2 * L));
	    return {h: H, s: S, l: L, toString: hsltoString};
	};

	// Transformations
	/*\
	 * Snap.parsePathString
	 [ method ]
	 **
	 * Utility method
	 **
	 * Parses given path string into an array of arrays of path segments
	 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
	 = (array) array of segments
	\*/
	Snap.parsePathString = function (pathString) {
	    if (!pathString) {
	        return null;
	    }
	    var pth = Snap.path(pathString);
	    if (pth.arr) {
	        return Snap.path.clone(pth.arr);
	    }

	    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
	        data = [];
	    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
	        data = Snap.path.clone(pathString);
	    }
	    if (!data.length) {
	        Str(pathString).replace(pathCommand, function (a, b, c) {
	            var params = [],
	                name = b.toLowerCase();
	            c.replace(pathValues, function (a, b) {
	                b && params.push(+b);
	            });
	            if (name == "m" && params.length > 2) {
	                data.push([b].concat(params.splice(0, 2)));
	                name = "l";
	                b = b == "m" ? "l" : "L";
	            }
	            if (name == "o" && params.length == 1) {
	                data.push([b, params[0]]);
	            }
	            if (name == "r") {
	                data.push([b].concat(params));
	            } else while (params.length >= paramCounts[name]) {
	                data.push([b].concat(params.splice(0, paramCounts[name])));
	                if (!paramCounts[name]) {
	                    break;
	                }
	            }
	        });
	    }
	    data.toString = Snap.path.toString;
	    pth.arr = Snap.path.clone(data);
	    return data;
	};
	/*\
	 * Snap.parseTransformString
	 [ method ]
	 **
	 * Utility method
	 **
	 * Parses given transform string into an array of transformations
	 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
	 = (array) array of transformations
	\*/
	var parseTransformString = Snap.parseTransformString = function (TString) {
	    if (!TString) {
	        return null;
	    }
	    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
	        data = [];
	    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
	        data = Snap.path.clone(TString);
	    }
	    if (!data.length) {
	        Str(TString).replace(tCommand, function (a, b, c) {
	            var params = [],
	                name = b.toLowerCase();
	            c.replace(pathValues, function (a, b) {
	                b && params.push(+b);
	            });
	            data.push([b].concat(params));
	        });
	    }
	    data.toString = Snap.path.toString;
	    return data;
	};
	function svgTransform2string(tstr) {
	    var res = [];
	    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
	        params = params.split(/\s*,\s*|\s+/);
	        if (name == "rotate" && params.length == 1) {
	            params.push(0, 0);
	        }
	        if (name == "scale") {
	            if (params.length > 2) {
	                params = params.slice(0, 2);
	            } else if (params.length == 2) {
	                params.push(0, 0);
	            }
	            if (params.length == 1) {
	                params.push(params[0], 0, 0);
	            }
	        }
	        if (name == "skewX") {
	            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
	        } else if (name == "skewY") {
	            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
	        } else {
	            res.push([name.charAt(0)].concat(params));
	        }
	        return all;
	    });
	    return res;
	}
	Snap._.svgTransform2string = svgTransform2string;
	Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
	function transform2matrix(tstr, bbox) {
	    var tdata = parseTransformString(tstr),
	        m = new Snap.Matrix;
	    if (tdata) {
	        for (var i = 0, ii = tdata.length; i < ii; i++) {
	            var t = tdata[i],
	                tlen = t.length,
	                command = Str(t[0]).toLowerCase(),
	                absolute = t[0] != command,
	                inver = absolute ? m.invert() : 0,
	                x1,
	                y1,
	                x2,
	                y2,
	                bb;
	            if (command == "t" && tlen == 2){
	                m.translate(t[1], 0);
	            } else if (command == "t" && tlen == 3) {
	                if (absolute) {
	                    x1 = inver.x(0, 0);
	                    y1 = inver.y(0, 0);
	                    x2 = inver.x(t[1], t[2]);
	                    y2 = inver.y(t[1], t[2]);
	                    m.translate(x2 - x1, y2 - y1);
	                } else {
	                    m.translate(t[1], t[2]);
	                }
	            } else if (command == "r") {
	                if (tlen == 2) {
	                    bb = bb || bbox;
	                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                } else if (tlen == 4) {
	                    if (absolute) {
	                        x2 = inver.x(t[2], t[3]);
	                        y2 = inver.y(t[2], t[3]);
	                        m.rotate(t[1], x2, y2);
	                    } else {
	                        m.rotate(t[1], t[2], t[3]);
	                    }
	                }
	            } else if (command == "s") {
	                if (tlen == 2 || tlen == 3) {
	                    bb = bb || bbox;
	                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                } else if (tlen == 4) {
	                    if (absolute) {
	                        x2 = inver.x(t[2], t[3]);
	                        y2 = inver.y(t[2], t[3]);
	                        m.scale(t[1], t[1], x2, y2);
	                    } else {
	                        m.scale(t[1], t[1], t[2], t[3]);
	                    }
	                } else if (tlen == 5) {
	                    if (absolute) {
	                        x2 = inver.x(t[3], t[4]);
	                        y2 = inver.y(t[3], t[4]);
	                        m.scale(t[1], t[2], x2, y2);
	                    } else {
	                        m.scale(t[1], t[2], t[3], t[4]);
	                    }
	                }
	            } else if (command == "m" && tlen == 7) {
	                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
	            }
	        }
	    }
	    return m;
	}
	Snap._.transform2matrix = transform2matrix;
	Snap._unit2px = unit2px;
	var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
	    function (a, b) {
	        var adown = a.nodeType == 9 ? a.documentElement : a,
	            bup = b && b.parentNode;
	            return a == bup || !!(bup && bup.nodeType == 1 && (
	                adown.contains ?
	                    adown.contains(bup) :
	                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
	            ));
	    } :
	    function (a, b) {
	        if (b) {
	            while (b) {
	                b = b.parentNode;
	                if (b == a) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    };
	function getSomeDefs(el) {
	    var p = (el.node.ownerSVGElement && wrap(el.node.ownerSVGElement)) ||
	            (el.node.parentNode && wrap(el.node.parentNode)) ||
	            Snap.select("svg") ||
	            Snap(0, 0),
	        pdefs = p.select("defs"),
	        defs  = pdefs == null ? false : pdefs.node;
	    if (!defs) {
	        defs = make("defs", p.node).node;
	    }
	    return defs;
	}
	function getSomeSVG(el) {
	    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
	}
	Snap._.getSomeDefs = getSomeDefs;
	Snap._.getSomeSVG = getSomeSVG;
	function unit2px(el, name, value) {
	    var svg = getSomeSVG(el).node,
	        out = {},
	        mgr = svg.querySelector(".svg---mgr");
	    if (!mgr) {
	        mgr = $("rect");
	        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
	        svg.appendChild(mgr);
	    }
	    function getW(val) {
	        if (val == null) {
	            return E;
	        }
	        if (val == +val) {
	            return val;
	        }
	        $(mgr, {width: val});
	        try {
	            return mgr.getBBox().width;
	        } catch (e) {
	            return 0;
	        }
	    }
	    function getH(val) {
	        if (val == null) {
	            return E;
	        }
	        if (val == +val) {
	            return val;
	        }
	        $(mgr, {height: val});
	        try {
	            return mgr.getBBox().height;
	        } catch (e) {
	            return 0;
	        }
	    }
	    function set(nam, f) {
	        if (name == null) {
	            out[nam] = f(el.attr(nam) || 0);
	        } else if (nam == name) {
	            out = f(value == null ? el.attr(nam) || 0 : value);
	        }
	    }
	    switch (el.type) {
	        case "rect":
	            set("rx", getW);
	            set("ry", getH);
	        case "image":
	            set("width", getW);
	            set("height", getH);
	        case "text":
	            set("x", getW);
	            set("y", getH);
	        break;
	        case "circle":
	            set("cx", getW);
	            set("cy", getH);
	            set("r", getW);
	        break;
	        case "ellipse":
	            set("cx", getW);
	            set("cy", getH);
	            set("rx", getW);
	            set("ry", getH);
	        break;
	        case "line":
	            set("x1", getW);
	            set("x2", getW);
	            set("y1", getH);
	            set("y2", getH);
	        break;
	        case "marker":
	            set("refX", getW);
	            set("markerWidth", getW);
	            set("refY", getH);
	            set("markerHeight", getH);
	        break;
	        case "radialGradient":
	            set("fx", getW);
	            set("fy", getH);
	        break;
	        case "tspan":
	            set("dx", getW);
	            set("dy", getH);
	        break;
	        default:
	            set(name, getW);
	    }
	    svg.removeChild(mgr);
	    return out;
	}
	/*\
	 * Snap.select
	 [ method ]
	 **
	 * Wraps a DOM element specified by CSS selector as @Element
	 - query (string) CSS selector of the element
	 = (Element) the current element
	\*/
	Snap.select = function (query) {
	    query = Str(query).replace(/([^\\]):/g, "$1\\:");
	    return wrap(glob.doc.querySelector(query));
	};
	/*\
	 * Snap.selectAll
	 [ method ]
	 **
	 * Wraps DOM elements specified by CSS selector as set or array of @Element
	 - query (string) CSS selector of the element
	 = (Element) the current element
	\*/
	Snap.selectAll = function (query) {
	    var nodelist = glob.doc.querySelectorAll(query),
	        set = (Snap.set || Array)();
	    for (var i = 0; i < nodelist.length; i++) {
	        set.push(wrap(nodelist[i]));
	    }
	    return set;
	};

	function add2group(list) {
	    if (!is(list, "array")) {
	        list = Array.prototype.slice.call(arguments, 0);
	    }
	    var i = 0,
	        j = 0,
	        node = this.node;
	    while (this[i]) delete this[i++];
	    for (i = 0; i < list.length; i++) {
	        if (list[i].type == "set") {
	            list[i].forEach(function (el) {
	                node.appendChild(el.node);
	            });
	        } else {
	            node.appendChild(list[i].node);
	        }
	    }
	    var children = node.childNodes;
	    for (i = 0; i < children.length; i++) {
	        this[j++] = wrap(children[i]);
	    }
	    return this;
	}
	// Hub garbage collector every 10s
	setInterval(function () {
	    for (var key in hub) if (hub[has](key)) {
	        var el = hub[key],
	            node = el.node;
	        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
	            delete hub[key];
	        }
	    }
	}, 1e4);
	function Element(el) {
	    if (el.snap in hub) {
	        return hub[el.snap];
	    }
	    var svg;
	    try {
	        svg = el.ownerSVGElement;
	    } catch(e) {}
	    /*\
	     * Element.node
	     [ property (object) ]
	     **
	     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
	     > Usage
	     | // draw a circle at coordinate 10,10 with radius of 10
	     | var c = paper.circle(10, 10, 10);
	     | c.node.onclick = function () {
	     |     c.attr("fill", "red");
	     | };
	    \*/
	    this.node = el;
	    if (svg) {
	        this.paper = new Paper(svg);
	    }
	    /*\
	     * Element.type
	     [ property (string) ]
	     **
	     * SVG tag name of the given element.
	    \*/
	    this.type = el.tagName || el.nodeName;
	    var id = this.id = ID(this);
	    this.anims = {};
	    this._ = {
	        transform: []
	    };
	    el.snap = id;
	    hub[id] = this;
	    if (this.type == "g") {
	        this.add = add2group;
	    }
	    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
	        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
	            this[method] = Paper.prototype[method];
	        }
	    }
	}
	   /*\
	     * Element.attr
	     [ method ]
	     **
	     * Gets or sets given attributes of the element.
	     **
	     - params (object) contains key-value pairs of attributes you want to set
	     * or
	     - param (string) name of the attribute
	     = (Element) the current element
	     * or
	     = (string) value of attribute
	     > Usage
	     | el.attr({
	     |     fill: "#fc0",
	     |     stroke: "#000",
	     |     strokeWidth: 2, // CamelCase...
	     |     "fill-opacity": 0.5, // or dash-separated names
	     |     width: "*=2" // prefixed values
	     | });
	     | console.log(el.attr("fill")); // #fc0
	     * Prefixed values in format `"+=10"` supported. All four operations
	     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
	     * and `-`: `"+=2em"`.
	    \*/
	    Element.prototype.attr = function (params, value) {
	        var el = this,
	            node = el.node;
	        if (!params) {
	            if (node.nodeType != 1) {
	                return {
	                    text: node.nodeValue
	                };
	            }
	            var attr = node.attributes,
	                out = {};
	            for (var i = 0, ii = attr.length; i < ii; i++) {
	                out[attr[i].nodeName] = attr[i].nodeValue;
	            }
	            return out;
	        }
	        if (is(params, "string")) {
	            if (arguments.length > 1) {
	                var json = {};
	                json[params] = value;
	                params = json;
	            } else {
	                return eve("snap.util.getattr." + params, el).firstDefined();
	            }
	        }
	        for (var att in params) {
	            if (params[has](att)) {
	                eve("snap.util.attr." + att, el, params[att]);
	            }
	        }
	        return el;
	    };
	/*\
	 * Snap.parse
	 [ method ]
	 **
	 * Parses SVG fragment and converts it into a @Fragment
	 **
	 - svg (string) SVG string
	 = (Fragment) the @Fragment
	\*/
	Snap.parse = function (svg) {
	    var f = glob.doc.createDocumentFragment(),
	        full = true,
	        div = glob.doc.createElement("div");
	    svg = Str(svg);
	    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
	        svg = "<svg>" + svg + "</svg>";
	        full = false;
	    }
	    div.innerHTML = svg;
	    svg = div.getElementsByTagName("svg")[0];
	    if (svg) {
	        if (full) {
	            f = svg;
	        } else {
	            while (svg.firstChild) {
	                f.appendChild(svg.firstChild);
	            }
	        }
	    }
	    return new Fragment(f);
	};
	function Fragment(frag) {
	    this.node = frag;
	}
	/*\
	 * Snap.fragment
	 [ method ]
	 **
	 * Creates a DOM fragment from a given list of elements or strings
	 **
	 - varargs (…) SVG string
	 = (Fragment) the @Fragment
	\*/
	Snap.fragment = function () {
	    var args = Array.prototype.slice.call(arguments, 0),
	        f = glob.doc.createDocumentFragment();
	    for (var i = 0, ii = args.length; i < ii; i++) {
	        var item = args[i];
	        if (item.node && item.node.nodeType) {
	            f.appendChild(item.node);
	        }
	        if (item.nodeType) {
	            f.appendChild(item);
	        }
	        if (typeof item == "string") {
	            f.appendChild(Snap.parse(item).node);
	        }
	    }
	    return new Fragment(f);
	};

	function make(name, parent) {
	    var res = $(name);
	    parent.appendChild(res);
	    var el = wrap(res);
	    return el;
	}
	function Paper(w, h) {
	    var res,
	        desc,
	        defs,
	        proto = Paper.prototype;
	    if (w && w.tagName == "svg") {
	        if (w.snap in hub) {
	            return hub[w.snap];
	        }
	        var doc = w.ownerDocument;
	        res = new Element(w);
	        desc = w.getElementsByTagName("desc")[0];
	        defs = w.getElementsByTagName("defs")[0];
	        if (!desc) {
	            desc = $("desc");
	            desc.appendChild(doc.createTextNode("Created with Snap"));
	            res.node.appendChild(desc);
	        }
	        if (!defs) {
	            defs = $("defs");
	            res.node.appendChild(defs);
	        }
	        res.defs = defs;
	        for (var key in proto) if (proto[has](key)) {
	            res[key] = proto[key];
	        }
	        res.paper = res.root = res;
	    } else {
	        res = make("svg", glob.doc.body);
	        $(res.node, {
	            height: h,
	            version: 1.1,
	            width: w,
	            xmlns: xmlns
	        });
	    }
	    return res;
	}
	function wrap(dom) {
	    if (!dom) {
	        return dom;
	    }
	    if (dom instanceof Element || dom instanceof Fragment) {
	        return dom;
	    }
	    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
	        return new Paper(dom);
	    }
	    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
	        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
	    }
	    return new Element(dom);
	}

	Snap._.make = make;
	Snap._.wrap = wrap;
	/*\
	 * Paper.el
	 [ method ]
	 **
	 * Creates an element on paper with a given name and no attributes
	 **
	 - name (string) tag name
	 - attr (object) attributes
	 = (Element) the current element
	 > Usage
	 | var c = paper.circle(10, 10, 10); // is the same as...
	 | var c = paper.el("circle").attr({
	 |     cx: 10,
	 |     cy: 10,
	 |     r: 10
	 | });
	 | // and the same as
	 | var c = paper.el("circle", {
	 |     cx: 10,
	 |     cy: 10,
	 |     r: 10
	 | });
	\*/
	Paper.prototype.el = function (name, attr) {
	    var el = make(name, this.node);
	    attr && el.attr(attr);
	    return el;
	};
	/*\
	 * Element.children
	 [ method ]
	 **
	 * Returns array of all the children of the element.
	 = (array) array of Elements
	\*/
	Element.prototype.children = function () {
	    var out = [],
	        ch = this.node.childNodes;
	    for (var i = 0, ii = ch.length; i < ii; i++) {
	        out[i] = Snap(ch[i]);
	    }
	    return out;
	};
	function jsonFiller(root, o) {
	    for (var i = 0, ii = root.length; i < ii; i++) {
	        var item = {
	                type: root[i].type,
	                attr: root[i].attr()
	            },
	            children = root[i].children();
	        o.push(item);
	        if (children.length) {
	            jsonFiller(children, item.childNodes = []);
	        }
	    }
	}
	/*\
	 * Element.toJSON
	 [ method ]
	 **
	 * Returns object representation of the given element and all its children.
	 = (object) in format
	 o {
	 o     type (string) this.type,
	 o     attr (object) attributes map,
	 o     childNodes (array) optional array of children in the same format
	 o }
	\*/
	Element.prototype.toJSON = function () {
	    var out = [];
	    jsonFiller([this], out);
	    return out[0];
	};
	// default
	eve.on("snap.util.getattr", function () {
	    var att = eve.nt();
	    att = att.substring(att.lastIndexOf(".") + 1);
	    var css = att.replace(/[A-Z]/g, function (letter) {
	        return "-" + letter.toLowerCase();
	    });
	    if (cssAttr[has](css)) {
	        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
	    } else {
	        return $(this.node, att);
	    }
	});
	var cssAttr = {
	    "alignment-baseline": 0,
	    "baseline-shift": 0,
	    "clip": 0,
	    "clip-path": 0,
	    "clip-rule": 0,
	    "color": 0,
	    "color-interpolation": 0,
	    "color-interpolation-filters": 0,
	    "color-profile": 0,
	    "color-rendering": 0,
	    "cursor": 0,
	    "direction": 0,
	    "display": 0,
	    "dominant-baseline": 0,
	    "enable-background": 0,
	    "fill": 0,
	    "fill-opacity": 0,
	    "fill-rule": 0,
	    "filter": 0,
	    "flood-color": 0,
	    "flood-opacity": 0,
	    "font": 0,
	    "font-family": 0,
	    "font-size": 0,
	    "font-size-adjust": 0,
	    "font-stretch": 0,
	    "font-style": 0,
	    "font-variant": 0,
	    "font-weight": 0,
	    "glyph-orientation-horizontal": 0,
	    "glyph-orientation-vertical": 0,
	    "image-rendering": 0,
	    "kerning": 0,
	    "letter-spacing": 0,
	    "lighting-color": 0,
	    "marker": 0,
	    "marker-end": 0,
	    "marker-mid": 0,
	    "marker-start": 0,
	    "mask": 0,
	    "opacity": 0,
	    "overflow": 0,
	    "pointer-events": 0,
	    "shape-rendering": 0,
	    "stop-color": 0,
	    "stop-opacity": 0,
	    "stroke": 0,
	    "stroke-dasharray": 0,
	    "stroke-dashoffset": 0,
	    "stroke-linecap": 0,
	    "stroke-linejoin": 0,
	    "stroke-miterlimit": 0,
	    "stroke-opacity": 0,
	    "stroke-width": 0,
	    "text-anchor": 0,
	    "text-decoration": 0,
	    "text-rendering": 0,
	    "unicode-bidi": 0,
	    "visibility": 0,
	    "word-spacing": 0,
	    "writing-mode": 0
	};

	eve.on("snap.util.attr", function (value) {
	    var att = eve.nt(),
	        attr = {};
	    att = att.substring(att.lastIndexOf(".") + 1);
	    attr[att] = value;
	    var style = att.replace(/-(\w)/gi, function (all, letter) {
	            return letter.toUpperCase();
	        }),
	        css = att.replace(/[A-Z]/g, function (letter) {
	            return "-" + letter.toLowerCase();
	        });
	    if (cssAttr[has](css)) {
	        this.node.style[style] = value == null ? E : value;
	    } else {
	        $(this.node, attr);
	    }
	});
	(function (proto) {}(Paper.prototype));

	// simple ajax
	/*\
	 * Snap.ajax
	 [ method ]
	 **
	 * Simple implementation of Ajax
	 **
	 - url (string) URL
	 - postData (object|string) data for post request
	 - callback (function) callback
	 - scope (object) #optional scope of callback
	 * or
	 - url (string) URL
	 - callback (function) callback
	 - scope (object) #optional scope of callback
	 = (XMLHttpRequest) the XMLHttpRequest object, just in case
	\*/
	Snap.ajax = function (url, postData, callback, scope){
	    var req = new XMLHttpRequest,
	        id = ID();
	    if (req) {
	        if (is(postData, "function")) {
	            scope = callback;
	            callback = postData;
	            postData = null;
	        } else if (is(postData, "object")) {
	            var pd = [];
	            for (var key in postData) if (postData.hasOwnProperty(key)) {
	                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
	            }
	            postData = pd.join("&");
	        }
	        req.open((postData ? "POST" : "GET"), url, true);
	        if (postData) {
	            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	        }
	        if (callback) {
	            eve.once("snap.ajax." + id + ".0", callback);
	            eve.once("snap.ajax." + id + ".200", callback);
	            eve.once("snap.ajax." + id + ".304", callback);
	        }
	        req.onreadystatechange = function() {
	            if (req.readyState != 4) return;
	            eve("snap.ajax." + id + "." + req.status, scope, req);
	        };
	        if (req.readyState == 4) {
	            return req;
	        }
	        req.send(postData);
	        return req;
	    }
	};
	/*\
	 * Snap.load
	 [ method ]
	 **
	 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
	 **
	 - url (string) URL
	 - callback (function) callback
	 - scope (object) #optional scope of callback
	\*/
	Snap.load = function (url, callback, scope) {
	    Snap.ajax(url, function (req) {
	        var f = Snap.parse(req.responseText);
	        scope ? callback.call(scope, f) : callback(f);
	    });
	};
	var getOffset = function (elem) {
	    var box = elem.getBoundingClientRect(),
	        doc = elem.ownerDocument,
	        body = doc.body,
	        docElem = doc.documentElement,
	        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
	        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
	        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
	    return {
	        y: top,
	        x: left
	    };
	};
	/*\
	 * Snap.getElementByPoint
	 [ method ]
	 **
	 * Returns you topmost element under given point.
	 **
	 = (object) Snap element object
	 - x (number) x coordinate from the top left corner of the window
	 - y (number) y coordinate from the top left corner of the window
	 > Usage
	 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
	\*/
	Snap.getElementByPoint = function (x, y) {
	    var paper = this,
	        svg = paper.canvas,
	        target = glob.doc.elementFromPoint(x, y);
	    if (glob.win.opera && target.tagName == "svg") {
	        var so = getOffset(target),
	            sr = target.createSVGRect();
	        sr.x = x - so.x;
	        sr.y = y - so.y;
	        sr.width = sr.height = 1;
	        var hits = target.getIntersectionList(sr, null);
	        if (hits.length) {
	            target = hits[hits.length - 1];
	        }
	    }
	    if (!target) {
	        return null;
	    }
	    return wrap(target);
	};
	/*\
	 * Snap.plugin
	 [ method ]
	 **
	 * Let you write plugins. You pass in a function with five arguments, like this:
	 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
	 |     Snap.newmethod = function () {};
	 |     Element.prototype.newmethod = function () {};
	 |     Paper.prototype.newmethod = function () {};
	 | });
	 * Inside the function you have access to all main objects (and their
	 * prototypes). This allow you to extend anything you want.
	 **
	 - f (function) your plugin body
	\*/
	Snap.plugin = function (f) {
	    f(Snap, Element, Paper, glob, Fragment);
	};
	glob.win.Snap = Snap;
	return Snap;
	}(window || this));

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var elproto = Element.prototype,
	        is = Snap.is,
	        Str = String,
	        unit2px = Snap._unit2px,
	        $ = Snap._.$,
	        make = Snap._.make,
	        getSomeDefs = Snap._.getSomeDefs,
	        has = "hasOwnProperty",
	        wrap = Snap._.wrap;
	    /*\
	     * Element.getBBox
	     [ method ]
	     **
	     * Returns the bounding box descriptor for the given element
	     **
	     = (object) bounding box descriptor:
	     o {
	     o     cx: (number) x of the center,
	     o     cy: (number) x of the center,
	     o     h: (number) height,
	     o     height: (number) height,
	     o     path: (string) path command for the box,
	     o     r0: (number) radius of a circle that fully encloses the box,
	     o     r1: (number) radius of the smallest circle that can be enclosed,
	     o     r2: (number) radius of the largest circle that can be enclosed,
	     o     vb: (string) box as a viewbox command,
	     o     w: (number) width,
	     o     width: (number) width,
	     o     x2: (number) x of the right side,
	     o     x: (number) x of the left side,
	     o     y2: (number) y of the bottom edge,
	     o     y: (number) y of the top edge
	     o }
	    \*/
	    elproto.getBBox = function (isWithoutTransform) {
	        if (!Snap.Matrix || !Snap.path) {
	            return this.node.getBBox();
	        }
	        var el = this,
	            m = new Snap.Matrix;
	        if (el.removed) {
	            return Snap._.box();
	        }
	        while (el.type == "use") {
	            if (!isWithoutTransform) {
	                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
	            }
	            if (el.original) {
	                el = el.original;
	            } else {
	                var href = el.attr("xlink:href");
	                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
	            }
	        }
	        var _ = el._,
	            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
	        try {
	            if (isWithoutTransform) {
	                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
	                return Snap._.box(_.bboxwt);
	            } else {
	                el.realPath = pathfinder(el);
	                el.matrix = el.transform().localMatrix;
	                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
	                return Snap._.box(_.bbox);
	            }
	        } catch (e) {
	            // Firefox doesn’t give you bbox of hidden element
	            return Snap._.box();
	        }
	    };
	    var propString = function () {
	        return this.string;
	    };
	    function extractTransform(el, tstr) {
	        if (tstr == null) {
	            var doReturn = true;
	            if (el.type == "linearGradient" || el.type == "radialGradient") {
	                tstr = el.node.getAttribute("gradientTransform");
	            } else if (el.type == "pattern") {
	                tstr = el.node.getAttribute("patternTransform");
	            } else {
	                tstr = el.node.getAttribute("transform");
	            }
	            if (!tstr) {
	                return new Snap.Matrix;
	            }
	            tstr = Snap._.svgTransform2string(tstr);
	        } else {
	            if (!Snap._.rgTransform.test(tstr)) {
	                tstr = Snap._.svgTransform2string(tstr);
	            } else {
	                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
	            }
	            if (is(tstr, "array")) {
	                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
	            }
	            el._.transform = tstr;
	        }
	        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
	        if (doReturn) {
	            return m;
	        } else {
	            el.matrix = m;
	        }
	    }
	    /*\
	     * Element.transform
	     [ method ]
	     **
	     * Gets or sets transformation of the element
	     **
	     - tstr (string) transform string in Snap or SVG format
	     = (Element) the current element
	     * or
	     = (object) transformation descriptor:
	     o {
	     o     string (string) transform string,
	     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
	     o     localMatrix (Matrix) matrix of transformations applied only to the element,
	     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
	     o     global (string) global transformation as string,
	     o     local (string) local transformation as string,
	     o     toString (function) returns `string` property
	     o }
	    \*/
	    elproto.transform = function (tstr) {
	        var _ = this._;
	        if (tstr == null) {
	            var papa = this,
	                global = new Snap.Matrix(this.node.getCTM()),
	                local = extractTransform(this),
	                ms = [local],
	                m = new Snap.Matrix,
	                i,
	                localString = local.toTransformString(),
	                string = Str(local) == Str(this.matrix) ?
	                            Str(_.transform) : localString;
	            while (papa.type != "svg" && (papa = papa.parent())) {
	                ms.push(extractTransform(papa));
	            }
	            i = ms.length;
	            while (i--) {
	                m.add(ms[i]);
	            }
	            return {
	                string: string,
	                globalMatrix: global,
	                totalMatrix: m,
	                localMatrix: local,
	                diffMatrix: global.clone().add(local.invert()),
	                global: global.toTransformString(),
	                total: m.toTransformString(),
	                local: localString,
	                toString: propString
	            };
	        }
	        if (tstr instanceof Snap.Matrix) {
	            this.matrix = tstr;
	            this._.transform = tstr.toTransformString();
	        } else {
	            extractTransform(this, tstr);
	        }

	        if (this.node) {
	            if (this.type == "linearGradient" || this.type == "radialGradient") {
	                $(this.node, {gradientTransform: this.matrix});
	            } else if (this.type == "pattern") {
	                $(this.node, {patternTransform: this.matrix});
	            } else {
	                $(this.node, {transform: this.matrix});
	            }
	        }

	        return this;
	    };
	    /*\
	     * Element.parent
	     [ method ]
	     **
	     * Returns the element's parent
	     **
	     = (Element) the parent element
	    \*/
	    elproto.parent = function () {
	        return wrap(this.node.parentNode);
	    };
	    /*\
	     * Element.append
	     [ method ]
	     **
	     * Appends the given element to current one
	     **
	     - el (Element|Set) element to append
	     = (Element) the parent element
	    \*/
	    /*\
	     * Element.add
	     [ method ]
	     **
	     * See @Element.append
	    \*/
	    elproto.append = elproto.add = function (el) {
	        if (el) {
	            if (el.type == "set") {
	                var it = this;
	                el.forEach(function (el) {
	                    it.add(el);
	                });
	                return this;
	            }
	            el = wrap(el);
	            this.node.appendChild(el.node);
	            el.paper = this.paper;
	        }
	        return this;
	    };
	    /*\
	     * Element.appendTo
	     [ method ]
	     **
	     * Appends the current element to the given one
	     **
	     - el (Element) parent element to append to
	     = (Element) the child element
	    \*/
	    elproto.appendTo = function (el) {
	        if (el) {
	            el = wrap(el);
	            el.append(this);
	        }
	        return this;
	    };
	    /*\
	     * Element.prepend
	     [ method ]
	     **
	     * Prepends the given element to the current one
	     **
	     - el (Element) element to prepend
	     = (Element) the parent element
	    \*/
	    elproto.prepend = function (el) {
	        if (el) {
	            if (el.type == "set") {
	                var it = this,
	                    first;
	                el.forEach(function (el) {
	                    if (first) {
	                        first.after(el);
	                    } else {
	                        it.prepend(el);
	                    }
	                    first = el;
	                });
	                return this;
	            }
	            el = wrap(el);
	            var parent = el.parent();
	            this.node.insertBefore(el.node, this.node.firstChild);
	            this.add && this.add();
	            el.paper = this.paper;
	            this.parent() && this.parent().add();
	            parent && parent.add();
	        }
	        return this;
	    };
	    /*\
	     * Element.prependTo
	     [ method ]
	     **
	     * Prepends the current element to the given one
	     **
	     - el (Element) parent element to prepend to
	     = (Element) the child element
	    \*/
	    elproto.prependTo = function (el) {
	        el = wrap(el);
	        el.prepend(this);
	        return this;
	    };
	    /*\
	     * Element.before
	     [ method ]
	     **
	     * Inserts given element before the current one
	     **
	     - el (Element) element to insert
	     = (Element) the parent element
	    \*/
	    elproto.before = function (el) {
	        if (el.type == "set") {
	            var it = this;
	            el.forEach(function (el) {
	                var parent = el.parent();
	                it.node.parentNode.insertBefore(el.node, it.node);
	                parent && parent.add();
	            });
	            this.parent().add();
	            return this;
	        }
	        el = wrap(el);
	        var parent = el.parent();
	        this.node.parentNode.insertBefore(el.node, this.node);
	        this.parent() && this.parent().add();
	        parent && parent.add();
	        el.paper = this.paper;
	        return this;
	    };
	    /*\
	     * Element.after
	     [ method ]
	     **
	     * Inserts given element after the current one
	     **
	     - el (Element) element to insert
	     = (Element) the parent element
	    \*/
	    elproto.after = function (el) {
	        el = wrap(el);
	        var parent = el.parent();
	        if (this.node.nextSibling) {
	            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
	        } else {
	            this.node.parentNode.appendChild(el.node);
	        }
	        this.parent() && this.parent().add();
	        parent && parent.add();
	        el.paper = this.paper;
	        return this;
	    };
	    /*\
	     * Element.insertBefore
	     [ method ]
	     **
	     * Inserts the element after the given one
	     **
	     - el (Element) element next to whom insert to
	     = (Element) the parent element
	    \*/
	    elproto.insertBefore = function (el) {
	        el = wrap(el);
	        var parent = this.parent();
	        el.node.parentNode.insertBefore(this.node, el.node);
	        this.paper = el.paper;
	        parent && parent.add();
	        el.parent() && el.parent().add();
	        return this;
	    };
	    /*\
	     * Element.insertAfter
	     [ method ]
	     **
	     * Inserts the element after the given one
	     **
	     - el (Element) element next to whom insert to
	     = (Element) the parent element
	    \*/
	    elproto.insertAfter = function (el) {
	        el = wrap(el);
	        var parent = this.parent();
	        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
	        this.paper = el.paper;
	        parent && parent.add();
	        el.parent() && el.parent().add();
	        return this;
	    };
	    /*\
	     * Element.remove
	     [ method ]
	     **
	     * Removes element from the DOM
	     = (Element) the detached element
	    \*/
	    elproto.remove = function () {
	        var parent = this.parent();
	        this.node.parentNode && this.node.parentNode.removeChild(this.node);
	        delete this.paper;
	        this.removed = true;
	        parent && parent.add();
	        return this;
	    };
	    /*\
	     * Element.select
	     [ method ]
	     **
	     * Gathers the nested @Element matching the given set of CSS selectors
	     **
	     - query (string) CSS selector
	     = (Element) result of query selection
	    \*/
	    elproto.select = function (query) {
	        query = Str(query).replace(/([^\\]):/g, "$1\\:");
	        return wrap(this.node.querySelector(query));
	    };
	    /*\
	     * Element.selectAll
	     [ method ]
	     **
	     * Gathers nested @Element objects matching the given set of CSS selectors
	     **
	     - query (string) CSS selector
	     = (Set|array) result of query selection
	    \*/
	    elproto.selectAll = function (query) {
	        var nodelist = this.node.querySelectorAll(query),
	            set = (Snap.set || Array)();
	        for (var i = 0; i < nodelist.length; i++) {
	            set.push(wrap(nodelist[i]));
	        }
	        return set;
	    };
	    /*\
	     * Element.asPX
	     [ method ]
	     **
	     * Returns given attribute of the element as a `px` value (not %, em, etc.)
	     **
	     - attr (string) attribute name
	     - value (string) #optional attribute value
	     = (Element) result of query selection
	    \*/
	    elproto.asPX = function (attr, value) {
	        if (value == null) {
	            value = this.attr(attr);
	        }
	        return +unit2px(this, attr, value);
	    };
	    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
	    /*\
	     * Element.use
	     [ method ]
	     **
	     * Creates a `<use>` element linked to the current element
	     **
	     = (Element) the `<use>` element
	    \*/
	    elproto.use = function () {
	        var use,
	            id = this.node.id;
	        if (!id) {
	            id = this.id;
	            $(this.node, {
	                id: id
	            });
	        }
	        if (this.type == "linearGradient" || this.type == "radialGradient" ||
	            this.type == "pattern") {
	            use = make(this.type, this.node.parentNode);
	        } else {
	            use = make("use", this.node.parentNode);
	        }
	        $(use.node, {
	            "xlink:href": "#" + id
	        });
	        use.original = this;
	        return use;
	    };
	    function fixids(el) {
	        var els = el.selectAll("*"),
	            it,
	            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
	            ids = [],
	            uses = {};
	        function urltest(it, name) {
	            var val = $(it.node, name);
	            val = val && val.match(url);
	            val = val && val[2];
	            if (val && val.charAt() == "#") {
	                val = val.substring(1);
	            } else {
	                return;
	            }
	            if (val) {
	                uses[val] = (uses[val] || []).concat(function (id) {
	                    var attr = {};
	                    attr[name] = URL(id);
	                    $(it.node, attr);
	                });
	            }
	        }
	        function linktest(it) {
	            var val = $(it.node, "xlink:href");
	            if (val && val.charAt() == "#") {
	                val = val.substring(1);
	            } else {
	                return;
	            }
	            if (val) {
	                uses[val] = (uses[val] || []).concat(function (id) {
	                    it.attr("xlink:href", "#" + id);
	                });
	            }
	        }
	        for (var i = 0, ii = els.length; i < ii; i++) {
	            it = els[i];
	            urltest(it, "fill");
	            urltest(it, "stroke");
	            urltest(it, "filter");
	            urltest(it, "mask");
	            urltest(it, "clip-path");
	            linktest(it);
	            var oldid = $(it.node, "id");
	            if (oldid) {
	                $(it.node, {id: it.id});
	                ids.push({
	                    old: oldid,
	                    id: it.id
	                });
	            }
	        }
	        for (i = 0, ii = ids.length; i < ii; i++) {
	            var fs = uses[ids[i].old];
	            if (fs) {
	                for (var j = 0, jj = fs.length; j < jj; j++) {
	                    fs[j](ids[i].id);
	                }
	            }
	        }
	    }
	    /*\
	     * Element.clone
	     [ method ]
	     **
	     * Creates a clone of the element and inserts it after the element
	     **
	     = (Element) the clone
	    \*/
	    elproto.clone = function () {
	        var clone = wrap(this.node.cloneNode(true));
	        if ($(clone.node, "id")) {
	            $(clone.node, {id: clone.id});
	        }
	        fixids(clone);
	        clone.insertAfter(this);
	        return clone;
	    };
	    /*\
	     * Element.toDefs
	     [ method ]
	     **
	     * Moves element to the shared `<defs>` area
	     **
	     = (Element) the element
	    \*/
	    elproto.toDefs = function () {
	        var defs = getSomeDefs(this);
	        defs.appendChild(this.node);
	        return this;
	    };
	    /*\
	     * Element.toPattern
	     [ method ]
	     **
	     * Creates a `<pattern>` element from the current element
	     **
	     * To create a pattern you have to specify the pattern rect:
	     - x (string|number)
	     - y (string|number)
	     - width (string|number)
	     - height (string|number)
	     = (Element) the `<pattern>` element
	     * You can use pattern later on as an argument for `fill` attribute:
	     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
	     |         fill: "none",
	     |         stroke: "#bada55",
	     |         strokeWidth: 5
	     |     }).pattern(0, 0, 10, 10),
	     |     c = paper.circle(200, 200, 100);
	     | c.attr({
	     |     fill: p
	     | });
	    \*/
	    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
	        var p = make("pattern", getSomeDefs(this));
	        if (x == null) {
	            x = this.getBBox();
	        }
	        if (is(x, "object") && "x" in x) {
	            y = x.y;
	            width = x.width;
	            height = x.height;
	            x = x.x;
	        }
	        $(p.node, {
	            x: x,
	            y: y,
	            width: width,
	            height: height,
	            patternUnits: "userSpaceOnUse",
	            id: p.id,
	            viewBox: [x, y, width, height].join(" ")
	        });
	        p.node.appendChild(this.node);
	        return p;
	    };
	// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
	// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
	    /*\
	     * Element.marker
	     [ method ]
	     **
	     * Creates a `<marker>` element from the current element
	     **
	     * To create a marker you have to specify the bounding rect and reference point:
	     - x (number)
	     - y (number)
	     - width (number)
	     - height (number)
	     - refX (number)
	     - refY (number)
	     = (Element) the `<marker>` element
	     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
	    \*/
	    // TODO add usage for markers
	    elproto.marker = function (x, y, width, height, refX, refY) {
	        var p = make("marker", getSomeDefs(this));
	        if (x == null) {
	            x = this.getBBox();
	        }
	        if (is(x, "object") && "x" in x) {
	            y = x.y;
	            width = x.width;
	            height = x.height;
	            refX = x.refX || x.cx;
	            refY = x.refY || x.cy;
	            x = x.x;
	        }
	        $(p.node, {
	            viewBox: [x, y, width, height].join(" "),
	            markerWidth: width,
	            markerHeight: height,
	            orient: "auto",
	            refX: refX || 0,
	            refY: refY || 0,
	            id: p.id
	        });
	        p.node.appendChild(this.node);
	        return p;
	    };
	    // animation
	    function slice(from, to, f) {
	        return function (arr) {
	            var res = arr.slice(from, to);
	            if (res.length == 1) {
	                res = res[0];
	            }
	            return f ? f(res) : res;
	        };
	    }
	    var Animation = function (attr, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        this.attr = attr;
	        this.dur = ms;
	        easing && (this.easing = easing);
	        callback && (this.callback = callback);
	    };
	    Snap._.Animation = Animation;
	    /*\
	     * Snap.animation
	     [ method ]
	     **
	     * Creates an animation object
	     **
	     - attr (object) attributes of final destination
	     - duration (number) duration of the animation, in milliseconds
	     - easing (function) #optional one of easing functions of @mina or custom one
	     - callback (function) #optional callback function that fires when animation ends
	     = (object) animation object
	    \*/
	    Snap.animation = function (attr, ms, easing, callback) {
	        return new Animation(attr, ms, easing, callback);
	    };
	    /*\
	     * Element.inAnim
	     [ method ]
	     **
	     * Returns a set of animations that may be able to manipulate the current element
	     **
	     = (object) in format:
	     o {
	     o     anim (object) animation object,
	     o     mina (object) @mina object,
	     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
	     o     status (function) gets or sets the status of the animation,
	     o     stop (function) stops the animation
	     o }
	    \*/
	    elproto.inAnim = function () {
	        var el = this,
	            res = [];
	        for (var id in el.anims) if (el.anims[has](id)) {
	            (function (a) {
	                res.push({
	                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
	                    mina: a,
	                    curStatus: a.status(),
	                    status: function (val) {
	                        return a.status(val);
	                    },
	                    stop: function () {
	                        a.stop();
	                    }
	                });
	            }(el.anims[id]));
	        }
	        return res;
	    };
	    /*\
	     * Snap.animate
	     [ method ]
	     **
	     * Runs generic animation of one number into another with a caring function
	     **
	     - from (number|array) number or array of numbers
	     - to (number|array) number or array of numbers
	     - setter (function) caring function that accepts one number argument
	     - duration (number) duration, in milliseconds
	     - easing (function) #optional easing function from @mina or custom
	     - callback (function) #optional callback function to execute when animation ends
	     = (object) animation object in @mina format
	     o {
	     o     id (string) animation id, consider it read-only,
	     o     duration (function) gets or sets the duration of the animation,
	     o     easing (function) easing,
	     o     speed (function) gets or sets the speed of the animation,
	     o     status (function) gets or sets the status of the animation,
	     o     stop (function) stops the animation
	     o }
	     | var rect = Snap().rect(0, 0, 10, 10);
	     | Snap.animate(0, 10, function (val) {
	     |     rect.attr({
	     |         x: val
	     |     });
	     | }, 1000);
	     | // in given context is equivalent to
	     | rect.animate({x: 10}, 1000);
	    \*/
	    Snap.animate = function (from, to, setter, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        var now = mina.time(),
	            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
	        callback && eve.once("mina.finish." + anim.id, callback);
	        return anim;
	    };
	    /*\
	     * Element.stop
	     [ method ]
	     **
	     * Stops all the animations for the current element
	     **
	     = (Element) the current element
	    \*/
	    elproto.stop = function () {
	        var anims = this.inAnim();
	        for (var i = 0, ii = anims.length; i < ii; i++) {
	            anims[i].stop();
	        }
	        return this;
	    };
	    /*\
	     * Element.animate
	     [ method ]
	     **
	     * Animates the given attributes of the element
	     **
	     - attrs (object) key-value pairs of destination attributes
	     - duration (number) duration of the animation in milliseconds
	     - easing (function) #optional easing function from @mina or custom
	     - callback (function) #optional callback function that executes when the animation ends
	     = (Element) the current element
	    \*/
	    elproto.animate = function (attrs, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        if (attrs instanceof Animation) {
	            callback = attrs.callback;
	            easing = attrs.easing;
	            ms = easing.dur;
	            attrs = attrs.attr;
	        }
	        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
	            el = this;
	        for (var key in attrs) if (attrs[has](key)) {
	            if (el.equal) {
	                eq = el.equal(key, Str(attrs[key]));
	                from = eq.from;
	                to = eq.to;
	                f = eq.f;
	            } else {
	                from = +el.attr(key);
	                to = +attrs[key];
	            }
	            var len = is(from, "array") ? from.length : 1;
	            keys[key] = slice(fkeys.length, fkeys.length + len, f);
	            fkeys = fkeys.concat(from);
	            tkeys = tkeys.concat(to);
	        }
	        var now = mina.time(),
	            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
	                var attr = {};
	                for (var key in keys) if (keys[has](key)) {
	                    attr[key] = keys[key](val);
	                }
	                el.attr(attr);
	            }, easing);
	        el.anims[anim.id] = anim;
	        anim._attrs = attrs;
	        anim._callback = callback;
	        eve("snap.animcreated." + el.id, anim);
	        eve.once("mina.finish." + anim.id, function () {
	            delete el.anims[anim.id];
	            callback && callback.call(el);
	        });
	        eve.once("mina.stop." + anim.id, function () {
	            delete el.anims[anim.id];
	        });
	        return el;
	    };
	    var eldata = {};
	    /*\
	     * Element.data
	     [ method ]
	     **
	     * Adds or retrieves given value associated with given key. (Don’t confuse
	     * with `data-` attributes)
	     *
	     * See also @Element.removeData
	     - key (string) key to store data
	     - value (any) #optional value to store
	     = (object) @Element
	     * or, if value is not specified:
	     = (any) value
	     > Usage
	     | for (var i = 0, i < 5, i++) {
	     |     paper.circle(10 + 15 * i, 10, 10)
	     |          .attr({fill: "#000"})
	     |          .data("i", i)
	     |          .click(function () {
	     |             alert(this.data("i"));
	     |          });
	     | }
	    \*/
	    elproto.data = function (key, value) {
	        var data = eldata[this.id] = eldata[this.id] || {};
	        if (arguments.length == 0){
	            eve("snap.data.get." + this.id, this, data, null);
	            return data;
	        }
	        if (arguments.length == 1) {
	            if (Snap.is(key, "object")) {
	                for (var i in key) if (key[has](i)) {
	                    this.data(i, key[i]);
	                }
	                return this;
	            }
	            eve("snap.data.get." + this.id, this, data[key], key);
	            return data[key];
	        }
	        data[key] = value;
	        eve("snap.data.set." + this.id, this, value, key);
	        return this;
	    };
	    /*\
	     * Element.removeData
	     [ method ]
	     **
	     * Removes value associated with an element by given key.
	     * If key is not provided, removes all the data of the element.
	     - key (string) #optional key
	     = (object) @Element
	    \*/
	    elproto.removeData = function (key) {
	        if (key == null) {
	            eldata[this.id] = {};
	        } else {
	            eldata[this.id] && delete eldata[this.id][key];
	        }
	        return this;
	    };
	    /*\
	     * Element.outerSVG
	     [ method ]
	     **
	     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
	     *
	     * See also @Element.innerSVG
	     = (string) SVG code for the element
	    \*/
	    /*\
	     * Element.toString
	     [ method ]
	     **
	     * See @Element.outerSVG
	    \*/
	    elproto.outerSVG = elproto.toString = toString(1);
	    /*\
	     * Element.innerSVG
	     [ method ]
	     **
	     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
	     = (string) SVG code for the element
	    \*/
	    elproto.innerSVG = toString();
	    function toString(type) {
	        return function () {
	            var res = type ? "<" + this.type : "",
	                attr = this.node.attributes,
	                chld = this.node.childNodes;
	            if (type) {
	                for (var i = 0, ii = attr.length; i < ii; i++) {
	                    res += " " + attr[i].name + '="' +
	                            attr[i].value.replace(/"/g, '\\"') + '"';
	                }
	            }
	            if (chld.length) {
	                type && (res += ">");
	                for (i = 0, ii = chld.length; i < ii; i++) {
	                    if (chld[i].nodeType == 3) {
	                        res += chld[i].nodeValue;
	                    } else if (chld[i].nodeType == 1) {
	                        res += wrap(chld[i]).toString();
	                    }
	                }
	                type && (res += "</" + this.type + ">");
	            } else {
	                type && (res += "/>");
	            }
	            return res;
	        };
	    }
	    elproto.toDataURL = function () {
	        if (window && window.btoa) {
	            var bb = this.getBBox(),
	                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
	                x: +bb.x.toFixed(3),
	                y: +bb.y.toFixed(3),
	                width: +bb.width.toFixed(3),
	                height: +bb.height.toFixed(3),
	                contents: this.outerSVG()
	            });
	            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
	        }
	    };
	    /*\
	     * Fragment.select
	     [ method ]
	     **
	     * See @Element.select
	    \*/
	    Fragment.prototype.select = elproto.select;
	    /*\
	     * Fragment.selectAll
	     [ method ]
	     **
	     * See @Element.selectAll
	    \*/
	    Fragment.prototype.selectAll = elproto.selectAll;
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var objectToString = Object.prototype.toString,
	        Str = String,
	        math = Math,
	        E = "";
	    function Matrix(a, b, c, d, e, f) {
	        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
	            this.a = a.a;
	            this.b = a.b;
	            this.c = a.c;
	            this.d = a.d;
	            this.e = a.e;
	            this.f = a.f;
	            return;
	        }
	        if (a != null) {
	            this.a = +a;
	            this.b = +b;
	            this.c = +c;
	            this.d = +d;
	            this.e = +e;
	            this.f = +f;
	        } else {
	            this.a = 1;
	            this.b = 0;
	            this.c = 0;
	            this.d = 1;
	            this.e = 0;
	            this.f = 0;
	        }
	    }
	    (function (matrixproto) {
	        /*\
	         * Matrix.add
	         [ method ]
	         **
	         * Adds the given matrix to existing one
	         - a (number)
	         - b (number)
	         - c (number)
	         - d (number)
	         - e (number)
	         - f (number)
	         * or
	         - matrix (object) @Matrix
	        \*/
	        matrixproto.add = function (a, b, c, d, e, f) {
	            var out = [[], [], []],
	                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
	                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
	                x, y, z, res;

	            if (a && a instanceof Matrix) {
	                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
	            }

	            for (x = 0; x < 3; x++) {
	                for (y = 0; y < 3; y++) {
	                    res = 0;
	                    for (z = 0; z < 3; z++) {
	                        res += m[x][z] * matrix[z][y];
	                    }
	                    out[x][y] = res;
	                }
	            }
	            this.a = out[0][0];
	            this.b = out[1][0];
	            this.c = out[0][1];
	            this.d = out[1][1];
	            this.e = out[0][2];
	            this.f = out[1][2];
	            return this;
	        };
	        /*\
	         * Matrix.invert
	         [ method ]
	         **
	         * Returns an inverted version of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.invert = function () {
	            var me = this,
	                x = me.a * me.d - me.b * me.c;
	            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
	        };
	        /*\
	         * Matrix.clone
	         [ method ]
	         **
	         * Returns a copy of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.clone = function () {
	            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
	        };
	        /*\
	         * Matrix.translate
	         [ method ]
	         **
	         * Translate the matrix
	         - x (number) horizontal offset distance
	         - y (number) vertical offset distance
	        \*/
	        matrixproto.translate = function (x, y) {
	            return this.add(1, 0, 0, 1, x, y);
	        };
	        /*\
	         * Matrix.scale
	         [ method ]
	         **
	         * Scales the matrix
	         - x (number) amount to be scaled, with `1` resulting in no change
	         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
	         - cx (number) #optional horizontal origin point from which to scale
	         - cy (number) #optional vertical origin point from which to scale
	         * Default cx, cy is the middle point of the element.
	        \*/
	        matrixproto.scale = function (x, y, cx, cy) {
	            y == null && (y = x);
	            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
	            this.add(x, 0, 0, y, 0, 0);
	            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
	            return this;
	        };
	        /*\
	         * Matrix.rotate
	         [ method ]
	         **
	         * Rotates the matrix
	         - a (number) angle of rotation, in degrees
	         - x (number) horizontal origin point from which to rotate
	         - y (number) vertical origin point from which to rotate
	        \*/
	        matrixproto.rotate = function (a, x, y) {
	            a = Snap.rad(a);
	            x = x || 0;
	            y = y || 0;
	            var cos = +math.cos(a).toFixed(9),
	                sin = +math.sin(a).toFixed(9);
	            this.add(cos, sin, -sin, cos, x, y);
	            return this.add(1, 0, 0, 1, -x, -y);
	        };
	        /*\
	         * Matrix.x
	         [ method ]
	         **
	         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
	         - x (number)
	         - y (number)
	         = (number) x
	        \*/
	        matrixproto.x = function (x, y) {
	            return x * this.a + y * this.c + this.e;
	        };
	        /*\
	         * Matrix.y
	         [ method ]
	         **
	         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
	         - x (number)
	         - y (number)
	         = (number) y
	        \*/
	        matrixproto.y = function (x, y) {
	            return x * this.b + y * this.d + this.f;
	        };
	        matrixproto.get = function (i) {
	            return +this[Str.fromCharCode(97 + i)].toFixed(4);
	        };
	        matrixproto.toString = function () {
	            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
	        };
	        matrixproto.offset = function () {
	            return [this.e.toFixed(4), this.f.toFixed(4)];
	        };
	        function norm(a) {
	            return a[0] * a[0] + a[1] * a[1];
	        }
	        function normalize(a) {
	            var mag = math.sqrt(norm(a));
	            a[0] && (a[0] /= mag);
	            a[1] && (a[1] /= mag);
	        }
	        /*\
	         * Matrix.determinant
	         [ method ]
	         **
	         * Finds determinant of the given matrix.
	         = (number) determinant
	        \*/
	        matrixproto.determinant = function () {
	            return this.a * this.d - this.b * this.c;
	        };
	        /*\
	         * Matrix.split
	         [ method ]
	         **
	         * Splits matrix into primitive transformations
	         = (object) in format:
	         o dx (number) translation by x
	         o dy (number) translation by y
	         o scalex (number) scale by x
	         o scaley (number) scale by y
	         o shear (number) shear
	         o rotate (number) rotation in deg
	         o isSimple (boolean) could it be represented via simple transformations
	        \*/
	        matrixproto.split = function () {
	            var out = {};
	            // translation
	            out.dx = this.e;
	            out.dy = this.f;

	            // scale and shear
	            var row = [[this.a, this.c], [this.b, this.d]];
	            out.scalex = math.sqrt(norm(row[0]));
	            normalize(row[0]);

	            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
	            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

	            out.scaley = math.sqrt(norm(row[1]));
	            normalize(row[1]);
	            out.shear /= out.scaley;

	            if (this.determinant() < 0) {
	                out.scalex = -out.scalex;
	            }

	            // rotation
	            var sin = -row[0][1],
	                cos = row[1][1];
	            if (cos < 0) {
	                out.rotate = Snap.deg(math.acos(cos));
	                if (sin < 0) {
	                    out.rotate = 360 - out.rotate;
	                }
	            } else {
	                out.rotate = Snap.deg(math.asin(sin));
	            }

	            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
	            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
	            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
	            return out;
	        };
	        /*\
	         * Matrix.toTransformString
	         [ method ]
	         **
	         * Returns transform string that represents given matrix
	         = (string) transform string
	        \*/
	        matrixproto.toTransformString = function (shorter) {
	            var s = shorter || this.split();
	            if (!+s.shear.toFixed(9)) {
	                s.scalex = +s.scalex.toFixed(4);
	                s.scaley = +s.scaley.toFixed(4);
	                s.rotate = +s.rotate.toFixed(4);
	                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) +
	                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
	                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
	            } else {
	                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
	            }
	        };
	    })(Matrix.prototype);
	    /*\
	     * Snap.Matrix
	     [ method ]
	     **
	     * Matrix constructor, extend on your own risk.
	     * To create matrices use @Snap.matrix.
	    \*/
	    Snap.Matrix = Matrix;
	    /*\
	     * Snap.matrix
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns a matrix based on the given parameters
	     - a (number)
	     - b (number)
	     - c (number)
	     - d (number)
	     - e (number)
	     - f (number)
	     * or
	     - svgMatrix (SVGMatrix)
	     = (object) @Matrix
	    \*/
	    Snap.matrix = function (a, b, c, d, e, f) {
	        return new Matrix(a, b, c, d, e, f);
	    };
	});
	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var has = "hasOwnProperty",
	        make = Snap._.make,
	        wrap = Snap._.wrap,
	        is = Snap.is,
	        getSomeDefs = Snap._.getSomeDefs,
	        reURLValue = /^url\(#?([^)]+)\)$/,
	        $ = Snap._.$,
	        URL = Snap.url,
	        Str = String,
	        separator = Snap._.separator,
	        E = "";
	    // Attributes event handlers
	    eve.on("snap.util.attr.mask", function (value) {
	        if (value instanceof Element || value instanceof Fragment) {
	            eve.stop();
	            if (value instanceof Fragment && value.node.childNodes.length == 1) {
	                value = value.node.firstChild;
	                getSomeDefs(this).appendChild(value);
	                value = wrap(value);
	            }
	            if (value.type == "mask") {
	                var mask = value;
	            } else {
	                mask = make("mask", getSomeDefs(this));
	                mask.node.appendChild(value.node);
	            }
	            !mask.node.id && $(mask.node, {
	                id: mask.id
	            });
	            $(this.node, {
	                mask: URL(mask.id)
	            });
	        }
	    });
	    (function (clipIt) {
	        eve.on("snap.util.attr.clip", clipIt);
	        eve.on("snap.util.attr.clip-path", clipIt);
	        eve.on("snap.util.attr.clipPath", clipIt);
	    }(function (value) {
	        if (value instanceof Element || value instanceof Fragment) {
	            eve.stop();
	            if (value.type == "clipPath") {
	                var clip = value;
	            } else {
	                clip = make("clipPath", getSomeDefs(this));
	                clip.node.appendChild(value.node);
	                !clip.node.id && $(clip.node, {
	                    id: clip.id
	                });
	            }
	            $(this.node, {
	                "clip-path": URL(clip.node.id || clip.id)
	            });
	        }
	    }));
	    function fillStroke(name) {
	        return function (value) {
	            eve.stop();
	            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
	                (value.node.firstChild.tagName == "radialGradient" ||
	                value.node.firstChild.tagName == "linearGradient" ||
	                value.node.firstChild.tagName == "pattern")) {
	                value = value.node.firstChild;
	                getSomeDefs(this).appendChild(value);
	                value = wrap(value);
	            }
	            if (value instanceof Element) {
	                if (value.type == "radialGradient" || value.type == "linearGradient"
	                   || value.type == "pattern") {
	                    if (!value.node.id) {
	                        $(value.node, {
	                            id: value.id
	                        });
	                    }
	                    var fill = URL(value.node.id);
	                } else {
	                    fill = value.attr(name);
	                }
	            } else {
	                fill = Snap.color(value);
	                if (fill.error) {
	                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
	                    if (grad) {
	                        if (!grad.node.id) {
	                            $(grad.node, {
	                                id: grad.id
	                            });
	                        }
	                        fill = URL(grad.node.id);
	                    } else {
	                        fill = value;
	                    }
	                } else {
	                    fill = Str(fill);
	                }
	            }
	            var attrs = {};
	            attrs[name] = fill;
	            $(this.node, attrs);
	            this.node.style[name] = E;
	        };
	    }
	    eve.on("snap.util.attr.fill", fillStroke("fill"));
	    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
	    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
	    eve.on("snap.util.grad.parse", function parseGrad(string) {
	        string = Str(string);
	        var tokens = string.match(gradrg);
	        if (!tokens) {
	            return null;
	        }
	        var type = tokens[1],
	            params = tokens[2],
	            stops = tokens[3];
	        params = params.split(/\s*,\s*/).map(function (el) {
	            return +el == el ? +el : el;
	        });
	        if (params.length == 1 && params[0] == 0) {
	            params = [];
	        }
	        stops = stops.split("-");
	        stops = stops.map(function (el) {
	            el = el.split(":");
	            var out = {
	                color: el[0]
	            };
	            if (el[1]) {
	                out.offset = parseFloat(el[1]);
	            }
	            return out;
	        });
	        return {
	            type: type,
	            params: params,
	            stops: stops
	        };
	    });

	    eve.on("snap.util.attr.d", function (value) {
	        eve.stop();
	        if (is(value, "array") && is(value[0], "array")) {
	            value = Snap.path.toString.call(value);
	        }
	        value = Str(value);
	        if (value.match(/[ruo]/i)) {
	            value = Snap.path.toAbsolute(value);
	        }
	        $(this.node, {d: value});
	    })(-1);
	    eve.on("snap.util.attr.#text", function (value) {
	        eve.stop();
	        value = Str(value);
	        var txt = glob.doc.createTextNode(value);
	        while (this.node.firstChild) {
	            this.node.removeChild(this.node.firstChild);
	        }
	        this.node.appendChild(txt);
	    })(-1);
	    eve.on("snap.util.attr.path", function (value) {
	        eve.stop();
	        this.attr({d: value});
	    })(-1);
	    eve.on("snap.util.attr.class", function (value) {
	        eve.stop();
	        this.node.className.baseVal = value;
	    })(-1);
	    eve.on("snap.util.attr.viewBox", function (value) {
	        var vb;
	        if (is(value, "object") && "x" in value) {
	            vb = [value.x, value.y, value.width, value.height].join(" ");
	        } else if (is(value, "array")) {
	            vb = value.join(" ");
	        } else {
	            vb = value;
	        }
	        $(this.node, {
	            viewBox: vb
	        });
	        eve.stop();
	    })(-1);
	    eve.on("snap.util.attr.transform", function (value) {
	        this.transform(value);
	        eve.stop();
	    })(-1);
	    eve.on("snap.util.attr.r", function (value) {
	        if (this.type == "rect") {
	            eve.stop();
	            $(this.node, {
	                rx: value,
	                ry: value
	            });
	        }
	    })(-1);
	    eve.on("snap.util.attr.textpath", function (value) {
	        eve.stop();
	        if (this.type == "text") {
	            var id, tp, node;
	            if (!value && this.textPath) {
	                tp = this.textPath;
	                while (tp.node.firstChild) {
	                    this.node.appendChild(tp.node.firstChild);
	                }
	                tp.remove();
	                delete this.textPath;
	                return;
	            }
	            if (is(value, "string")) {
	                var defs = getSomeDefs(this),
	                    path = wrap(defs.parentNode).path(value);
	                defs.appendChild(path.node);
	                id = path.id;
	                path.attr({id: id});
	            } else {
	                value = wrap(value);
	                if (value instanceof Element) {
	                    id = value.attr("id");
	                    if (!id) {
	                        id = value.id;
	                        value.attr({id: id});
	                    }
	                }
	            }
	            if (id) {
	                tp = this.textPath;
	                node = this.node;
	                if (tp) {
	                    tp.attr({"xlink:href": "#" + id});
	                } else {
	                    tp = $("textPath", {
	                        "xlink:href": "#" + id
	                    });
	                    while (node.firstChild) {
	                        tp.appendChild(node.firstChild);
	                    }
	                    node.appendChild(tp);
	                    this.textPath = wrap(tp);
	                }
	            }
	        }
	    })(-1);
	    eve.on("snap.util.attr.text", function (value) {
	        if (this.type == "text") {
	            var i = 0,
	                node = this.node,
	                tuner = function (chunk) {
	                    var out = $("tspan");
	                    if (is(chunk, "array")) {
	                        for (var i = 0; i < chunk.length; i++) {
	                            out.appendChild(tuner(chunk[i]));
	                        }
	                    } else {
	                        out.appendChild(glob.doc.createTextNode(chunk));
	                    }
	                    out.normalize && out.normalize();
	                    return out;
	                };
	            while (node.firstChild) {
	                node.removeChild(node.firstChild);
	            }
	            var tuned = tuner(value);
	            while (tuned.firstChild) {
	                node.appendChild(tuned.firstChild);
	            }
	        }
	        eve.stop();
	    })(-1);
	    function setFontSize(value) {
	        eve.stop();
	        if (value == +value) {
	            value += "px";
	        }
	        this.node.style.fontSize = value;
	    }
	    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
	    eve.on("snap.util.attr.font-size", setFontSize)(-1);


	    eve.on("snap.util.getattr.transform", function () {
	        eve.stop();
	        return this.transform();
	    })(-1);
	    eve.on("snap.util.getattr.textpath", function () {
	        eve.stop();
	        return this.textPath;
	    })(-1);
	    // Markers
	    (function () {
	        function getter(end) {
	            return function () {
	                eve.stop();
	                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
	                if (style == "none") {
	                    return style;
	                } else {
	                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
	                }
	            };
	        }
	        function setter(end) {
	            return function (value) {
	                eve.stop();
	                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
	                if (value == "" || !value) {
	                    this.node.style[name] = "none";
	                    return;
	                }
	                if (value.type == "marker") {
	                    var id = value.node.id;
	                    if (!id) {
	                        $(value.node, {id: value.id});
	                    }
	                    this.node.style[name] = URL(id);
	                    return;
	                }
	            };
	        }
	        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
	        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
	        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
	        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
	        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
	        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
	        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
	        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
	        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
	        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
	        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
	        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
	    }());
	    eve.on("snap.util.getattr.r", function () {
	        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
	            eve.stop();
	            return $(this.node, "rx");
	        }
	    })(-1);
	    function textExtract(node) {
	        var out = [];
	        var children = node.childNodes;
	        for (var i = 0, ii = children.length; i < ii; i++) {
	            var chi = children[i];
	            if (chi.nodeType == 3) {
	                out.push(chi.nodeValue);
	            }
	            if (chi.tagName == "tspan") {
	                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
	                    out.push(chi.firstChild.nodeValue);
	                } else {
	                    out.push(textExtract(chi));
	                }
	            }
	        }
	        return out;
	    }
	    eve.on("snap.util.getattr.text", function () {
	        if (this.type == "text" || this.type == "tspan") {
	            eve.stop();
	            var out = textExtract(this.node);
	            return out.length == 1 ? out[0] : out;
	        }
	    })(-1);
	    eve.on("snap.util.getattr.#text", function () {
	        return this.node.textContent;
	    })(-1);
	    eve.on("snap.util.getattr.viewBox", function () {
	        eve.stop();
	        var vb = $(this.node, "viewBox");
	        if (vb) {
	            vb = vb.split(separator);
	            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
	        } else {
	            return;
	        }
	    })(-1);
	    eve.on("snap.util.getattr.points", function () {
	        var p = $(this.node, "points");
	        eve.stop();
	        if (p) {
	            return p.split(separator);
	        } else {
	            return;
	        }
	    })(-1);
	    eve.on("snap.util.getattr.path", function () {
	        var p = $(this.node, "d");
	        eve.stop();
	        return p;
	    })(-1);
	    eve.on("snap.util.getattr.class", function () {
	        return this.node.className.baseVal;
	    })(-1);
	    function getFontSize() {
	        eve.stop();
	        return this.node.style.fontSize;
	    }
	    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
	    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
	});

	// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var rgNotSpace = /\S+/g,
	        rgBadSpace = /[\t\r\n\f]/g,
	        rgTrim = /(^\s+|\s+$)/g,
	        Str = String,
	        elproto = Element.prototype;
	    /*\
	     * Element.addClass
	     [ method ]
	     **
	     * Adds given class name or list of class names to the element.
	     - value (string) class name or space separated list of class names
	     **
	     = (Element) original element.
	    \*/
	    elproto.addClass = function (value) {
	        var classes = Str(value || "").match(rgNotSpace) || [],
	            elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [],
	            j,
	            pos,
	            clazz,
	            finalValue;

	        if (classes.length) {
	            j = 0;
	            while ((clazz = classes[j++])) {
	                pos = curClasses.indexOf(clazz);
	                if (!~pos) {
	                    curClasses.push(clazz);
	                }
	            }

	            finalValue = curClasses.join(" ");
	            if (className != finalValue) {
	                elem.className.baseVal = finalValue;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.removeClass
	     [ method ]
	     **
	     * Removes given class name or list of class names from the element.
	     - value (string) class name or space separated list of class names
	     **
	     = (Element) original element.
	    \*/
	    elproto.removeClass = function (value) {
	        var classes = Str(value || "").match(rgNotSpace) || [],
	            elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [],
	            j,
	            pos,
	            clazz,
	            finalValue;
	        if (curClasses.length) {
	            j = 0;
	            while ((clazz = classes[j++])) {
	                pos = curClasses.indexOf(clazz);
	                if (~pos) {
	                    curClasses.splice(pos, 1);
	                }
	            }

	            finalValue = curClasses.join(" ");
	            if (className != finalValue) {
	                elem.className.baseVal = finalValue;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.hasClass
	     [ method ]
	     **
	     * Checks if the element has a given class name in the list of class names applied to it.
	     - value (string) class name
	     **
	     = (boolean) `true` if the element has given class
	    \*/
	    elproto.hasClass = function (value) {
	        var elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [];
	        return !!~curClasses.indexOf(value);
	    };
	    /*\
	     * Element.toggleClass
	     [ method ]
	     **
	     * Add or remove one or more classes from the element, depending on either
	     * the class’s presence or the value of the `flag` argument.
	     - value (string) class name or space separated list of class names
	     - flag (boolean) value to determine whether the class should be added or removed
	     **
	     = (Element) original element.
	    \*/
	    elproto.toggleClass = function (value, flag) {
	        if (flag != null) {
	            if (flag) {
	                return this.addClass(value);
	            } else {
	                return this.removeClass(value);
	            }
	        }
	        var classes = (value || "").match(rgNotSpace) || [],
	            elem = this.node,
	            className = elem.className.baseVal,
	            curClasses = className.match(rgNotSpace) || [],
	            j,
	            pos,
	            clazz,
	            finalValue;
	        j = 0;
	        while ((clazz = classes[j++])) {
	            pos = curClasses.indexOf(clazz);
	            if (~pos) {
	                curClasses.splice(pos, 1);
	            } else {
	                curClasses.push(clazz);
	            }
	        }

	        finalValue = curClasses.join(" ");
	        if (className != finalValue) {
	            elem.className.baseVal = finalValue;
	        }
	        return this;
	    };
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var operators = {
	            "+": function (x, y) {
	                    return x + y;
	                },
	            "-": function (x, y) {
	                    return x - y;
	                },
	            "/": function (x, y) {
	                    return x / y;
	                },
	            "*": function (x, y) {
	                    return x * y;
	                }
	        },
	        Str = String,
	        reUnit = /[a-z]+$/i,
	        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
	    function getNumber(val) {
	        return val;
	    }
	    function getUnit(unit) {
	        return function (val) {
	            return +val.toFixed(3) + unit;
	        };
	    }
	    eve.on("snap.util.attr", function (val) {
	        var plus = Str(val).match(reAddon);
	        if (plus) {
	            var evnt = eve.nt(),
	                name = evnt.substring(evnt.lastIndexOf(".") + 1),
	                a = this.attr(name),
	                atr = {};
	            eve.stop();
	            var unit = plus[3] || "",
	                aUnit = a.match(reUnit),
	                op = operators[plus[1]];
	            if (aUnit && aUnit == unit) {
	                val = op(parseFloat(a), +plus[2]);
	            } else {
	                a = this.asPX(name);
	                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
	            }
	            if (isNaN(a) || isNaN(val)) {
	                return;
	            }
	            atr[name] = val;
	            this.attr(atr);
	        }
	    })(-10);
	    eve.on("snap.util.equal", function (name, b) {
	        var A, B, a = Str(this.attr(name) || ""),
	            el = this,
	            bplus = Str(b).match(reAddon);
	        if (bplus) {
	            eve.stop();
	            var unit = bplus[3] || "",
	                aUnit = a.match(reUnit),
	                op = operators[bplus[1]];
	            if (aUnit && aUnit == unit) {
	                return {
	                    from: parseFloat(a),
	                    to: op(parseFloat(a), +bplus[2]),
	                    f: getUnit(aUnit)
	                };
	            } else {
	                a = this.asPX(name);
	                return {
	                    from: a,
	                    to: op(a, this.asPX(name, bplus[2] + unit)),
	                    f: getNumber
	                };
	            }
	        }
	    })(-10);
	});
	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var proto = Paper.prototype,
	        is = Snap.is;
	    /*\
	     * Paper.rect
	     [ method ]
	     *
	     * Draws a rectangle
	     **
	     - x (number) x coordinate of the top left corner
	     - y (number) y coordinate of the top left corner
	     - width (number) width
	     - height (number) height
	     - rx (number) #optional horizontal radius for rounded corners, default is 0
	     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
	     = (object) the `rect` element
	     **
	     > Usage
	     | // regular rectangle
	     | var c = paper.rect(10, 10, 50, 50);
	     | // rectangle with rounded corners
	     | var c = paper.rect(40, 40, 50, 50, 10);
	    \*/
	    proto.rect = function (x, y, w, h, rx, ry) {
	        var attr;
	        if (ry == null) {
	            ry = rx;
	        }
	        if (is(x, "object") && x == "[object Object]") {
	            attr = x;
	        } else if (x != null) {
	            attr = {
	                x: x,
	                y: y,
	                width: w,
	                height: h
	            };
	            if (rx != null) {
	                attr.rx = rx;
	                attr.ry = ry;
	            }
	        }
	        return this.el("rect", attr);
	    };
	    /*\
	     * Paper.circle
	     [ method ]
	     **
	     * Draws a circle
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - r (number) radius
	     = (object) the `circle` element
	     **
	     > Usage
	     | var c = paper.circle(50, 50, 40);
	    \*/
	    proto.circle = function (cx, cy, r) {
	        var attr;
	        if (is(cx, "object") && cx == "[object Object]") {
	            attr = cx;
	        } else if (cx != null) {
	            attr = {
	                cx: cx,
	                cy: cy,
	                r: r
	            };
	        }
	        return this.el("circle", attr);
	    };

	    var preload = (function () {
	        function onerror() {
	            this.parentNode.removeChild(this);
	        }
	        return function (src, f) {
	            var img = glob.doc.createElement("img"),
	                body = glob.doc.body;
	            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
	            img.onload = function () {
	                f.call(img);
	                img.onload = img.onerror = null;
	                body.removeChild(img);
	            };
	            img.onerror = onerror;
	            body.appendChild(img);
	            img.src = src;
	        };
	    }());

	    /*\
	     * Paper.image
	     [ method ]
	     **
	     * Places an image on the surface
	     **
	     - src (string) URI of the source image
	     - x (number) x offset position
	     - y (number) y offset position
	     - width (number) width of the image
	     - height (number) height of the image
	     = (object) the `image` element
	     * or
	     = (object) Snap element object with type `image`
	     **
	     > Usage
	     | var c = paper.image("apple.png", 10, 10, 80, 80);
	    \*/
	    proto.image = function (src, x, y, width, height) {
	        var el = this.el("image");
	        if (is(src, "object") && "src" in src) {
	            el.attr(src);
	        } else if (src != null) {
	            var set = {
	                "xlink:href": src,
	                preserveAspectRatio: "none"
	            };
	            if (x != null && y != null) {
	                set.x = x;
	                set.y = y;
	            }
	            if (width != null && height != null) {
	                set.width = width;
	                set.height = height;
	            } else {
	                preload(src, function () {
	                    Snap._.$(el.node, {
	                        width: this.offsetWidth,
	                        height: this.offsetHeight
	                    });
	                });
	            }
	            Snap._.$(el.node, set);
	        }
	        return el;
	    };
	    /*\
	     * Paper.ellipse
	     [ method ]
	     **
	     * Draws an ellipse
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - rx (number) horizontal radius
	     - ry (number) vertical radius
	     = (object) the `ellipse` element
	     **
	     > Usage
	     | var c = paper.ellipse(50, 50, 40, 20);
	    \*/
	    proto.ellipse = function (cx, cy, rx, ry) {
	        var attr;
	        if (is(cx, "object") && cx == "[object Object]") {
	            attr = cx;
	        } else if (cx != null) {
	            attr ={
	                cx: cx,
	                cy: cy,
	                rx: rx,
	                ry: ry
	            };
	        }
	        return this.el("ellipse", attr);
	    };
	    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
	    /*\
	     * Paper.path
	     [ method ]
	     **
	     * Creates a `<path>` element using the given string as the path's definition
	     - pathString (string) #optional path string in SVG format
	     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
	     | "M10,20L30,40"
	     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
	     *
	     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
	     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
	     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
	     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
	     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
	     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
	     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
	     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
	     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
	     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
	     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
	     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
	     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
	     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
	     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
	     > Usage
	     | var c = paper.path("M10 10L90 90");
	     | // draw a diagonal line:
	     | // move to 10,10, line to 90,90
	    \*/
	    proto.path = function (d) {
	        var attr;
	        if (is(d, "object") && !is(d, "array")) {
	            attr = d;
	        } else if (d) {
	            attr = {d: d};
	        }
	        return this.el("path", attr);
	    };
	    /*\
	     * Paper.g
	     [ method ]
	     **
	     * Creates a group element
	     **
	     - varargs (…) #optional elements to nest within the group
	     = (object) the `g` element
	     **
	     > Usage
	     | var c1 = paper.circle(),
	     |     c2 = paper.rect(),
	     |     g = paper.g(c2, c1); // note that the order of elements is different
	     * or
	     | var c1 = paper.circle(),
	     |     c2 = paper.rect(),
	     |     g = paper.g();
	     | g.add(c2, c1);
	    \*/
	    /*\
	     * Paper.group
	     [ method ]
	     **
	     * See @Paper.g
	    \*/
	    proto.group = proto.g = function (first) {
	        var attr,
	            el = this.el("g");
	        if (arguments.length == 1 && first && !first.type) {
	            el.attr(first);
	        } else if (arguments.length) {
	            el.add(Array.prototype.slice.call(arguments, 0));
	        }
	        return el;
	    };
	    /*\
	     * Paper.svg
	     [ method ]
	     **
	     * Creates a nested SVG element.
	     - x (number) @optional X of the element
	     - y (number) @optional Y of the element
	     - width (number) @optional width of the element
	     - height (number) @optional height of the element
	     - vbx (number) @optional viewbox X
	     - vby (number) @optional viewbox Y
	     - vbw (number) @optional viewbox width
	     - vbh (number) @optional viewbox height
	     **
	     = (object) the `svg` element
	     **
	    \*/
	    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
	        var attrs = {};
	        if (is(x, "object") && y == null) {
	            attrs = x;
	        } else {
	            if (x != null) {
	                attrs.x = x;
	            }
	            if (y != null) {
	                attrs.y = y;
	            }
	            if (width != null) {
	                attrs.width = width;
	            }
	            if (height != null) {
	                attrs.height = height;
	            }
	            if (vbx != null && vby != null && vbw != null && vbh != null) {
	                attrs.viewBox = [vbx, vby, vbw, vbh];
	            }
	        }
	        return this.el("svg", attrs);
	    };
	    /*\
	     * Paper.mask
	     [ method ]
	     **
	     * Equivalent in behaviour to @Paper.g, except it’s a mask.
	     **
	     = (object) the `mask` element
	     **
	    \*/
	    proto.mask = function (first) {
	        var attr,
	            el = this.el("mask");
	        if (arguments.length == 1 && first && !first.type) {
	            el.attr(first);
	        } else if (arguments.length) {
	            el.add(Array.prototype.slice.call(arguments, 0));
	        }
	        return el;
	    };
	    /*\
	     * Paper.ptrn
	     [ method ]
	     **
	     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
	     - x (number) @optional X of the element
	     - y (number) @optional Y of the element
	     - width (number) @optional width of the element
	     - height (number) @optional height of the element
	     - vbx (number) @optional viewbox X
	     - vby (number) @optional viewbox Y
	     - vbw (number) @optional viewbox width
	     - vbh (number) @optional viewbox height
	     **
	     = (object) the `pattern` element
	     **
	    \*/
	    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
	        if (is(x, "object")) {
	            var attr = x;
	        } else {
	            attr = {patternUnits: "userSpaceOnUse"};
	            if (x) {
	                attr.x = x;
	            }
	            if (y) {
	                attr.y = y;
	            }
	            if (width != null) {
	                attr.width = width;
	            }
	            if (height != null) {
	                attr.height = height;
	            }
	            if (vx != null && vy != null && vw != null && vh != null) {
	                attr.viewBox = [vx, vy, vw, vh];
	            } else {
	                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
	            }
	        }
	        return this.el("pattern", attr);
	    };
	    /*\
	     * Paper.use
	     [ method ]
	     **
	     * Creates a <use> element.
	     - id (string) @optional id of element to link
	     * or
	     - id (Element) @optional element to link
	     **
	     = (object) the `use` element
	     **
	    \*/
	    proto.use = function (id) {
	        if (id != null) {
	            if (id instanceof Element) {
	                if (!id.attr("id")) {
	                    id.attr({id: Snap._.id(id)});
	                }
	                id = id.attr("id");
	            }
	            if (String(id).charAt() == "#") {
	                id = id.substring(1);
	            }
	            return this.el("use", {"xlink:href": "#" + id});
	        } else {
	            return Element.prototype.use.call(this);
	        }
	    };
	    /*\
	     * Paper.symbol
	     [ method ]
	     **
	     * Creates a <symbol> element.
	     - vbx (number) @optional viewbox X
	     - vby (number) @optional viewbox Y
	     - vbw (number) @optional viewbox width
	     - vbh (number) @optional viewbox height
	     = (object) the `symbol` element
	     **
	    \*/
	    proto.symbol = function (vx, vy, vw, vh) {
	        var attr = {};
	        if (vx != null && vy != null && vw != null && vh != null) {
	            attr.viewBox = [vx, vy, vw, vh];
	        }

	        return this.el("symbol", attr);
	    };
	    /*\
	     * Paper.text
	     [ method ]
	     **
	     * Draws a text string
	     **
	     - x (number) x coordinate position
	     - y (number) y coordinate position
	     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
	     = (object) the `text` element
	     **
	     > Usage
	     | var t1 = paper.text(50, 50, "Snap");
	     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
	     | // Text path usage
	     | t1.attr({textpath: "M10,10L100,100"});
	     | // or
	     | var pth = paper.path("M10,10L100,100");
	     | t1.attr({textpath: pth});
	    \*/
	    proto.text = function (x, y, text) {
	        var attr = {};
	        if (is(x, "object")) {
	            attr = x;
	        } else if (x != null) {
	            attr = {
	                x: x,
	                y: y,
	                text: text || ""
	            };
	        }
	        return this.el("text", attr);
	    };
	    /*\
	     * Paper.line
	     [ method ]
	     **
	     * Draws a line
	     **
	     - x1 (number) x coordinate position of the start
	     - y1 (number) y coordinate position of the start
	     - x2 (number) x coordinate position of the end
	     - y2 (number) y coordinate position of the end
	     = (object) the `line` element
	     **
	     > Usage
	     | var t1 = paper.line(50, 50, 100, 100);
	    \*/
	    proto.line = function (x1, y1, x2, y2) {
	        var attr = {};
	        if (is(x1, "object")) {
	            attr = x1;
	        } else if (x1 != null) {
	            attr = {
	                x1: x1,
	                x2: x2,
	                y1: y1,
	                y2: y2
	            };
	        }
	        return this.el("line", attr);
	    };
	    /*\
	     * Paper.polyline
	     [ method ]
	     **
	     * Draws a polyline
	     **
	     - points (array) array of points
	     * or
	     - varargs (…) points
	     = (object) the `polyline` element
	     **
	     > Usage
	     | var p1 = paper.polyline([10, 10, 100, 100]);
	     | var p2 = paper.polyline(10, 10, 100, 100);
	    \*/
	    proto.polyline = function (points) {
	        if (arguments.length > 1) {
	            points = Array.prototype.slice.call(arguments, 0);
	        }
	        var attr = {};
	        if (is(points, "object") && !is(points, "array")) {
	            attr = points;
	        } else if (points != null) {
	            attr = {points: points};
	        }
	        return this.el("polyline", attr);
	    };
	    /*\
	     * Paper.polygon
	     [ method ]
	     **
	     * Draws a polygon. See @Paper.polyline
	    \*/
	    proto.polygon = function (points) {
	        if (arguments.length > 1) {
	            points = Array.prototype.slice.call(arguments, 0);
	        }
	        var attr = {};
	        if (is(points, "object") && !is(points, "array")) {
	            attr = points;
	        } else if (points != null) {
	            attr = {points: points};
	        }
	        return this.el("polygon", attr);
	    };
	    // gradients
	    (function () {
	        var $ = Snap._.$;
	        // gradients' helpers
	        function Gstops() {
	            return this.selectAll("stop");
	        }
	        function GaddStop(color, offset) {
	            var stop = $("stop"),
	                attr = {
	                    offset: +offset + "%"
	                };
	            color = Snap.color(color);
	            attr["stop-color"] = color.hex;
	            if (color.opacity < 1) {
	                attr["stop-opacity"] = color.opacity;
	            }
	            $(stop, attr);
	            this.node.appendChild(stop);
	            return this;
	        }
	        function GgetBBox() {
	            if (this.type == "linearGradient") {
	                var x1 = $(this.node, "x1") || 0,
	                    x2 = $(this.node, "x2") || 1,
	                    y1 = $(this.node, "y1") || 0,
	                    y2 = $(this.node, "y2") || 0;
	                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
	            } else {
	                var cx = this.node.cx || .5,
	                    cy = this.node.cy || .5,
	                    r = this.node.r || 0;
	                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
	            }
	        }
	        function gradient(defs, str) {
	            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
	                el;
	            if (!grad) {
	                return null;
	            }
	            grad.params.unshift(defs);
	            if (grad.type.toLowerCase() == "l") {
	                el = gradientLinear.apply(0, grad.params);
	            } else {
	                el = gradientRadial.apply(0, grad.params);
	            }
	            if (grad.type != grad.type.toLowerCase()) {
	                $(el.node, {
	                    gradientUnits: "userSpaceOnUse"
	                });
	            }
	            var stops = grad.stops,
	                len = stops.length,
	                start = 0,
	                j = 0;
	            function seed(i, end) {
	                var step = (end - start) / (i - j);
	                for (var k = j; k < i; k++) {
	                    stops[k].offset = +(+start + step * (k - j)).toFixed(2);
	                }
	                j = i;
	                start = end;
	            }
	            len--;
	            for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
	                seed(i, stops[i].offset);
	            }
	            stops[len].offset = stops[len].offset || 100;
	            seed(len, stops[len].offset);
	            for (i = 0; i <= len; i++) {
	                var stop = stops[i];
	                el.addStop(stop.color, stop.offset);
	            }
	            return el;
	        }
	        function gradientLinear(defs, x1, y1, x2, y2) {
	            var el = Snap._.make("linearGradient", defs);
	            el.stops = Gstops;
	            el.addStop = GaddStop;
	            el.getBBox = GgetBBox;
	            if (x1 != null) {
	                $(el.node, {
	                    x1: x1,
	                    y1: y1,
	                    x2: x2,
	                    y2: y2
	                });
	            }
	            return el;
	        }
	        function gradientRadial(defs, cx, cy, r, fx, fy) {
	            var el = Snap._.make("radialGradient", defs);
	            el.stops = Gstops;
	            el.addStop = GaddStop;
	            el.getBBox = GgetBBox;
	            if (cx != null) {
	                $(el.node, {
	                    cx: cx,
	                    cy: cy,
	                    r: r
	                });
	            }
	            if (fx != null && fy != null) {
	                $(el.node, {
	                    fx: fx,
	                    fy: fy
	                });
	            }
	            return el;
	        }
	        /*\
	         * Paper.gradient
	         [ method ]
	         **
	         * Creates a gradient element
	         **
	         - gradient (string) gradient descriptor
	         > Gradient Descriptor
	         * The gradient descriptor is an expression formatted as
	         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
	         * either linear or radial.  The uppercase `L` or `R` letters
	         * indicate absolute coordinates offset from the SVG surface.
	         * Lowercase `l` or `r` letters indicate coordinates
	         * calculated relative to the element to which the gradient is
	         * applied.  Coordinates specify a linear gradient vector as
	         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
	         * `r` and optional `fx`, `fy` specifying a focal point away
	         * from the center of the circle. Specify `<colors>` as a list
	         * of dash-separated CSS color values.  Each color may be
	         * followed by a custom offset value, separated with a colon
	         * character.
	         > Examples
	         * Linear gradient, relative from top-left corner to bottom-right
	         * corner, from black through red to white:
	         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
	         * Linear gradient, absolute from (0, 0) to (100, 100), from black
	         * through red at 25% to white:
	         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
	         * Radial gradient, relative from the center of the element with radius
	         * half the width, from black to white:
	         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
	         * To apply the gradient:
	         | paper.circle(50, 50, 40).attr({
	         |     fill: g
	         | });
	         = (object) the `gradient` element
	        \*/
	        proto.gradient = function (str) {
	            return gradient(this.defs, str);
	        };
	        proto.gradientLinear = function (x1, y1, x2, y2) {
	            return gradientLinear(this.defs, x1, y1, x2, y2);
	        };
	        proto.gradientRadial = function (cx, cy, r, fx, fy) {
	            return gradientRadial(this.defs, cx, cy, r, fx, fy);
	        };
	        /*\
	         * Paper.toString
	         [ method ]
	         **
	         * Returns SVG code for the @Paper
	         = (string) SVG code for the @Paper
	        \*/
	        proto.toString = function () {
	            var doc = this.node.ownerDocument,
	                f = doc.createDocumentFragment(),
	                d = doc.createElement("div"),
	                svg = this.node.cloneNode(true),
	                res;
	            f.appendChild(d);
	            d.appendChild(svg);
	            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
	            res = d.innerHTML;
	            f.removeChild(f.firstChild);
	            return res;
	        };
	        /*\
	         * Paper.toDataURL
	         [ method ]
	         **
	         * Returns SVG code for the @Paper as Data URI string.
	         = (string) Data URI string
	        \*/
	        proto.toDataURL = function () {
	            if (window && window.btoa) {
	                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
	            }
	        };
	        /*\
	         * Paper.clear
	         [ method ]
	         **
	         * Removes all child nodes of the paper, except <defs>.
	        \*/
	        proto.clear = function () {
	            var node = this.node.firstChild,
	                next;
	            while (node) {
	                next = node.nextSibling;
	                if (node.tagName != "defs") {
	                    node.parentNode.removeChild(node);
	                } else {
	                    proto.clear.call({node: node});
	                }
	                node = next;
	            }
	        };
	    }());
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype,
	        is = Snap.is,
	        clone = Snap._.clone,
	        has = "hasOwnProperty",
	        p2s = /,?([a-z]),?/gi,
	        toFloat = parseFloat,
	        math = Math,
	        PI = math.PI,
	        mmin = math.min,
	        mmax = math.max,
	        pow = math.pow,
	        abs = math.abs;
	    function paths(ps) {
	        var p = paths.ps = paths.ps || {};
	        if (p[ps]) {
	            p[ps].sleep = 100;
	        } else {
	            p[ps] = {
	                sleep: 100
	            };
	        }
	        setTimeout(function () {
	            for (var key in p) if (p[has](key) && key != ps) {
	                p[key].sleep--;
	                !p[key].sleep && delete p[key];
	            }
	        });
	        return p[ps];
	    }
	    function box(x, y, width, height) {
	        if (x == null) {
	            x = y = width = height = 0;
	        }
	        if (y == null) {
	            y = x.y;
	            width = x.width;
	            height = x.height;
	            x = x.x;
	        }
	        return {
	            x: x,
	            y: y,
	            width: width,
	            w: width,
	            height: height,
	            h: height,
	            x2: x + width,
	            y2: y + height,
	            cx: x + width / 2,
	            cy: y + height / 2,
	            r1: math.min(width, height) / 2,
	            r2: math.max(width, height) / 2,
	            r0: math.sqrt(width * width + height * height) / 2,
	            path: rectPath(x, y, width, height),
	            vb: [x, y, width, height].join(" ")
	        };
	    }
	    function toString() {
	        return this.join(",").replace(p2s, "$1");
	    }
	    function pathClone(pathArray) {
	        var res = clone(pathArray);
	        res.toString = toString;
	        return res;
	    }
	    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
	        if (length == null) {
	            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
	        } else {
	            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
	                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
	        }
	    }
	    function getLengthFactory(istotal, subpath) {
	        function O(val) {
	            return +(+val).toFixed(3);
	        }
	        return Snap._.cacher(function (path, length, onlystart) {
	            if (path instanceof Element) {
	                path = path.attr("d");
	            }
	            path = path2curve(path);
	            var x, y, p, l, sp = "", subpaths = {}, point,
	                len = 0;
	            for (var i = 0, ii = path.length; i < ii; i++) {
	                p = path[i];
	                if (p[0] == "M") {
	                    x = +p[1];
	                    y = +p[2];
	                } else {
	                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                    if (len + l > length) {
	                        if (subpath && !subpaths.start) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            sp += [
	                                "C" + O(point.start.x),
	                                O(point.start.y),
	                                O(point.m.x),
	                                O(point.m.y),
	                                O(point.x),
	                                O(point.y)
	                            ];
	                            if (onlystart) {return sp;}
	                            subpaths.start = sp;
	                            sp = [
	                                "M" + O(point.x),
	                                O(point.y) + "C" + O(point.n.x),
	                                O(point.n.y),
	                                O(point.end.x),
	                                O(point.end.y),
	                                O(p[5]),
	                                O(p[6])
	                            ].join();
	                            len += l;
	                            x = +p[5];
	                            y = +p[6];
	                            continue;
	                        }
	                        if (!istotal && !subpath) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            return point;
	                        }
	                    }
	                    len += l;
	                    x = +p[5];
	                    y = +p[6];
	                }
	                sp += p.shift() + p;
	            }
	            subpaths.end = sp;
	            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
	            return point;
	        }, null, Snap._.clone);
	    }
	    var getTotalLength = getLengthFactory(1),
	        getPointAtLength = getLengthFactory(),
	        getSubpathsAtLength = getLengthFactory(0, 1);
	    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t,
	            t13 = pow(t1, 3),
	            t12 = pow(t1, 2),
	            t2 = t * t,
	            t3 = t2 * t,
	            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
	            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
	            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
	            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
	            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
	            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
	            ax = t1 * p1x + t * c1x,
	            ay = t1 * p1y + t * c1y,
	            cx = t1 * c2x + t * p2x,
	            cy = t1 * c2y + t * p2y,
	            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
	        // (mx > nx || my < ny) && (alpha += 180);
	        return {
	            x: x,
	            y: y,
	            m: {x: mx, y: my},
	            n: {x: nx, y: ny},
	            start: {x: ax, y: ay},
	            end: {x: cx, y: cy},
	            alpha: alpha
	        };
	    }
	    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	        if (!Snap.is(p1x, "array")) {
	            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
	        }
	        var bbox = curveDim.apply(null, p1x);
	        return box(
	            bbox.min.x,
	            bbox.min.y,
	            bbox.max.x - bbox.min.x,
	            bbox.max.y - bbox.min.y
	        );
	    }
	    function isPointInsideBBox(bbox, x, y) {
	        return  x >= bbox.x &&
	                x <= bbox.x + bbox.width &&
	                y >= bbox.y &&
	                y <= bbox.y + bbox.height;
	    }
	    function isBBoxIntersect(bbox1, bbox2) {
	        bbox1 = box(bbox1);
	        bbox2 = box(bbox2);
	        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
	            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
	            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
	            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
	            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
	            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
	            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
	            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
	            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
	                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
	            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
	                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
	    }
	    function base3(t, p1, p2, p3, p4) {
	        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
	            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
	        return t * t2 - 3 * p1 + 3 * p2;
	    }
	    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
	        if (z == null) {
	            z = 1;
	        }
	        z = z > 1 ? 1 : z < 0 ? 0 : z;
	        var z2 = z / 2,
	            n = 12,
	            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
	            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
	            sum = 0;
	        for (var i = 0; i < n; i++) {
	            var ct = z2 * Tvalues[i] + z2,
	                xbase = base3(ct, x1, x2, x3, x4),
	                ybase = base3(ct, y1, y2, y3, y4),
	                comb = xbase * xbase + ybase * ybase;
	            sum += Cvalues[i] * math.sqrt(comb);
	        }
	        return z2 * sum;
	    }
	    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
	        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
	            return;
	        }
	        var t = 1,
	            step = t / 2,
	            t2 = t - step,
	            l,
	            e = .01;
	        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        while (abs(l - ll) > e) {
	            step /= 2;
	            t2 += (l < ll ? 1 : -1) * step;
	            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        }
	        return t2;
	    }
	    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	        if (
	            mmax(x1, x2) < mmin(x3, x4) ||
	            mmin(x1, x2) > mmax(x3, x4) ||
	            mmax(y1, y2) < mmin(y3, y4) ||
	            mmin(y1, y2) > mmax(y3, y4)
	        ) {
	            return;
	        }
	        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
	            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
	            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

	        if (!denominator) {
	            return;
	        }
	        var px = nx / denominator,
	            py = ny / denominator,
	            px2 = +px.toFixed(2),
	            py2 = +py.toFixed(2);
	        if (
	            px2 < +mmin(x1, x2).toFixed(2) ||
	            px2 > +mmax(x1, x2).toFixed(2) ||
	            px2 < +mmin(x3, x4).toFixed(2) ||
	            px2 > +mmax(x3, x4).toFixed(2) ||
	            py2 < +mmin(y1, y2).toFixed(2) ||
	            py2 > +mmax(y1, y2).toFixed(2) ||
	            py2 < +mmin(y3, y4).toFixed(2) ||
	            py2 > +mmax(y3, y4).toFixed(2)
	        ) {
	            return;
	        }
	        return {x: px, y: py};
	    }
	    function inter(bez1, bez2) {
	        return interHelper(bez1, bez2);
	    }
	    function interCount(bez1, bez2) {
	        return interHelper(bez1, bez2, 1);
	    }
	    function interHelper(bez1, bez2, justCount) {
	        var bbox1 = bezierBBox(bez1),
	            bbox2 = bezierBBox(bez2);
	        if (!isBBoxIntersect(bbox1, bbox2)) {
	            return justCount ? 0 : [];
	        }
	        var l1 = bezlen.apply(0, bez1),
	            l2 = bezlen.apply(0, bez2),
	            n1 = ~~(l1 / 8),
	            n2 = ~~(l2 / 8),
	            dots1 = [],
	            dots2 = [],
	            xy = {},
	            res = justCount ? 0 : [];
	        for (var i = 0; i < n1 + 1; i++) {
	            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
	            dots1.push({x: p.x, y: p.y, t: i / n1});
	        }
	        for (i = 0; i < n2 + 1; i++) {
	            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
	            dots2.push({x: p.x, y: p.y, t: i / n2});
	        }
	        for (i = 0; i < n1; i++) {
	            for (var j = 0; j < n2; j++) {
	                var di = dots1[i],
	                    di1 = dots1[i + 1],
	                    dj = dots2[j],
	                    dj1 = dots2[j + 1],
	                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
	                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
	                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
	                if (is) {
	                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
	                        continue;
	                    }
	                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
	                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
	                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
	                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
	                        if (justCount) {
	                            res++;
	                        } else {
	                            res.push({
	                                x: is.x,
	                                y: is.y,
	                                t1: t1,
	                                t2: t2
	                            });
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    function pathIntersection(path1, path2) {
	        return interPathHelper(path1, path2);
	    }
	    function pathIntersectionNumber(path1, path2) {
	        return interPathHelper(path1, path2, 1);
	    }
	    function interPathHelper(path1, path2, justCount) {
	        path1 = path2curve(path1);
	        path2 = path2curve(path2);
	        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
	            res = justCount ? 0 : [];
	        for (var i = 0, ii = path1.length; i < ii; i++) {
	            var pi = path1[i];
	            if (pi[0] == "M") {
	                x1 = x1m = pi[1];
	                y1 = y1m = pi[2];
	            } else {
	                if (pi[0] == "C") {
	                    bez1 = [x1, y1].concat(pi.slice(1));
	                    x1 = bez1[6];
	                    y1 = bez1[7];
	                } else {
	                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
	                    x1 = x1m;
	                    y1 = y1m;
	                }
	                for (var j = 0, jj = path2.length; j < jj; j++) {
	                    var pj = path2[j];
	                    if (pj[0] == "M") {
	                        x2 = x2m = pj[1];
	                        y2 = y2m = pj[2];
	                    } else {
	                        if (pj[0] == "C") {
	                            bez2 = [x2, y2].concat(pj.slice(1));
	                            x2 = bez2[6];
	                            y2 = bez2[7];
	                        } else {
	                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
	                            x2 = x2m;
	                            y2 = y2m;
	                        }
	                        var intr = interHelper(bez1, bez2, justCount);
	                        if (justCount) {
	                            res += intr;
	                        } else {
	                            for (var k = 0, kk = intr.length; k < kk; k++) {
	                                intr[k].segment1 = i;
	                                intr[k].segment2 = j;
	                                intr[k].bez1 = bez1;
	                                intr[k].bez2 = bez2;
	                            }
	                            res = res.concat(intr);
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    function isPointInsidePath(path, x, y) {
	        var bbox = pathBBox(path);
	        return isPointInsideBBox(bbox, x, y) &&
	               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
	    }
	    function pathBBox(path) {
	        var pth = paths(path);
	        if (pth.bbox) {
	            return clone(pth.bbox);
	        }
	        if (!path) {
	            return box();
	        }
	        path = path2curve(path);
	        var x = 0,
	            y = 0,
	            X = [],
	            Y = [],
	            p;
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            p = path[i];
	            if (p[0] == "M") {
	                x = p[1];
	                y = p[2];
	                X.push(x);
	                Y.push(y);
	            } else {
	                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                X = X.concat(dim.min.x, dim.max.x);
	                Y = Y.concat(dim.min.y, dim.max.y);
	                x = p[5];
	                y = p[6];
	            }
	        }
	        var xmin = mmin.apply(0, X),
	            ymin = mmin.apply(0, Y),
	            xmax = mmax.apply(0, X),
	            ymax = mmax.apply(0, Y),
	            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
	        pth.bbox = clone(bb);
	        return bb;
	    }
	    function rectPath(x, y, w, h, r) {
	        if (r) {
	            return [
	                ["M", +x + (+r), y],
	                ["l", w - r * 2, 0],
	                ["a", r, r, 0, 0, 1, r, r],
	                ["l", 0, h - r * 2],
	                ["a", r, r, 0, 0, 1, -r, r],
	                ["l", r * 2 - w, 0],
	                ["a", r, r, 0, 0, 1, -r, -r],
	                ["l", 0, r * 2 - h],
	                ["a", r, r, 0, 0, 1, r, -r],
	                ["z"]
	            ];
	        }
	        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
	        res.toString = toString;
	        return res;
	    }
	    function ellipsePath(x, y, rx, ry, a) {
	        if (a == null && ry == null) {
	            ry = rx;
	        }
	        x = +x;
	        y = +y;
	        rx = +rx;
	        ry = +ry;
	        if (a != null) {
	            var rad = Math.PI / 180,
	                x1 = x + rx * Math.cos(-ry * rad),
	                x2 = x + rx * Math.cos(-a * rad),
	                y1 = y + rx * Math.sin(-ry * rad),
	                y2 = y + rx * Math.sin(-a * rad),
	                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
	        } else {
	            res = [
	                ["M", x, y],
	                ["m", 0, -ry],
	                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
	                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
	                ["z"]
	            ];
	        }
	        res.toString = toString;
	        return res;
	    }
	    var unit2px = Snap._unit2px,
	        getPath = {
	        path: function (el) {
	            return el.attr("path");
	        },
	        circle: function (el) {
	            var attr = unit2px(el);
	            return ellipsePath(attr.cx, attr.cy, attr.r);
	        },
	        ellipse: function (el) {
	            var attr = unit2px(el);
	            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
	        },
	        rect: function (el) {
	            var attr = unit2px(el);
	            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
	        },
	        image: function (el) {
	            var attr = unit2px(el);
	            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
	        },
	        line: function (el) {
	            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
	        },
	        polyline: function (el) {
	            return "M" + el.attr("points");
	        },
	        polygon: function (el) {
	            return "M" + el.attr("points") + "z";
	        },
	        deflt: function (el) {
	            var bbox = el.node.getBBox();
	            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	        }
	    };
	    function pathToRelative(pathArray) {
	        var pth = paths(pathArray),
	            lowerCase = String.prototype.toLowerCase;
	        if (pth.rel) {
	            return pathClone(pth.rel);
	        }
	        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
	            pathArray = Snap.parsePathString(pathArray);
	        }
	        var res = [],
	            x = 0,
	            y = 0,
	            mx = 0,
	            my = 0,
	            start = 0;
	        if (pathArray[0][0] == "M") {
	            x = pathArray[0][1];
	            y = pathArray[0][2];
	            mx = x;
	            my = y;
	            start++;
	            res.push(["M", x, y]);
	        }
	        for (var i = start, ii = pathArray.length; i < ii; i++) {
	            var r = res[i] = [],
	                pa = pathArray[i];
	            if (pa[0] != lowerCase.call(pa[0])) {
	                r[0] = lowerCase.call(pa[0]);
	                switch (r[0]) {
	                    case "a":
	                        r[1] = pa[1];
	                        r[2] = pa[2];
	                        r[3] = pa[3];
	                        r[4] = pa[4];
	                        r[5] = pa[5];
	                        r[6] = +(pa[6] - x).toFixed(3);
	                        r[7] = +(pa[7] - y).toFixed(3);
	                        break;
	                    case "v":
	                        r[1] = +(pa[1] - y).toFixed(3);
	                        break;
	                    case "m":
	                        mx = pa[1];
	                        my = pa[2];
	                    default:
	                        for (var j = 1, jj = pa.length; j < jj; j++) {
	                            r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
	                        }
	                }
	            } else {
	                r = res[i] = [];
	                if (pa[0] == "m") {
	                    mx = pa[1] + x;
	                    my = pa[2] + y;
	                }
	                for (var k = 0, kk = pa.length; k < kk; k++) {
	                    res[i][k] = pa[k];
	                }
	            }
	            var len = res[i].length;
	            switch (res[i][0]) {
	                case "z":
	                    x = mx;
	                    y = my;
	                    break;
	                case "h":
	                    x += +res[i][len - 1];
	                    break;
	                case "v":
	                    y += +res[i][len - 1];
	                    break;
	                default:
	                    x += +res[i][len - 2];
	                    y += +res[i][len - 1];
	            }
	        }
	        res.toString = toString;
	        pth.rel = pathClone(res);
	        return res;
	    }
	    function pathToAbsolute(pathArray) {
	        var pth = paths(pathArray);
	        if (pth.abs) {
	            return pathClone(pth.abs);
	        }
	        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
	            pathArray = Snap.parsePathString(pathArray);
	        }
	        if (!pathArray || !pathArray.length) {
	            return [["M", 0, 0]];
	        }
	        var res = [],
	            x = 0,
	            y = 0,
	            mx = 0,
	            my = 0,
	            start = 0,
	            pa0;
	        if (pathArray[0][0] == "M") {
	            x = +pathArray[0][1];
	            y = +pathArray[0][2];
	            mx = x;
	            my = y;
	            start++;
	            res[0] = ["M", x, y];
	        }
	        var crz = pathArray.length == 3 &&
	            pathArray[0][0] == "M" &&
	            pathArray[1][0].toUpperCase() == "R" &&
	            pathArray[2][0].toUpperCase() == "Z";
	        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
	            res.push(r = []);
	            pa = pathArray[i];
	            pa0 = pa[0];
	            if (pa0 != pa0.toUpperCase()) {
	                r[0] = pa0.toUpperCase();
	                switch (r[0]) {
	                    case "A":
	                        r[1] = pa[1];
	                        r[2] = pa[2];
	                        r[3] = pa[3];
	                        r[4] = pa[4];
	                        r[5] = pa[5];
	                        r[6] = +pa[6] + x;
	                        r[7] = +pa[7] + y;
	                        break;
	                    case "V":
	                        r[1] = +pa[1] + y;
	                        break;
	                    case "H":
	                        r[1] = +pa[1] + x;
	                        break;
	                    case "R":
	                        var dots = [x, y].concat(pa.slice(1));
	                        for (var j = 2, jj = dots.length; j < jj; j++) {
	                            dots[j] = +dots[j] + x;
	                            dots[++j] = +dots[j] + y;
	                        }
	                        res.pop();
	                        res = res.concat(catmullRom2bezier(dots, crz));
	                        break;
	                    case "O":
	                        res.pop();
	                        dots = ellipsePath(x, y, pa[1], pa[2]);
	                        dots.push(dots[0]);
	                        res = res.concat(dots);
	                        break;
	                    case "U":
	                        res.pop();
	                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
	                        r = ["U"].concat(res[res.length - 1].slice(-2));
	                        break;
	                    case "M":
	                        mx = +pa[1] + x;
	                        my = +pa[2] + y;
	                    default:
	                        for (j = 1, jj = pa.length; j < jj; j++) {
	                            r[j] = +pa[j] + ((j % 2) ? x : y);
	                        }
	                }
	            } else if (pa0 == "R") {
	                dots = [x, y].concat(pa.slice(1));
	                res.pop();
	                res = res.concat(catmullRom2bezier(dots, crz));
	                r = ["R"].concat(pa.slice(-2));
	            } else if (pa0 == "O") {
	                res.pop();
	                dots = ellipsePath(x, y, pa[1], pa[2]);
	                dots.push(dots[0]);
	                res = res.concat(dots);
	            } else if (pa0 == "U") {
	                res.pop();
	                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
	                r = ["U"].concat(res[res.length - 1].slice(-2));
	            } else {
	                for (var k = 0, kk = pa.length; k < kk; k++) {
	                    r[k] = pa[k];
	                }
	            }
	            pa0 = pa0.toUpperCase();
	            if (pa0 != "O") {
	                switch (r[0]) {
	                    case "Z":
	                        x = +mx;
	                        y = +my;
	                        break;
	                    case "H":
	                        x = r[1];
	                        break;
	                    case "V":
	                        y = r[1];
	                        break;
	                    case "M":
	                        mx = r[r.length - 2];
	                        my = r[r.length - 1];
	                    default:
	                        x = r[r.length - 2];
	                        y = r[r.length - 1];
	                }
	            }
	        }
	        res.toString = toString;
	        pth.abs = pathClone(res);
	        return res;
	    }
	    function l2c(x1, y1, x2, y2) {
	        return [x1, y1, x2, y2, x2, y2];
	    }
	    function q2c(x1, y1, ax, ay, x2, y2) {
	        var _13 = 1 / 3,
	            _23 = 2 / 3;
	        return [
	                _13 * x1 + _23 * ax,
	                _13 * y1 + _23 * ay,
	                _13 * x2 + _23 * ax,
	                _13 * y2 + _23 * ay,
	                x2,
	                y2
	            ];
	    }
	    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	        // for more information of where this math came from visit:
	        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	        var _120 = PI * 120 / 180,
	            rad = PI / 180 * (+angle || 0),
	            res = [],
	            xy,
	            rotate = Snap._.cacher(function (x, y, rad) {
	                var X = x * math.cos(rad) - y * math.sin(rad),
	                    Y = x * math.sin(rad) + y * math.cos(rad);
	                return {x: X, y: Y};
	            });
	        if (!recursive) {
	            xy = rotate(x1, y1, -rad);
	            x1 = xy.x;
	            y1 = xy.y;
	            xy = rotate(x2, y2, -rad);
	            x2 = xy.x;
	            y2 = xy.y;
	            var cos = math.cos(PI / 180 * angle),
	                sin = math.sin(PI / 180 * angle),
	                x = (x1 - x2) / 2,
	                y = (y1 - y2) / 2;
	            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
	            if (h > 1) {
	                h = math.sqrt(h);
	                rx = h * rx;
	                ry = h * ry;
	            }
	            var rx2 = rx * rx,
	                ry2 = ry * ry,
	                k = (large_arc_flag == sweep_flag ? -1 : 1) *
	                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
	                cx = k * rx * y / ry + (x1 + x2) / 2,
	                cy = k * -ry * x / rx + (y1 + y2) / 2,
	                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
	                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

	            f1 = x1 < cx ? PI - f1 : f1;
	            f2 = x2 < cx ? PI - f2 : f2;
	            f1 < 0 && (f1 = PI * 2 + f1);
	            f2 < 0 && (f2 = PI * 2 + f2);
	            if (sweep_flag && f1 > f2) {
	                f1 = f1 - PI * 2;
	            }
	            if (!sweep_flag && f2 > f1) {
	                f2 = f2 - PI * 2;
	            }
	        } else {
	            f1 = recursive[0];
	            f2 = recursive[1];
	            cx = recursive[2];
	            cy = recursive[3];
	        }
	        var df = f2 - f1;
	        if (abs(df) > _120) {
	            var f2old = f2,
	                x2old = x2,
	                y2old = y2;
	            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	            x2 = cx + rx * math.cos(f2);
	            y2 = cy + ry * math.sin(f2);
	            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	        }
	        df = f2 - f1;
	        var c1 = math.cos(f1),
	            s1 = math.sin(f1),
	            c2 = math.cos(f2),
	            s2 = math.sin(f2),
	            t = math.tan(df / 4),
	            hx = 4 / 3 * rx * t,
	            hy = 4 / 3 * ry * t,
	            m1 = [x1, y1],
	            m2 = [x1 + hx * s1, y1 - hy * c1],
	            m3 = [x2 + hx * s2, y2 - hy * c2],
	            m4 = [x2, y2];
	        m2[0] = 2 * m1[0] - m2[0];
	        m2[1] = 2 * m1[1] - m2[1];
	        if (recursive) {
	            return [m2, m3, m4].concat(res);
	        } else {
	            res = [m2, m3, m4].concat(res).join().split(",");
	            var newres = [];
	            for (var i = 0, ii = res.length; i < ii; i++) {
	                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
	            }
	            return newres;
	        }
	    }
	    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t;
	        return {
	            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
	        };
	    }

	    // Returns bounding box of cubic bezier curve.
	    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
	    // Original version: NISHIO Hirokazu
	    // Modifications: https://github.com/timo22345
	    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
	        var tvalues = [],
	            bounds = [[], []],
	            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
	        for (var i = 0; i < 2; ++i) {
	            if (i == 0) {
	                b = 6 * x0 - 12 * x1 + 6 * x2;
	                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
	                c = 3 * x1 - 3 * x0;
	            } else {
	                b = 6 * y0 - 12 * y1 + 6 * y2;
	                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
	                c = 3 * y1 - 3 * y0;
	            }
	            if (abs(a) < 1e-12) {
	                if (abs(b) < 1e-12) {
	                    continue;
	                }
	                t = -c / b;
	                if (0 < t && t < 1) {
	                    tvalues.push(t);
	                }
	                continue;
	            }
	            b2ac = b * b - 4 * c * a;
	            sqrtb2ac = math.sqrt(b2ac);
	            if (b2ac < 0) {
	                continue;
	            }
	            t1 = (-b + sqrtb2ac) / (2 * a);
	            if (0 < t1 && t1 < 1) {
	                tvalues.push(t1);
	            }
	            t2 = (-b - sqrtb2ac) / (2 * a);
	            if (0 < t2 && t2 < 1) {
	                tvalues.push(t2);
	            }
	        }

	        var x, y, j = tvalues.length,
	            jlen = j,
	            mt;
	        while (j--) {
	            t = tvalues[j];
	            mt = 1 - t;
	            bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
	            bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
	        }

	        bounds[0][jlen] = x0;
	        bounds[1][jlen] = y0;
	        bounds[0][jlen + 1] = x3;
	        bounds[1][jlen + 1] = y3;
	        bounds[0].length = bounds[1].length = jlen + 2;


	        return {
	          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
	          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
	        };
	    }

	    function path2curve(path, path2) {
	        var pth = !path2 && paths(path);
	        if (!path2 && pth.curve) {
	            return pathClone(pth.curve);
	        }
	        var p = pathToAbsolute(path),
	            p2 = path2 && pathToAbsolute(path2),
	            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	            processPath = function (path, d, pcom) {
	                var nx, ny;
	                if (!path) {
	                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
	                }
	                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
	                switch (path[0]) {
	                    case "M":
	                        d.X = path[1];
	                        d.Y = path[2];
	                        break;
	                    case "A":
	                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
	                        break;
	                    case "S":
	                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
	                            nx = d.x * 2 - d.bx;          // And reflect the previous
	                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
	                        }
	                        else {                            // or some else or nothing
	                            nx = d.x;
	                            ny = d.y;
	                        }
	                        path = ["C", nx, ny].concat(path.slice(1));
	                        break;
	                    case "T":
	                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
	                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
	                            d.qy = d.y * 2 - d.qy;        // to case "S".
	                        }
	                        else {                            // or something else or nothing
	                            d.qx = d.x;
	                            d.qy = d.y;
	                        }
	                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
	                        break;
	                    case "Q":
	                        d.qx = path[1];
	                        d.qy = path[2];
	                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
	                        break;
	                    case "L":
	                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
	                        break;
	                    case "H":
	                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
	                        break;
	                    case "V":
	                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
	                        break;
	                    case "Z":
	                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
	                        break;
	                }
	                return path;
	            },
	            fixArc = function (pp, i) {
	                if (pp[i].length > 7) {
	                    pp[i].shift();
	                    var pi = pp[i];
	                    while (pi.length) {
	                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
	                        p2 && (pcoms2[i] = "A"); // the same as above
	                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
	                    }
	                    pp.splice(i, 1);
	                    ii = mmax(p.length, p2 && p2.length || 0);
	                }
	            },
	            fixM = function (path1, path2, a1, a2, i) {
	                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
	                    path2.splice(i, 0, ["M", a2.x, a2.y]);
	                    a1.bx = 0;
	                    a1.by = 0;
	                    a1.x = path1[i][1];
	                    a1.y = path1[i][2];
	                    ii = mmax(p.length, p2 && p2.length || 0);
	                }
	            },
	            pcoms1 = [], // path commands of original path p
	            pcoms2 = [], // path commands of original path p2
	            pfirst = "", // temporary holder for original path command
	            pcom = ""; // holder for previous path command of original path
	        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
	            p[i] && (pfirst = p[i][0]); // save current path command

	            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
	            {
	                pcoms1[i] = pfirst; // Save current path command
	                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
	            }
	            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

	            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
	            // which may produce multiple C:s
	            // so we have to make sure that C is also C in original path

	            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

	            if (p2) { // the same procedures is done to p2
	                p2[i] && (pfirst = p2[i][0]);
	                if (pfirst != "C") {
	                    pcoms2[i] = pfirst;
	                    i && (pcom = pcoms2[i - 1]);
	                }
	                p2[i] = processPath(p2[i], attrs2, pcom);

	                if (pcoms2[i] != "A" && pfirst == "C") {
	                    pcoms2[i] = "C";
	                }

	                fixArc(p2, i);
	            }
	            fixM(p, p2, attrs, attrs2, i);
	            fixM(p2, p, attrs2, attrs, i);
	            var seg = p[i],
	                seg2 = p2 && p2[i],
	                seglen = seg.length,
	                seg2len = p2 && seg2.length;
	            attrs.x = seg[seglen - 2];
	            attrs.y = seg[seglen - 1];
	            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
	            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
	            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
	            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
	            attrs2.x = p2 && seg2[seg2len - 2];
	            attrs2.y = p2 && seg2[seg2len - 1];
	        }
	        if (!p2) {
	            pth.curve = pathClone(p);
	        }
	        return p2 ? [p, p2] : p;
	    }
	    function mapPath(path, matrix) {
	        if (!matrix) {
	            return path;
	        }
	        var x, y, i, j, ii, jj, pathi;
	        path = path2curve(path);
	        for (i = 0, ii = path.length; i < ii; i++) {
	            pathi = path[i];
	            for (j = 1, jj = pathi.length; j < jj; j += 2) {
	                x = matrix.x(pathi[j], pathi[j + 1]);
	                y = matrix.y(pathi[j], pathi[j + 1]);
	                pathi[j] = x;
	                pathi[j + 1] = y;
	            }
	        }
	        return path;
	    }

	    // http://schepers.cc/getting-to-the-point
	    function catmullRom2bezier(crp, z) {
	        var d = [];
	        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
	            var p = [
	                        {x: +crp[i - 2], y: +crp[i - 1]},
	                        {x: +crp[i],     y: +crp[i + 1]},
	                        {x: +crp[i + 2], y: +crp[i + 3]},
	                        {x: +crp[i + 4], y: +crp[i + 5]}
	                    ];
	            if (z) {
	                if (!i) {
	                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
	                } else if (iLen - 4 == i) {
	                    p[3] = {x: +crp[0], y: +crp[1]};
	                } else if (iLen - 2 == i) {
	                    p[2] = {x: +crp[0], y: +crp[1]};
	                    p[3] = {x: +crp[2], y: +crp[3]};
	                }
	            } else {
	                if (iLen - 4 == i) {
	                    p[3] = p[2];
	                } else if (!i) {
	                    p[0] = {x: +crp[i], y: +crp[i + 1]};
	                }
	            }
	            d.push(["C",
	                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
	                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
	                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
	                  (p[1].y + 6*p[2].y - p[3].y) / 6,
	                  p[2].x,
	                  p[2].y
	            ]);
	        }

	        return d;
	    }

	    // export
	    Snap.path = paths;

	    /*\
	     * Snap.path.getTotalLength
	     [ method ]
	     **
	     * Returns the length of the given path in pixels
	     **
	     - path (string) SVG path string
	     **
	     = (number) length
	    \*/
	    Snap.path.getTotalLength = getTotalLength;
	    /*\
	     * Snap.path.getPointAtLength
	     [ method ]
	     **
	     * Returns the coordinates of the point located at the given length along the given path
	     **
	     - path (string) SVG path string
	     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate,
	     o     y: (number) y coordinate,
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    Snap.path.getPointAtLength = getPointAtLength;
	    /*\
	     * Snap.path.getSubpath
	     [ method ]
	     **
	     * Returns the subpath of a given path between given start and end lengths
	     **
	     - path (string) SVG path string
	     - from (number) length, in pixels, from the start of the path to the start of the segment
	     - to (number) length, in pixels, from the start of the path to the end of the segment
	     **
	     = (string) path string definition for the segment
	    \*/
	    Snap.path.getSubpath = function (path, from, to) {
	        if (this.getTotalLength(path) - to < 1e-6) {
	            return getSubpathsAtLength(path, from).end;
	        }
	        var a = getSubpathsAtLength(path, to, 1);
	        return from ? getSubpathsAtLength(a, from).end : a;
	    };
	    /*\
	     * Element.getTotalLength
	     [ method ]
	     **
	     * Returns the length of the path in pixels (only works for `path` elements)
	     = (number) length
	    \*/
	    elproto.getTotalLength = function () {
	        if (this.node.getTotalLength) {
	            return this.node.getTotalLength();
	        }
	    };
	    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
	    /*\
	     * Element.getPointAtLength
	     [ method ]
	     **
	     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
	     **
	     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate,
	     o     y: (number) y coordinate,
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    elproto.getPointAtLength = function (length) {
	        return getPointAtLength(this.attr("d"), length);
	    };
	    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
	    /*\
	     * Element.getSubpath
	     [ method ]
	     **
	     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
	     **
	     - from (number) length, in pixels, from the start of the path to the start of the segment
	     - to (number) length, in pixels, from the start of the path to the end of the segment
	     **
	     = (string) path string definition for the segment
	    \*/
	    elproto.getSubpath = function (from, to) {
	        return Snap.path.getSubpath(this.attr("d"), from, to);
	    };
	    Snap._.box = box;
	    /*\
	     * Snap.path.findDotsAtSegment
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds dot coordinates on the given cubic beziér curve at the given t
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     - t (number) position on the curve (0..1)
	     = (object) point information in format:
	     o {
	     o     x: (number) x coordinate of the point,
	     o     y: (number) y coordinate of the point,
	     o     m: {
	     o         x: (number) x coordinate of the left anchor,
	     o         y: (number) y coordinate of the left anchor
	     o     },
	     o     n: {
	     o         x: (number) x coordinate of the right anchor,
	     o         y: (number) y coordinate of the right anchor
	     o     },
	     o     start: {
	     o         x: (number) x coordinate of the start of the curve,
	     o         y: (number) y coordinate of the start of the curve
	     o     },
	     o     end: {
	     o         x: (number) x coordinate of the end of the curve,
	     o         y: (number) y coordinate of the end of the curve
	     o     },
	     o     alpha: (number) angle of the curve derivative at the point
	     o }
	    \*/
	    Snap.path.findDotsAtSegment = findDotsAtSegment;
	    /*\
	     * Snap.path.bezierBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns the bounding box of a given cubic beziér curve
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     * or
	     - bez (array) array of six points for beziér curve
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box,
	     o     y: (number) y coordinate of the left top point of the box,
	     o     x2: (number) x coordinate of the right bottom point of the box,
	     o     y2: (number) y coordinate of the right bottom point of the box,
	     o     width: (number) width of the box,
	     o     height: (number) height of the box
	     o }
	    \*/
	    Snap.path.bezierBBox = bezierBBox;
	    /*\
	     * Snap.path.isPointInsideBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside bounding box
	     - bbox (string) bounding box
	     - x (string) x coordinate of the point
	     - y (string) y coordinate of the point
	     = (boolean) `true` if point is inside
	    \*/
	    Snap.path.isPointInsideBBox = isPointInsideBBox;
	    Snap.closest = function (x, y, X, Y) {
	        var r = 100,
	            b = box(x - r / 2, y - r / 2, r, r),
	            inside = [],
	            getter = X[0].hasOwnProperty("x") ? function (i) {
	                return {
	                    x: X[i].x,
	                    y: X[i].y
	                };
	            } : function (i) {
	                return {
	                    x: X[i],
	                    y: Y[i]
	                };
	            },
	            found = 0;
	        while (r <= 1e6 && !found) {
	            for (var i = 0, ii = X.length; i < ii; i++) {
	                var xy = getter(i);
	                if (isPointInsideBBox(b, xy.x, xy.y)) {
	                    found++;
	                    inside.push(xy);
	                    break;
	                }
	            }
	            if (!found) {
	                r *= 2;
	                b = box(x - r / 2, y - r / 2, r, r)
	            }
	        }
	        if (r == 1e6) {
	            return;
	        }
	        var len = Infinity,
	            res;
	        for (i = 0, ii = inside.length; i < ii; i++) {
	            var l = Snap.len(x, y, inside[i].x, inside[i].y);
	            if (len > l) {
	                len = l;
	                inside[i].len = l;
	                res = inside[i];
	            }
	        }
	        return res;
	    };
	    /*\
	     * Snap.path.isBBoxIntersect
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if two bounding boxes intersect
	     - bbox1 (string) first bounding box
	     - bbox2 (string) second bounding box
	     = (boolean) `true` if bounding boxes intersect
	    \*/
	    Snap.path.isBBoxIntersect = isBBoxIntersect;
	    /*\
	     * Snap.path.intersection
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds intersections of two paths
	     - path1 (string) path string
	     - path2 (string) path string
	     = (array) dots of intersection
	     o [
	     o     {
	     o         x: (number) x coordinate of the point,
	     o         y: (number) y coordinate of the point,
	     o         t1: (number) t value for segment of path1,
	     o         t2: (number) t value for segment of path2,
	     o         segment1: (number) order number for segment of path1,
	     o         segment2: (number) order number for segment of path2,
	     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
	     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
	     o     }
	     o ]
	    \*/
	    Snap.path.intersection = pathIntersection;
	    Snap.path.intersectionNumber = pathIntersectionNumber;
	    /*\
	     * Snap.path.isPointInside
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside a given closed path.
	     *
	     * Note: fill mode doesn’t affect the result of this method.
	     - path (string) path string
	     - x (number) x of the point
	     - y (number) y of the point
	     = (boolean) `true` if point is inside the path
	    \*/
	    Snap.path.isPointInside = isPointInsidePath;
	    /*\
	     * Snap.path.getBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns the bounding box of a given path
	     - path (string) path string
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box,
	     o     y: (number) y coordinate of the left top point of the box,
	     o     x2: (number) x coordinate of the right bottom point of the box,
	     o     y2: (number) y coordinate of the right bottom point of the box,
	     o     width: (number) width of the box,
	     o     height: (number) height of the box
	     o }
	    \*/
	    Snap.path.getBBox = pathBBox;
	    Snap.path.get = getPath;
	    /*\
	     * Snap.path.toRelative
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path coordinates into relative values
	     - path (string) path string
	     = (array) path string
	    \*/
	    Snap.path.toRelative = pathToRelative;
	    /*\
	     * Snap.path.toAbsolute
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path coordinates into absolute values
	     - path (string) path string
	     = (array) path string
	    \*/
	    Snap.path.toAbsolute = pathToAbsolute;
	    /*\
	     * Snap.path.toCubic
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to a new path where all segments are cubic beziér curves
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments
	    \*/
	    Snap.path.toCubic = path2curve;
	    /*\
	     * Snap.path.map
	     [ method ]
	     **
	     * Transform the path string with the given matrix
	     - path (string) path string
	     - matrix (object) see @Matrix
	     = (string) transformed path string
	    \*/
	    Snap.path.map = mapPath;
	    Snap.path.toString = toString;
	    Snap.path.clone = pathClone;
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var mmax = Math.max,
	        mmin = Math.min;

	    // Set
	    var Set = function (items) {
	        this.items = [];
		this.bindings = {};
	        this.length = 0;
	        this.type = "set";
	        if (items) {
	            for (var i = 0, ii = items.length; i < ii; i++) {
	                if (items[i]) {
	                    this[this.items.length] = this.items[this.items.length] = items[i];
	                    this.length++;
	                }
	            }
	        }
	    },
	    setproto = Set.prototype;
	    /*\
	     * Set.push
	     [ method ]
	     **
	     * Adds each argument to the current set
	     = (object) original element
	    \*/
	    setproto.push = function () {
	        var item,
	            len;
	        for (var i = 0, ii = arguments.length; i < ii; i++) {
	            item = arguments[i];
	            if (item) {
	                len = this.items.length;
	                this[len] = this.items[len] = item;
	                this.length++;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.pop
	     [ method ]
	     **
	     * Removes last element and returns it
	     = (object) element
	    \*/
	    setproto.pop = function () {
	        this.length && delete this[this.length--];
	        return this.items.pop();
	    };
	    /*\
	     * Set.forEach
	     [ method ]
	     **
	     * Executes given function for each element in the set
	     *
	     * If the function returns `false`, the loop stops running.
	     **
	     - callback (function) function to run
	     - thisArg (object) context object for the callback
	     = (object) Set object
	    \*/
	    setproto.forEach = function (callback, thisArg) {
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            if (callback.call(thisArg, this.items[i], i) === false) {
	                return this;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.animate
	     [ method ]
	     **
	     * Animates each element in set in sync.
	     *
	     **
	     - attrs (object) key-value pairs of destination attributes
	     - duration (number) duration of the animation in milliseconds
	     - easing (function) #optional easing function from @mina or custom
	     - callback (function) #optional callback function that executes when the animation ends
	     * or
	     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
	     > Usage
	     | // animate all elements in set to radius 10
	     | set.animate({r: 10}, 500, mina.easein);
	     | // or
	     | // animate first element to radius 10, but second to radius 20 and in different time
	     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
	     = (Element) the current element
	    \*/
	    setproto.animate = function (attrs, ms, easing, callback) {
	        if (typeof easing == "function" && !easing.length) {
	            callback = easing;
	            easing = mina.linear;
	        }
	        if (attrs instanceof Snap._.Animation) {
	            callback = attrs.callback;
	            easing = attrs.easing;
	            ms = easing.dur;
	            attrs = attrs.attr;
	        }
	        var args = arguments;
	        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
	            var each = true;
	        }
	        var begin,
	            handler = function () {
	                if (begin) {
	                    this.b = begin;
	                } else {
	                    begin = this.b;
	                }
	            },
	            cb = 0,
	            set = this,
	            callbacker = callback && function () {
	                if (++cb == set.length) {
	                    callback.call(this);
	                }
	            };
	        return this.forEach(function (el, i) {
	            eve.once("snap.animcreated." + el.id, handler);
	            if (each) {
	                args[i] && el.animate.apply(el, args[i]);
	            } else {
	                el.animate(attrs, ms, easing, callbacker);
	            }
	        });
	    };
	    setproto.remove = function () {
	        while (this.length) {
	            this.pop().remove();
	        }
	        return this;
	    };
	    /*\
	     * Set.bind
	     [ method ]
	     **
	     * Specifies how to handle a specific attribute when applied
	     * to a set.
	     *
	     **
	     - attr (string) attribute name
	     - callback (function) function to run
	     * or
	     - attr (string) attribute name
	     - element (Element) specific element in the set to apply the attribute to
	     * or
	     - attr (string) attribute name
	     - element (Element) specific element in the set to apply the attribute to
	     - eattr (string) attribute on the element to bind the attribute to
	     = (object) Set object
	    \*/
	    setproto.bind = function (attr, a, b) {
	        var data = {};
	        if (typeof a == "function") {
	            this.bindings[attr] = a;
	        } else {
	            var aname = b || attr;
	            this.bindings[attr] = function (v) {
	                data[aname] = v;
	                a.attr(data);
	            };
	        }
	        return this;
	    };
	    setproto.attr = function (value) {
	        var unbound = {};
	        for (var k in value) {
	            if (this.bindings[k]) {
	                this.bindings[k](value[k]);
	            } else {
	                unbound[k] = value[k];
	            }
	        }
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            this.items[i].attr(unbound);
	        }
	        return this;
	    };
	    /*\
	     * Set.clear
	     [ method ]
	     **
	     * Removes all elements from the set
	    \*/
	    setproto.clear = function () {
	        while (this.length) {
	            this.pop();
	        }
	    };
	    /*\
	     * Set.splice
	     [ method ]
	     **
	     * Removes range of elements from the set
	     **
	     - index (number) position of the deletion
	     - count (number) number of element to remove
	     - insertion… (object) #optional elements to insert
	     = (object) set elements that were deleted
	    \*/
	    setproto.splice = function (index, count, insertion) {
	        index = index < 0 ? mmax(this.length + index, 0) : index;
	        count = mmax(0, mmin(this.length - index, count));
	        var tail = [],
	            todel = [],
	            args = [],
	            i;
	        for (i = 2; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        for (i = 0; i < count; i++) {
	            todel.push(this[index + i]);
	        }
	        for (; i < this.length - index; i++) {
	            tail.push(this[index + i]);
	        }
	        var arglen = args.length;
	        for (i = 0; i < arglen + tail.length; i++) {
	            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
	        }
	        i = this.items.length = this.length -= count - arglen;
	        while (this[i]) {
	            delete this[i++];
	        }
	        return new Set(todel);
	    };
	    /*\
	     * Set.exclude
	     [ method ]
	     **
	     * Removes given element from the set
	     **
	     - element (object) element to remove
	     = (boolean) `true` if object was found and removed from the set
	    \*/
	    setproto.exclude = function (el) {
	        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
	            this.splice(i, 1);
	            return true;
	        }
	        return false;
	    };
	    setproto.insertAfter = function (el) {
	        var i = this.items.length;
	        while (i--) {
	            this.items[i].insertAfter(el);
	        }
	        return this;
	    };
	    setproto.getBBox = function () {
	        var x = [],
	            y = [],
	            x2 = [],
	            y2 = [];
	        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
	            var box = this.items[i].getBBox();
	            x.push(box.x);
	            y.push(box.y);
	            x2.push(box.x + box.width);
	            y2.push(box.y + box.height);
	        }
	        x = mmin.apply(0, x);
	        y = mmin.apply(0, y);
	        x2 = mmax.apply(0, x2);
	        y2 = mmax.apply(0, y2);
	        return {
	            x: x,
	            y: y,
	            x2: x2,
	            y2: y2,
	            width: x2 - x,
	            height: y2 - y,
	            cx: x + (x2 - x) / 2,
	            cy: y + (y2 - y) / 2
	        };
	    };
	    setproto.clone = function (s) {
	        s = new Set;
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            s.push(this.items[i].clone());
	        }
	        return s;
	    };
	    setproto.toString = function () {
	        return "Snap\u2018s set";
	    };
	    setproto.type = "set";
	    // export
	    Snap.Set = Set;
	    Snap.set = function () {
	        var set = new Set;
	        if (arguments.length) {
	            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
	        }
	        return set;
	    };
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var names = {},
	        reUnit = /[a-z]+$/i,
	        Str = String;
	    names.stroke = names.fill = "colour";
	    function getEmpty(item) {
	        var l = item[0];
	        switch (l.toLowerCase()) {
	            case "t": return [l, 0, 0];
	            case "m": return [l, 1, 0, 0, 1, 0, 0];
	            case "r": if (item.length == 4) {
	                return [l, 0, item[2], item[3]];
	            } else {
	                return [l, 0];
	            }
	            case "s": if (item.length == 5) {
	                return [l, 1, 1, item[3], item[4]];
	            } else if (item.length == 3) {
	                return [l, 1, 1];
	            } else {
	                return [l, 1];
	            }
	        }
	    }
	    function equaliseTransform(t1, t2, getBBox) {
	        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
	        t1 = Snap.parseTransformString(t1) || [];
	        t2 = Snap.parseTransformString(t2) || [];
	        var maxlength = Math.max(t1.length, t2.length),
	            from = [],
	            to = [],
	            i = 0, j, jj,
	            tt1, tt2;
	        for (; i < maxlength; i++) {
	            tt1 = t1[i] || getEmpty(t2[i]);
	            tt2 = t2[i] || getEmpty(tt1);
	            if ((tt1[0] != tt2[0]) ||
	                (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
	                (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
	                ) {
	                    t1 = Snap._.transform2matrix(t1, getBBox());
	                    t2 = Snap._.transform2matrix(t2, getBBox());
	                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
	                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
	                    break;
	            }
	            from[i] = [];
	            to[i] = [];
	            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
	                j in tt1 && (from[i][j] = tt1[j]);
	                j in tt2 && (to[i][j] = tt2[j]);
	            }
	        }
	        return {
	            from: path2array(from),
	            to: path2array(to),
	            f: getPath(from)
	        };
	    }
	    function getNumber(val) {
	        return val;
	    }
	    function getUnit(unit) {
	        return function (val) {
	            return +val.toFixed(3) + unit;
	        };
	    }
	    function getViewBox(val) {
	        return val.join(" ");
	    }
	    function getColour(clr) {
	        return Snap.rgb(clr[0], clr[1], clr[2]);
	    }
	    function getPath(path) {
	        var k = 0, i, ii, j, jj, out, a, b = [];
	        for (i = 0, ii = path.length; i < ii; i++) {
	            out = "[";
	            a = ['"' + path[i][0] + '"'];
	            for (j = 1, jj = path[i].length; j < jj; j++) {
	                a[j] = "val[" + (k++) + "]";
	            }
	            out += a + "]";
	            b[i] = out;
	        }
	        return Function("val", "return Snap.path.toString.call([" + b + "])");
	    }
	    function path2array(path) {
	        var out = [];
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            for (var j = 1, jj = path[i].length; j < jj; j++) {
	                out.push(path[i][j]);
	            }
	        }
	        return out;
	    }
	    function isNumeric(obj) {
	        return isFinite(parseFloat(obj));
	    }
	    function arrayEqual(arr1, arr2) {
	        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
	            return false;
	        }
	        return arr1.toString() == arr2.toString();
	    }
	    Element.prototype.equal = function (name, b) {
	        return eve("snap.util.equal", this, name, b).firstDefined();
	    };
	    eve.on("snap.util.equal", function (name, b) {
	        var A, B, a = Str(this.attr(name) || ""),
	            el = this;
	        if (isNumeric(a) && isNumeric(b)) {
	            return {
	                from: parseFloat(a),
	                to: parseFloat(b),
	                f: getNumber
	            };
	        }
	        if (names[name] == "colour") {
	            A = Snap.color(a);
	            B = Snap.color(b);
	            return {
	                from: [A.r, A.g, A.b, A.opacity],
	                to: [B.r, B.g, B.b, B.opacity],
	                f: getColour
	            };
	        }
	        if (name == "viewBox") {
	            A = this.attr(name).vb.split(" ").map(Number);
	            B = b.split(" ").map(Number);
	            return {
	                from: A,
	                to: B,
	                f: getViewBox
	            };
	        }
	        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
	            if (b instanceof Snap.Matrix) {
	                b = b.toTransformString();
	            }
	            if (!Snap._.rgTransform.test(b)) {
	                b = Snap._.svgTransform2string(b);
	            }
	            return equaliseTransform(a, b, function () {
	                return el.getBBox(1);
	            });
	        }
	        if (name == "d" || name == "path") {
	            A = Snap.path.toCubic(a, b);
	            return {
	                from: path2array(A[0]),
	                to: path2array(A[1]),
	                f: getPath(A[0])
	            };
	        }
	        if (name == "points") {
	            A = Str(a).split(Snap._.separator);
	            B = Str(b).split(Snap._.separator);
	            return {
	                from: A,
	                to: B,
	                f: function (val) { return val; }
	            };
	        }
	        var aUnit = a.match(reUnit),
	            bUnit = Str(b).match(reUnit);
	        if (aUnit && arrayEqual(aUnit, bUnit)) {
	            return {
	                from: parseFloat(a),
	                to: parseFloat(b),
	                f: getUnit(aUnit)
	            };
	        } else {
	            return {
	                from: this.asPX(name),
	                to: this.asPX(name, b),
	                f: getNumber
	            };
	        }
	    });
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype,
	    has = "hasOwnProperty",
	    supportsTouch = "createTouch" in glob.doc,
	    events = [
	        "click", "dblclick", "mousedown", "mousemove", "mouseout",
	        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
	        "touchcancel"
	    ],
	    touchMap = {
	        mousedown: "touchstart",
	        mousemove: "touchmove",
	        mouseup: "touchend"
	    },
	    getScroll = function (xy, el) {
	        var name = xy == "y" ? "scrollTop" : "scrollLeft",
	            doc = el && el.node ? el.node.ownerDocument : glob.doc;
	        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
	    },
	    preventDefault = function () {
	        this.returnValue = false;
	    },
	    preventTouch = function () {
	        return this.originalEvent.preventDefault();
	    },
	    stopPropagation = function () {
	        this.cancelBubble = true;
	    },
	    stopTouch = function () {
	        return this.originalEvent.stopPropagation();
	    },
	    addEvent = function (obj, type, fn, element) {
	        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
	            f = function (e) {
	                var scrollY = getScroll("y", element),
	                    scrollX = getScroll("x", element);
	                if (supportsTouch && touchMap[has](type)) {
	                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
	                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
	                            var olde = e;
	                            e = e.targetTouches[i];
	                            e.originalEvent = olde;
	                            e.preventDefault = preventTouch;
	                            e.stopPropagation = stopTouch;
	                            break;
	                        }
	                    }
	                }
	                var x = e.clientX + scrollX,
	                    y = e.clientY + scrollY;
	                return fn.call(element, e, x, y);
	            };

	        if (type !== realName) {
	            obj.addEventListener(type, f, false);
	        }

	        obj.addEventListener(realName, f, false);

	        return function () {
	            if (type !== realName) {
	                obj.removeEventListener(type, f, false);
	            }

	            obj.removeEventListener(realName, f, false);
	            return true;
	        };
	    },
	    drag = [],
	    dragMove = function (e) {
	        var x = e.clientX,
	            y = e.clientY,
	            scrollY = getScroll("y"),
	            scrollX = getScroll("x"),
	            dragi,
	            j = drag.length;
	        while (j--) {
	            dragi = drag[j];
	            if (supportsTouch) {
	                var i = e.touches && e.touches.length,
	                    touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        (e.originalEvent ? e.originalEvent : e).preventDefault();
	                        break;
	                    }
	                }
	            } else {
	                e.preventDefault();
	            }
	            var node = dragi.el.node,
	                o,
	                next = node.nextSibling,
	                parent = node.parentNode,
	                display = node.style.display;
	            // glob.win.opera && parent.removeChild(node);
	            // node.style.display = "none";
	            // o = dragi.el.paper.getElementByPoint(x, y);
	            // node.style.display = display;
	            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
	            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
	            x += scrollX;
	            y += scrollY;
	            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
	        }
	    },
	    dragUp = function (e) {
	        Snap.unmousemove(dragMove).unmouseup(dragUp);
	        var i = drag.length,
	            dragi;
	        while (i--) {
	            dragi = drag[i];
	            dragi.el._drag = {};
	            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
	            eve.off("snap.drag.*." + dragi.el.id);
	        }
	        drag = [];
	    };
	    /*\
	     * Element.click
	     [ method ]
	     **
	     * Adds a click event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unclick
	     [ method ]
	     **
	     * Removes a click event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.dblclick
	     [ method ]
	     **
	     * Adds a double click event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.undblclick
	     [ method ]
	     **
	     * Removes a double click event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousedown
	     [ method ]
	     **
	     * Adds a mousedown event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousedown
	     [ method ]
	     **
	     * Removes a mousedown event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousemove
	     [ method ]
	     **
	     * Adds a mousemove event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousemove
	     [ method ]
	     **
	     * Removes a mousemove event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseout
	     [ method ]
	     **
	     * Adds a mouseout event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseout
	     [ method ]
	     **
	     * Removes a mouseout event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseover
	     [ method ]
	     **
	     * Adds a mouseover event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseover
	     [ method ]
	     **
	     * Removes a mouseover event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseup
	     [ method ]
	     **
	     * Adds a mouseup event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseup
	     [ method ]
	     **
	     * Removes a mouseup event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchstart
	     [ method ]
	     **
	     * Adds a touchstart event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchstart
	     [ method ]
	     **
	     * Removes a touchstart event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchmove
	     [ method ]
	     **
	     * Adds a touchmove event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchmove
	     [ method ]
	     **
	     * Removes a touchmove event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchend
	     [ method ]
	     **
	     * Adds a touchend event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchend
	     [ method ]
	     **
	     * Removes a touchend event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchcancel
	     [ method ]
	     **
	     * Adds a touchcancel event handler to the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchcancel
	     [ method ]
	     **
	     * Removes a touchcancel event handler from the element
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    for (var i = events.length; i--;) {
	        (function (eventName) {
	            Snap[eventName] = elproto[eventName] = function (fn, scope) {
	                if (Snap.is(fn, "function")) {
	                    this.events = this.events || [];
	                    this.events.push({
	                        name: eventName,
	                        f: fn,
	                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
	                    });
	                } else {
	                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
	                        try {
	                            this.events[i].f.call(this);
	                        } catch (e) {}
	                    }
	                }
	                return this;
	            };
	            Snap["un" + eventName] =
	            elproto["un" + eventName] = function (fn) {
	                var events = this.events || [],
	                    l = events.length;
	                while (l--) if (events[l].name == eventName &&
	                               (events[l].f == fn || !fn)) {
	                    events[l].unbind();
	                    events.splice(l, 1);
	                    !events.length && delete this.events;
	                    return this;
	                }
	                return this;
	            };
	        })(events[i]);
	    }
	    /*\
	     * Element.hover
	     [ method ]
	     **
	     * Adds hover event handlers to the element
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     - icontext (object) #optional context for hover in handler
	     - ocontext (object) #optional context for hover out handler
	     = (object) @Element
	    \*/
	    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
	        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
	    };
	    /*\
	     * Element.unhover
	     [ method ]
	     **
	     * Removes hover event handlers from the element
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     = (object) @Element
	    \*/
	    elproto.unhover = function (f_in, f_out) {
	        return this.unmouseover(f_in).unmouseout(f_out);
	    };
	    var draggable = [];
	    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
	    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
	    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
	    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
	    /*\
	     * Element.drag
	     [ method ]
	     **
	     * Adds event handlers for an element's drag gesture
	     **
	     - onmove (function) handler for moving
	     - onstart (function) handler for drag start
	     - onend (function) handler for drag end
	     - mcontext (object) #optional context for moving handler
	     - scontext (object) #optional context for drag start handler
	     - econtext (object) #optional context for drag end handler
	     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start,
	     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element
	     * `drag.over.<id>` fires as well.
	     *
	     * Start event and start handler are called in specified context or in context of the element with following parameters:
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * Move event and move handler are called in specified context or in context of the element with following parameters:
	     o dx (number) shift by x from the start point
	     o dy (number) shift by y from the start point
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * End event and end handler are called in specified context or in context of the element with following parameters:
	     o event (object) DOM event object
	     = (object) @Element
	    \*/
	    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
	        var el = this;
	        if (!arguments.length) {
	            var origTransform;
	            return el.drag(function (dx, dy) {
	                this.attr({
	                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
	                });
	            }, function () {
	                origTransform = this.transform().local;
	            });
	        }
	        function start(e, x, y) {
	            (e.originalEvent || e).preventDefault();
	            el._drag.x = x;
	            el._drag.y = y;
	            el._drag.id = e.identifier;
	            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
	            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
	            onstart && eve.on("snap.drag.start." + el.id, onstart);
	            onmove && eve.on("snap.drag.move." + el.id, onmove);
	            onend && eve.on("snap.drag.end." + el.id, onend);
	            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
	        }
	        function init(e, x, y) {
	            eve("snap.draginit." + el.id, el, e, x, y);
	        }
	        eve.on("snap.draginit." + el.id, start);
	        el._drag = {};
	        draggable.push({el: el, start: start, init: init});
	        el.mousedown(init);
	        return el;
	    };
	    /*
	     * Element.onDragOver
	     [ method ]
	     **
	     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
	     - f (function) handler for event, first argument would be the element you are dragging over
	    \*/
	    // elproto.onDragOver = function (f) {
	    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
	    // };
	    /*\
	     * Element.undrag
	     [ method ]
	     **
	     * Removes all drag event handlers from the given element
	    \*/
	    elproto.undrag = function () {
	        var i = draggable.length;
	        while (i--) if (draggable[i].el == this) {
	            this.unmousedown(draggable[i].init);
	            draggable.splice(i, 1);
	            eve.unbind("snap.drag.*." + this.id);
	            eve.unbind("snap.draginit." + this.id);
	        }
	        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
	        return this;
	    };
	});

	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype,
	        pproto = Paper.prototype,
	        rgurl = /^\s*url\((.+)\)/,
	        Str = String,
	        $ = Snap._.$;
	    Snap.filter = {};
	    /*\
	     * Paper.filter
	     [ method ]
	     **
	     * Creates a `<filter>` element
	     **
	     - filstr (string) SVG fragment of filter provided as a string
	     = (object) @Element
	     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
	     > Usage
	     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
	     |     c = paper.circle(10, 10, 10).attr({
	     |         filter: f
	     |     });
	    \*/
	    pproto.filter = function (filstr) {
	        var paper = this;
	        if (paper.type != "svg") {
	            paper = paper.paper;
	        }
	        var f = Snap.parse(Str(filstr)),
	            id = Snap._.id(),
	            width = paper.node.offsetWidth,
	            height = paper.node.offsetHeight,
	            filter = $("filter");
	        $(filter, {
	            id: id,
	            filterUnits: "userSpaceOnUse"
	        });
	        filter.appendChild(f.node);
	        paper.defs.appendChild(filter);
	        return new Element(filter);
	    };

	    eve.on("snap.util.getattr.filter", function () {
	        eve.stop();
	        var p = $(this.node, "filter");
	        if (p) {
	            var match = Str(p).match(rgurl);
	            return match && Snap.select(match[1]);
	        }
	    });
	    eve.on("snap.util.attr.filter", function (value) {
	        if (value instanceof Element && value.type == "filter") {
	            eve.stop();
	            var id = value.node.id;
	            if (!id) {
	                $(value.node, {id: value.id});
	                id = value.id;
	            }
	            $(this.node, {
	                filter: Snap.url(id)
	            });
	        }
	        if (!value || value == "none") {
	            eve.stop();
	            this.node.removeAttribute("filter");
	        }
	    });
	    /*\
	     * Snap.filter.blur
	     [ method ]
	     **
	     * Returns an SVG markup string for the blur filter
	     **
	     - x (number) amount of horizontal blur, in pixels
	     - y (number) #optional amount of vertical blur, in pixels
	     = (string) filter representation
	     > Usage
	     | var f = paper.filter(Snap.filter.blur(5, 10)),
	     |     c = paper.circle(10, 10, 10).attr({
	     |         filter: f
	     |     });
	    \*/
	    Snap.filter.blur = function (x, y) {
	        if (x == null) {
	            x = 2;
	        }
	        var def = y == null ? x : [x, y];
	        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
	            def: def
	        });
	    };
	    Snap.filter.blur.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.shadow
	     [ method ]
	     **
	     * Returns an SVG markup string for the shadow filter
	     **
	     - dx (number) #optional horizontal shift of the shadow, in pixels
	     - dy (number) #optional vertical shift of the shadow, in pixels
	     - blur (number) #optional amount of blur
	     - color (string) #optional color of the shadow
	     - opacity (number) #optional `0..1` opacity of the shadow
	     * or
	     - dx (number) #optional horizontal shift of the shadow, in pixels
	     - dy (number) #optional vertical shift of the shadow, in pixels
	     - color (string) #optional color of the shadow
	     - opacity (number) #optional `0..1` opacity of the shadow
	     * which makes blur default to `4`. Or
	     - dx (number) #optional horizontal shift of the shadow, in pixels
	     - dy (number) #optional vertical shift of the shadow, in pixels
	     - opacity (number) #optional `0..1` opacity of the shadow
	     = (string) filter representation
	     > Usage
	     | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
	     |     c = paper.circle(10, 10, 10).attr({
	     |         filter: f
	     |     });
	    \*/
	    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
	        if (typeof blur == "string") {
	            color = blur;
	            opacity = color;
	            blur = 4;
	        }
	        if (typeof color != "string") {
	            opacity = color;
	            color = "#000";
	        }
	        color = color || "#000";
	        if (blur == null) {
	            blur = 4;
	        }
	        if (opacity == null) {
	            opacity = 1;
	        }
	        if (dx == null) {
	            dx = 0;
	            dy = 2;
	        }
	        if (dy == null) {
	            dy = dx;
	        }
	        color = Snap.color(color);
	        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
	            color: color,
	            dx: dx,
	            dy: dy,
	            blur: blur,
	            opacity: opacity
	        });
	    };
	    Snap.filter.shadow.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.grayscale
	     [ method ]
	     **
	     * Returns an SVG markup string for the grayscale filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.grayscale = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
	            a: 0.2126 + 0.7874 * (1 - amount),
	            b: 0.7152 - 0.7152 * (1 - amount),
	            c: 0.0722 - 0.0722 * (1 - amount),
	            d: 0.2126 - 0.2126 * (1 - amount),
	            e: 0.7152 + 0.2848 * (1 - amount),
	            f: 0.0722 - 0.0722 * (1 - amount),
	            g: 0.2126 - 0.2126 * (1 - amount),
	            h: 0.0722 + 0.9278 * (1 - amount)
	        });
	    };
	    Snap.filter.grayscale.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.sepia
	     [ method ]
	     **
	     * Returns an SVG markup string for the sepia filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.sepia = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
	            a: 0.393 + 0.607 * (1 - amount),
	            b: 0.769 - 0.769 * (1 - amount),
	            c: 0.189 - 0.189 * (1 - amount),
	            d: 0.349 - 0.349 * (1 - amount),
	            e: 0.686 + 0.314 * (1 - amount),
	            f: 0.168 - 0.168 * (1 - amount),
	            g: 0.272 - 0.272 * (1 - amount),
	            h: 0.534 - 0.534 * (1 - amount),
	            i: 0.131 + 0.869 * (1 - amount)
	        });
	    };
	    Snap.filter.sepia.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.saturate
	     [ method ]
	     **
	     * Returns an SVG markup string for the saturate filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.saturate = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
	            amount: 1 - amount
	        });
	    };
	    Snap.filter.saturate.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.hueRotate
	     [ method ]
	     **
	     * Returns an SVG markup string for the hue-rotate filter
	     **
	     - angle (number) angle of rotation
	     = (string) filter representation
	    \*/
	    Snap.filter.hueRotate = function (angle) {
	        angle = angle || 0;
	        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
	            angle: angle
	        });
	    };
	    Snap.filter.hueRotate.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.invert
	     [ method ]
	     **
	     * Returns an SVG markup string for the invert filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.invert = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
	        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
	            amount: amount,
	            amount2: 1 - amount
	        });
	    };
	    Snap.filter.invert.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.brightness
	     [ method ]
	     **
	     * Returns an SVG markup string for the brightness filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.brightness = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
	            amount: amount
	        });
	    };
	    Snap.filter.brightness.toString = function () {
	        return this();
	    };
	    /*\
	     * Snap.filter.contrast
	     [ method ]
	     **
	     * Returns an SVG markup string for the contrast filter
	     **
	     - amount (number) amount of filter (`0..1`)
	     = (string) filter representation
	    \*/
	    Snap.filter.contrast = function (amount) {
	        if (amount == null) {
	            amount = 1;
	        }
	        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
	            amount: amount,
	            amount2: .5 - amount / 2
	        });
	    };
	    Snap.filter.contrast.toString = function () {
	        return this();
	    };
	});

	// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
	    var box = Snap._.box,
	        is = Snap.is,
	        firstLetter = /^[^a-z]*([tbmlrc])/i,
	        toString = function () {
	            return "T" + this.dx + "," + this.dy;
	        };
	    /*\
	     * Element.getAlign
	     [ method ]
	     **
	     * Returns shift needed to align the element relatively to given element.
	     * If no elements specified, parent `<svg>` container will be used.
	     - el (object) @optional alignment element
	     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
	     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
	     > Usage
	     | el.transform(el.getAlign(el2, "top"));
	     * or
	     | var dy = el.getAlign(el2, "top").dy;
	    \*/
	    Element.prototype.getAlign = function (el, way) {
	        if (way == null && is(el, "string")) {
	            way = el;
	            el = null;
	        }
	        el = el || this.paper;
	        var bx = el.getBBox ? el.getBBox() : box(el),
	            bb = this.getBBox(),
	            out = {};
	        way = way && way.match(firstLetter);
	        way = way ? way[1].toLowerCase() : "c";
	        switch (way) {
	            case "t":
	                out.dx = 0;
	                out.dy = bx.y - bb.y;
	            break;
	            case "b":
	                out.dx = 0;
	                out.dy = bx.y2 - bb.y2;
	            break;
	            case "m":
	                out.dx = 0;
	                out.dy = bx.cy - bb.cy;
	            break;
	            case "l":
	                out.dx = bx.x - bb.x;
	                out.dy = 0;
	            break;
	            case "r":
	                out.dx = bx.x2 - bb.x2;
	                out.dy = 0;
	            break;
	            default:
	                out.dx = bx.cx - bb.cx;
	                out.dy = 0;
	            break;
	        }
	        out.toString = toString;
	        return out;
	    };
	    /*\
	     * Element.align
	     [ method ]
	     **
	     * Aligns the element relatively to given one via transformation.
	     * If no elements specified, parent `<svg>` container will be used.
	     - el (object) @optional alignment element
	     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
	     = (object) this element
	     > Usage
	     | el.align(el2, "top");
	     * or
	     | el.align("middle");
	    \*/
	    Element.prototype.align = function (el, way) {
	        return this.transform("..." + this.getAlign(el, way));
	    };
	});

	module.exports = Snap


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	// ┌────────────────────────────────────────────────────────────┐ \\
	// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
	// ├────────────────────────────────────────────────────────────┤ \\
	// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
	// └────────────────────────────────────────────────────────────┘ \\

	(function (glob) {
	    var version = "0.4.2",
	        has = "hasOwnProperty",
	        separator = /[\.\/]/,
	        comaseparator = /\s*,\s*/,
	        wildcard = "*",
	        fun = function () {},
	        numsort = function (a, b) {
	            return a - b;
	        },
	        current_event,
	        stop,
	        events = {n: {}},
	        firstDefined = function () {
	            for (var i = 0, ii = this.length; i < ii; i++) {
	                if (typeof this[i] != "undefined") {
	                    return this[i];
	                }
	            }
	        },
	        lastDefined = function () {
	            var i = this.length;
	            while (--i) {
	                if (typeof this[i] != "undefined") {
	                    return this[i];
	                }
	            }
	        },
	    /*\
	     * eve
	     [ method ]

	     * Fires event with given `name`, given scope and other parameters.

	     > Arguments

	     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
	     - scope (object) context for the event handlers
	     - varargs (...) the rest of arguments will be sent to event handlers

	     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
	    \*/
	        eve = function (name, scope) {
	            name = String(name);
	            var e = events,
	                oldstop = stop,
	                args = Array.prototype.slice.call(arguments, 2),
	                listeners = eve.listeners(name),
	                z = 0,
	                f = false,
	                l,
	                indexed = [],
	                queue = {},
	                out = [],
	                ce = current_event,
	                errors = [];
	            out.firstDefined = firstDefined;
	            out.lastDefined = lastDefined;
	            current_event = name;
	            stop = 0;
	            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
	                indexed.push(listeners[i].zIndex);
	                if (listeners[i].zIndex < 0) {
	                    queue[listeners[i].zIndex] = listeners[i];
	                }
	            }
	            indexed.sort(numsort);
	            while (indexed[z] < 0) {
	                l = queue[indexed[z++]];
	                out.push(l.apply(scope, args));
	                if (stop) {
	                    stop = oldstop;
	                    return out;
	                }
	            }
	            for (i = 0; i < ii; i++) {
	                l = listeners[i];
	                if ("zIndex" in l) {
	                    if (l.zIndex == indexed[z]) {
	                        out.push(l.apply(scope, args));
	                        if (stop) {
	                            break;
	                        }
	                        do {
	                            z++;
	                            l = queue[indexed[z]];
	                            l && out.push(l.apply(scope, args));
	                            if (stop) {
	                                break;
	                            }
	                        } while (l)
	                    } else {
	                        queue[l.zIndex] = l;
	                    }
	                } else {
	                    out.push(l.apply(scope, args));
	                    if (stop) {
	                        break;
	                    }
	                }
	            }
	            stop = oldstop;
	            current_event = ce;
	            return out;
	        };
	        // Undocumented. Debug only.
	        eve._events = events;
	    /*\
	     * eve.listeners
	     [ method ]

	     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

	     > Arguments

	     - name (string) name of the event, dot (`.`) or slash (`/`) separated

	     = (array) array of event handlers
	    \*/
	    eve.listeners = function (name) {
	        var names = name.split(separator),
	            e = events,
	            item,
	            items,
	            k,
	            i,
	            ii,
	            j,
	            jj,
	            nes,
	            es = [e],
	            out = [];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            nes = [];
	            for (j = 0, jj = es.length; j < jj; j++) {
	                e = es[j].n;
	                items = [e[names[i]], e[wildcard]];
	                k = 2;
	                while (k--) {
	                    item = items[k];
	                    if (item) {
	                        nes.push(item);
	                        out = out.concat(item.f || []);
	                    }
	                }
	            }
	            es = nes;
	        }
	        return out;
	    };
	    
	    /*\
	     * eve.on
	     [ method ]
	     **
	     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
	     | eve.on("*.under.*", f);
	     | eve("mouse.under.floor"); // triggers f
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
	     > Example:
	     | eve.on("mouse", eatIt)(2);
	     | eve.on("mouse", scream);
	     | eve.on("mouse", catchIt)(1);
	     * This will ensure that `catchIt` function will be called before `eatIt`.
	     *
	     * If you want to put your handler before non-indexed handlers, specify a negative value.
	     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
	    \*/
	    eve.on = function (name, f) {
	        name = String(name);
	        if (typeof f != "function") {
	            return function () {};
	        }
	        var names = name.split(comaseparator);
	        for (var i = 0, ii = names.length; i < ii; i++) {
	            (function (name) {
	                var names = name.split(separator),
	                    e = events,
	                    exist;
	                for (var i = 0, ii = names.length; i < ii; i++) {
	                    e = e.n;
	                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
	                }
	                e.f = e.f || [];
	                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
	                    exist = true;
	                    break;
	                }
	                !exist && e.f.push(f);
	            }(names[i]));
	        }
	        return function (zIndex) {
	            if (+zIndex == +zIndex) {
	                f.zIndex = +zIndex;
	            }
	        };
	    };
	    /*\
	     * eve.f
	     [ method ]
	     **
	     * Returns function that will fire given event with optional arguments.
	     * Arguments that will be passed to the result function will be also
	     * concated to the list of final arguments.
	     | el.onclick = eve.f("click", 1, 2);
	     | eve.on("click", function (a, b, c) {
	     |     console.log(a, b, c); // 1, 2, [event object]
	     | });
	     > Arguments
	     - event (string) event name
	     - varargs (…) and any other arguments
	     = (function) possible event handler function
	    \*/
	    eve.f = function (event) {
	        var attrs = [].slice.call(arguments, 1);
	        return function () {
	            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
	        };
	    };
	    /*\
	     * eve.stop
	     [ method ]
	     **
	     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
	    \*/
	    eve.stop = function () {
	        stop = 1;
	    };
	    /*\
	     * eve.nt
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     > Arguments
	     **
	     - subname (string) #optional subname of the event
	     **
	     = (string) name of the event, if `subname` is not specified
	     * or
	     = (boolean) `true`, if current event’s name contains `subname`
	    \*/
	    eve.nt = function (subname) {
	        if (subname) {
	            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
	        }
	        return current_event;
	    };
	    /*\
	     * eve.nts
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     **
	     = (array) names of the event
	    \*/
	    eve.nts = function () {
	        return current_event.split(separator);
	    };
	    /*\
	     * eve.off
	     [ method ]
	     **
	     * Removes given function from the list of event listeners assigned to given name.
	     * If no arguments specified all the events will be cleared.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	    \*/
	    /*\
	     * eve.unbind
	     [ method ]
	     **
	     * See @eve.off
	    \*/
	    eve.off = eve.unbind = function (name, f) {
	        if (!name) {
	            eve._events = events = {n: {}};
	            return;
	        }
	        var names = name.split(comaseparator);
	        if (names.length > 1) {
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                eve.off(names[i], f);
	            }
	            return;
	        }
	        names = name.split(separator);
	        var e,
	            key,
	            splice,
	            i, ii, j, jj,
	            cur = [events];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            for (j = 0; j < cur.length; j += splice.length - 2) {
	                splice = [j, 1];
	                e = cur[j].n;
	                if (names[i] != wildcard) {
	                    if (e[names[i]]) {
	                        splice.push(e[names[i]]);
	                    }
	                } else {
	                    for (key in e) if (e[has](key)) {
	                        splice.push(e[key]);
	                    }
	                }
	                cur.splice.apply(cur, splice);
	            }
	        }
	        for (i = 0, ii = cur.length; i < ii; i++) {
	            e = cur[i];
	            while (e.n) {
	                if (f) {
	                    if (e.f) {
	                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
	                            e.f.splice(j, 1);
	                            break;
	                        }
	                        !e.f.length && delete e.f;
	                    }
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        var funcs = e.n[key].f;
	                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
	                            funcs.splice(j, 1);
	                            break;
	                        }
	                        !funcs.length && delete e.n[key].f;
	                    }
	                } else {
	                    delete e.f;
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        delete e.n[key].f;
	                    }
	                }
	                e = e.n;
	            }
	        }
	    };
	    /*\
	     * eve.once
	     [ method ]
	     **
	     * Binds given event handler with a given name to only run once then unbind itself.
	     | eve.once("login", f);
	     | eve("login"); // triggers f
	     | eve("login"); // no listeners
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) same return function as @eve.on
	    \*/
	    eve.once = function (name, f) {
	        var f2 = function () {
	            eve.unbind(name, f2);
	            return f.apply(this, arguments);
	        };
	        return eve.on(name, f2);
	    };
	    /*\
	     * eve.version
	     [ property (string) ]
	     **
	     * Current version of the library.
	    \*/
	    eve.version = version;
	    eve.toString = function () {
	        return "You are running Eve " + version;
	    };
	    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return eve; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : (glob.eve = eve));
	})(this);


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _snapsvgImporter = __webpack_require__(287);

	var _snapsvgImporter2 = _interopRequireDefault(_snapsvgImporter);

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  svg: {
	    lib: _snapsvgImporter2['default'],
	    pathInitial: 'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
	    pathOpen: 'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
	    animate: function animate(path) {
	      var pos = 0;
	      var steps = this.pathOpen.split(';');
	      var stepsTotal = steps.length;
	      var mina = window.mina;

	      var nextStep = function nextStep() {
	        if (pos > stepsTotal - 1) return;

	        path.animate({ path: steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function () {
	          nextStep();
	        });

	        pos++;
	      };

	      nextStep();
	    }
	  },

	  morphShape: function morphShape(isOpen, width, right) {
	    return {
	      position: 'fixed',
	      width: '100%',
	      height: '100%',
	      right: right ? 'inherit' : 0,
	      left: right ? 0 : 'inherit',
	      transform: right ? 'rotateY(180deg)' : 'rotateY(0deg)'
	    };
	  },

	  menuWrap: function menuWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
	      transition: isOpen ? 'transform 0.4s 0s' : 'transform 0.4s'
	    };
	  },

	  menu: function menu(isOpen, width, right) {
	    width -= 140;
	    return {
	      position: 'fixed',
	      transform: isOpen ? '' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
	      transition: isOpen ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
	      opacity: isOpen ? 1 : 0
	    };
	  },

	  item: function item(isOpen, width, right, nthChild) {
	    width -= 140;
	    return {
	      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
	      transition: isOpen ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
	      opacity: isOpen ? 1 : 0
	    };
	  },

	  closeButton: function closeButton(isOpen, width, right) {
	    width -= 140;
	    return {
	      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + 'px, 0, 0)' : 'translate3d(-' + width + 'px, 0, 0)',
	      transition: isOpen ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
	      opacity: isOpen ? 1 : 0
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  pageWrap: function pageWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? '' : right ? 'translate3d(-' + width + 'px, 0, 0)' : 'translate3d(' + width + 'px, 0, 0)',
	      transition: 'all 0.5s'
	    };
	  },

	  outerContainer: function outerContainer(isOpen) {
	    return {
	      overflow: isOpen ? '' : 'hidden'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  pageWrap: function pageWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? '' : right ? 'translate3d(-' + width + 'px, 0, 0) rotateY(15deg)' : 'translate3d(' + width + 'px, 0, 0) rotateY(-15deg)',
	      transformOrigin: right ? '100% 50%' : '0% 50%',
	      transformStyle: 'preserve-3d',
	      transition: 'all 0.5s'
	    };
	  },

	  outerContainer: function outerContainer(isOpen) {
	    return {
	      perspective: '1500px',
	      overflow: isOpen ? '' : 'hidden'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  pageWrap: function pageWrap(isOpen, width) {
	    return {
	      transform: isOpen ? '' : 'translate3d(0, 0, -' + width + 'px)',
	      transformOrigin: '100%',
	      transformStyle: 'preserve-3d',
	      transition: 'all 0.5s'
	    };
	  },

	  outerContainer: function outerContainer() {
	    return {
	      perspective: '1500px'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  pageWrap: function pageWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
	      transformStyle: 'preserve-3d',
	      transition: 'all 0.5s',
	      overflow: isOpen ? '' : 'hidden'
	    };
	  },

	  outerContainer: function outerContainer(isOpen) {
	    return {
	      perspective: '1500px',
	      overflow: isOpen ? '' : 'hidden'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _menuFactory = __webpack_require__(219);

	var _menuFactory2 = _interopRequireDefault(_menuFactory);

	var styles = {

	  menuWrap: function menuWrap(isOpen) {
	    return {
	      transform: isOpen ? '' : 'translate3d(0, -100%, 0)',
	      transition: 'all 0.5s ease-in-out'
	    };
	  },

	  pageWrap: function pageWrap(isOpen, width, right) {
	    return {
	      transform: isOpen ? '' : right ? 'translate3d(-' + width + 'px, 0, 0)' : 'translate3d(' + width + 'px, 0, 0)',
	      transition: 'all 0.5s'
	    };
	  },

	  outerContainer: function outerContainer(isOpen) {
	    return {
	      perspective: '1500px',
	      perspectiveOrigin: '0% 50%',
	      overflow: isOpen ? '' : 'hidden'
	    };
	  }
	};

	exports['default'] = (0, _menuFactory2['default'])(styles);
	module.exports = exports['default'];

/***/ }
]))