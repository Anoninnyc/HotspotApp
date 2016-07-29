import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CollectionModel from '../components/CollectionModel';
import ResultModel from '../components/ResultModel';
import FilterItem from '../components/FilterItem';
import * as Actions from '../actions';
import CollectionDetailModel from '../components/CollectionDetailModel';

const Menu = require('react-burger-menu').slide;

class Panel extends React.Component {

  componentDidMount() {
    this.props.actions.fetchCollection();
    this.props.actions.fetchFriendRequests();

  }

  render() {
    let panelItems;

    this.props.actions.createFilters(this.props.totalCollection, this.props.filters);
if (this.props.panelMode === 'friendRequests'){
      panelItems = this.props.searchResults.map((restaurant) => {
        return (<ResultModel item={restaurant}
          viewCollectionItem={this.props.actions.viewCollectionItem}
          key={restaurant.name}/>);
      });
    }

else if (this.props.panelMode === 'results'){
      panelItems = this.props.searchResults.map((restaurant) => {
        return (<ResultModel item={restaurant}
          viewCollectionItem={this.props.actions.viewCollectionItem}
          key={restaurant.name}/>);
      });
    } else if (this.props.panelMode === 'filter') {
      panelItems = this.props.filters.map((filter) => {
        return (<FilterItem filter={filter}
                            appliedFilters={this.props.filterSelected}
                            toggleFilter={this.props.actions.toggleFilter}
                            collection={this.props.totalCollection}
                            key={filter}/>);
      });
    } else if (this.props.filteredCollection.length !== 0) {
      panelItems = this.props.filteredCollection.map((restaurant) => {
        return (<CollectionModel item={restaurant} key={restaurant.name}/>);
      });
    } else {
      panelItems = this.props.totalCollection.map((restaurant) => {
        return (<CollectionModel item={restaurant}
          viewCollectionItem={this.props.actions.viewCollectionItem}
          key={restaurant.name}/>);
      });
    }
    console.log(panelItems,this.props.totalCollection,this.props.searchResults);
    return (
      <Menu id={ 'panel' }
            right
            noOverlay
            customBurgerIcon={ false }
            customCrossIcon={ false }
            isOpen={ this.props.isOpen }>
        {panelItems}

      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalCollection: state.CollectionRestaurantsFilters.collection,
    filters: state.FilterSelectedRestaurants.filters,
    filterSelected: state.FilterSelectedRestaurants.filterSelected,
    filteredCollection: state.FilterSelectedRestaurants.filteredRestaurants,
    panelMode: state.PanelMode.panelMode,
    isOpen: state.PanelMode.isOpen,
    searchResults:state.SearchBar.searchResults

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
