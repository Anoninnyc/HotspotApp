webpackHotUpdate(0,{

/***/ 200:
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
	      var _this2 = this;

	      var that = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.item.requestor,
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              _this2.accept(that.props.item.requestor);
	            } },
	          'Accept'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              _this2.decline(that.props.item.requestor);
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

/***/ }

})