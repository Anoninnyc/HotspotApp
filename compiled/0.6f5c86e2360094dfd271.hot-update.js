webpackHotUpdate(0,{

/***/ 195:
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

	var _index = __webpack_require__(184);

	var _superagent = __webpack_require__(185);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	console.log('handleChange', _index.handleChange);

	var Nav = function (_React$Component) {
	  _inherits(Nav, _React$Component);

	  function Nav() {
	    _classCallCheck(this, Nav);

	    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	  }

	  _createClass(Nav, [{
	    key: 'friendReqClick',
	    value: function friendReqClick(e) {
	      e.preventDefault();
	      this.props.actions.toggleFriendReqList(this.props.PanelMode, this.props.isOpen);
	    }
	  }, {
	    key: 'collectionClick',
	    value: function collectionClick(e) {
	      e.preventDefault();
	      this.props.actions.toggleCollectionList(this.props.PanelMode, this.props.isOpen);
	    }
	  }, {
	    key: 'filterClick',
	    value: function filterClick(e) {
	      e.preventDefault();
	      this.props.actions.toggleFilterList(this.props.PanelMode, this.props.isOpen);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      e.preventDefault();
	      this.props.actions.handleChange(e.target.value);
	    }
	  }, {
	    key: 'showResults',
	    value: function showResults(e) {
	      e.preventDefault();
	      this.props.actions.showSearchResults(this.props.PanelMode, this.props.isOpen);
	    }
	  }, {
	    key: 'handleEnter',
	    value: function handleEnter(e) {
	      console.log(e);
	    }
	  }, {
	    key: 'submitSearch',
	    value: function submitSearch(e) {
	      e.preventDefault();
	      var lat = this.props.coord.lat;
	      var lng = this.props.coord.lng;
	      var searchQuery = {
	        term: this.props.searchInput,
	        limit: 10,
	        radius: this.props.meter,
	        ll: lat + ',' + lng
	      };
	      console.log(searchQuery);
	      this.props.actions.submitSearch(searchQuery);
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
	          //;
	          console.log(res);
	          return resolve(res);
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'nav',
	        { className: 'navbar navbar-dark bg-inverse ourNav' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row bar' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2.default.createElement('input', { className: 'navbarSearch', onKeyPress: this.handleEnter, onChange: this.handleChange.bind(this), type: 'text', placeholder: 'Search here' }),
	            _react2.default.createElement(
	              'div',
	              { className: 'btn btn-default btn-lg search', onClick: this.submitSearch.bind(this) },
	              'Search'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'btn btn-default btn-lg search', onClick: this.showResults.bind(this) },
	              'Show Search Results'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2.default.createElement(
	              'div',
	              { onClick: this.collectionClick.bind(this), className: 'btn btn-default btn-lg' },
	              'Collection'
	            ),
	            _react2.default.createElement(
	              'div',
	              { onClick: this.filterClick.bind(this), className: 'btn btn-default btn-lg' },
	              'Filter'
	            ),
	            _react2.default.createElement(
	              'div',
	              { onClick: this.friendReqClick.bind(this), className: 'btn btn-default btn-lg' },
	              'Friend Requests'
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'btn btn-default btn-lg', href: '/logout' },
	              'Sign Out'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Nav;
	}(_react2.default.Component);

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)({ toggleCollectionList: _index.toggleCollectionList, toggleFilterList: _index.toggleFilterList, logout: _index.logout, submitSearch: _index.submitSearch, handleChange: _index.handleChange, showSearchResults: _index.showSearchResults, toggleFriendReqList: _index.toggleFriendReqList }, dispatch)
	  };
	}

	function mapStateToProps(state) {
	  return {
	    PanelMode: state.PanelMode.panelMode,
	    isOpen: state.PanelMode.isOpen,
	    searchInput: state.SearchBar.searchInput,
	    coord: state.SearchBar.coord,
	    meter: state.SearchBar.meter
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Nav);

/***/ }

})