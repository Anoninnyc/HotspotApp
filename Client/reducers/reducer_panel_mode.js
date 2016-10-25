import { NAV_CLICK_FILTER, NAV_CLICK_COLLECTION, SHOW_RESULTS, NAV_CLICK_FRIENDREQS, NAV_HELP  } from '../actions/index';

const initialState = {
  panelMode: 'none',
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NAV_CLICK_FILTER:
      return {
        ...state,
        panelMode: action.payload.panelMode,
        isOpen: action.payload.isOpen
      };
    case NAV_CLICK_COLLECTION:
      return {
        ...state,
        panelMode: action.payload.panelMode,
        isOpen: action.payload.isOpen
      };
      case SHOW_RESULTS:
      return {
        ...state,
        panelMode: action.payload.panelMode,
        isOpen: action.payload.isOpen
      };
      case NAV_CLICK_FRIENDREQS:
      return {
        ...state,
        panelMode: action.payload.panelMode,
        isOpen: action.payload.isOpen
      };
      case NAV_HELP:
      return {
        ...state,
        panelMode: action.payload.panelMode,
        isOpen: action.payload.isOpen
      };
    default:
      return state;
  }
}
