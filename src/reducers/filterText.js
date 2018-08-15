import {SET_FILTER_TEXT} from "../actions/setFilterText";

export default (state, {type, payload}) => {
  switch (type) {
    case SET_FILTER_TEXT:
      return payload.filterText;

    default:
      return state;
  }
};