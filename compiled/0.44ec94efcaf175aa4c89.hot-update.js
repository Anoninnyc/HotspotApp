webpackHotUpdate(0,{131:function(e,t,n){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{totalCollection:e.CollectionRestaurantsFilters.collection,filters:e.FilterSelectedRestaurants.filters,filterSelected:e.FilterSelectedRestaurants.filterSelected,filteredCollection:e.FilterSelectedRestaurants.filteredRestaurants,panelMode:e.PanelMode.panelMode,isOpen:e.PanelMode.isOpen,searchResults:e.SearchBar.searchResults,friendRequests:e.FriendReqs.friendReqs}}function c(e){return{actions:(0,m.bindActionCreators)(O,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),d=n(5),p=o(d),f=n(23),m=n(19),h=n(125),y=o(h),v=n(128),g=o(v),b=n(126),E=o(b),C=n(127),R=o(C),q=n(11),O=l(q),F=n(124),S=(o(F),n(132)),w=n(67),_=o(w),x=n(211).slide,M=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.actions.fetchCollection(),this.props.actions.fetchFriendRequests(),this.props.actions.fetchCurrentFriends(),console.log("panel has mounted!!!")}},{key:"submitFriendReq",value:function(e){e.preventDefault();var t={requestee:document.getElementsByClassName("friendToAdd")[0].value};console.log(t),new Promise(function(e,n){_["default"].post("/api/friendRequest").send(t).end(function(t,l){return t?(console.log(t),n(t)):(console.log("response test",l.text),l.text.indexOf("exist")!==-1?((0,S.fade)(".doesntExist"),console.log("doesnt exist")):l.text.indexOf("request sent")!==-1?((0,S.fade)(".requestSent"),console.log("request sent!!")):l.text.indexOf("already send")!==-1?((0,S.fade)(".alreadySent"),console.log("request already sent")):((0,S.fade)(".alreadyAFriend"),document.getElementsByClassName("alreadyAFriend")[0].style.display="inline"),e(l))})})}},{key:"render",value:function(){var e=this,t=void 0;return this.props.actions.createFilters(this.props.totalCollection,this.props.filters),console.log(this.props.panelMode),"friendRequests"===this.props.panelMode?t=p["default"].createElement("div",null,p["default"].createElement("div",null,p["default"].createElement("input",{className:"friendToAdd ",type:"text",placeholder:"Add a Friend"}),p["default"].createElement("button",{className:"button",onClick:this.submitFriendReq.bind(this)},"Send Request"),p["default"].createElement("div",{className:"mess alreadyAFriend"}," Already a friend "),p["default"].createElement("div",{className:"mess doesntExist"}," This Person hasn't signed up "),p["default"].createElement("div",{className:"mess requestSent"}," Request Sent! "),p["default"].createElement("div",{className:"mess alreadySent"}," Already sent a friend request "),this.props.friendRequests.length?null:p["default"].createElement("p",{className:"noPending"},"No pending friend requests")),p["default"].createElement("div",null,this.props.friendRequests.map(function(e){return p["default"].createElement(R["default"],{item:e})}))):"results"===this.props.panelMode?t=this.props.searchResults.length?this.props.searchResults.map(function(t){return p["default"].createElement(g["default"],{item:t,viewCollectionItem:e.props.actions.viewCollectionItem,key:t.name})}):p["default"].createElement("div",null,p["default"].createElement("p",{className:"panelHeader"},"Search Something!")):"filter"===this.props.panelMode?t=this.props.filters.map(function(t){return p["default"].createElement(E["default"],{filter:t,appliedFilters:e.props.filterSelected,toggleFilter:e.props.actions.toggleFilter,collection:e.props.totalCollection,key:t})}):0!==this.props.filteredCollection.length?t=this.props.filteredCollection.map(function(e){return p["default"].createElement(y["default"],{item:e,key:e.name})}):"collection"===this.props.panelMode&&(console.log("This should be the collection",this.props.totalCollection),t=this.props.totalCollection.length?this.props.totalCollection.map(function(t){return p["default"].createElement(y["default"],{item:t,viewCollectionItem:e.props.actions.viewCollectionItem,key:t.name})}):p["default"].createElement("div",null,p["default"].createElement("p",{className:"panelHeader"},"Add some places to your collection!"))),p["default"].createElement(x,{style:{color:"blue"},id:"panel",right:!0,noOverlay:!0,customBurgerIcon:!1,customCrossIcon:!1,isOpen:this.props.isOpen},t)}}]),t}(p["default"].Component);t["default"]=(0,f.connect)(i,c)(M)}});