import { combineReducers } from 'redux';
import FriendReqs from './reducer_friendReqs';
import CurrFriends from './reducer_Friends';
import CollectionRestaurantsFilters from './reducer_collection_restaurants';
import FilterSelectedRestaurants from './reducer_filtered_restaurants';
import PanelMode from './reducer_panel_mode';
import SearchBar from './reducer_search_bar';

const rootReducer = combineReducers({
  CollectionRestaurantsFilters: CollectionRestaurantsFilters,
  PanelMode: PanelMode,
  FilterSelectedRestaurants: FilterSelectedRestaurants,
  SearchBar: SearchBar,
  FriendReqs: FriendReqs,
  CurrFriends: CurrFriends
});

export default rootReducer;
