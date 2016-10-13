webpackHotUpdate(0,{

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Map = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../containers/Map\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
	      var _this2 = this;

	      $.get('/api/spots', function (data, err) {
	        console.log('hi');
	      }).then(function (result) {
	        console.log("this is result.data", result.data);
	        _this2.setState({
	          collection: result.data
	        });
	        console.log("And this is the collection:", _this2.state.collection);
	      });
	    }
	  }, {
	    key: 'postSpots',
	    value: function postSpots(spotObj) {
	      var _this3 = this;

	      $.post('/api/spots', spotObj, function (data, err) {
	        console.log('hii');
	      }).then(function (result) {
	        _this3.getSpots(); //
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

/***/ }

})