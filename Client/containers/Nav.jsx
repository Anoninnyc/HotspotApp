import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCollectionList, toggleFilterList, logout, submitSearch, handleChange, showSearchResults, toggleFriendReqList} from '../actions/index';
import request from 'superagent';
console.log('handleChange', handleChange);

class Nav extends React.Component {

  friendReqClick(e) {
    e.preventDefault();
    this.props.actions.toggleFriendReqList(this.props.PanelMode, this.props.isOpen);
  }
  collectionClick(e) {
    e.preventDefault();
    this.props.actions.toggleCollectionList(this.props.PanelMode, this.props.isOpen);
  }
  filterClick(e) {
    e.preventDefault();
    this.props.actions.toggleFilterList(this.props.PanelMode, this.props.isOpen);
  }

  handleChange(e) {
    e.preventDefault();
    this.props.actions.handleChange(e.target.value);
  }

  showResults(e) {
    e.preventDefault();
    this.props.actions.showSearchResults(this.props.PanelMode, this.props.isOpen);
  }

  handleEnter(e) {
    if (e.which === 13) {
      this.submitSearch(e);
    }
  }

  submitSearch(e) {
    e.preventDefault();
    let lat = this.props.coord.lat;
    let lng = this.props.coord.lng;
    let searchQuery = {
      term: this.props.searchInput,
      limit: 10,
      radius: this.props.meter,
      ll: `${lat},${lng}` 
    };
    console.log(searchQuery);
    this.props.actions.submitSearch(searchQuery);
  }

  submitFriendReq(e) {
    e.preventDefault();

    let friendRequest = {
      requestee: document.getElementsByClassName('friendToAdd')[0].value
    };
    console.log(friendRequest);
    const data = new Promise((resolve, reject) => {
      request.post('/api/friendRequest')
      .send(friendRequest)
      .end((err, res) => {
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



  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse ourNav">
        <div className="row bar">
          <div className="col-md-6">
            <input className='navbarSearch' onKeyPress={this.handleEnter.bind(this)} onChange={this.handleChange.bind(this)}type="text" placeholder="Search here"/>
            <div className='btn btn-default btn-lg search' onClick={this.submitSearch.bind(this)}>Search</div>
            <div className='btn btn-default btn-lg search' onClick={this.showResults.bind(this)}>Show Search Results</div>
            </div>
          <div className="col-md-6">
            <div onClick={this.collectionClick.bind(this)} className='btn btn-default btn-lg' >Collection</div>
            <div onClick={this.filterClick.bind(this)} className='btn btn-default btn-lg'>Filter</div>
            <div onClick={this.friendReqClick.bind(this)} className='btn btn-default btn-lg' >Friend Requests</div>
            <a className='btn btn-default btn-lg' href="/logout">Sign Out</a>
          </div>
        </div>

      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({toggleCollectionList, toggleFilterList, logout, submitSearch, handleChange, showSearchResults, toggleFriendReqList}, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    PanelMode: state.PanelMode.panelMode,
    isOpen: state.PanelMode.isOpen,
    searchInput: state.SearchBar.searchInput,
    coord: state.SearchBar.coord,
    meter: state.SearchBar.meter,
    currFriends: state.CurrFriends.currFriends
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
