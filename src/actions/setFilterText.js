export const SET_FILTER_TEXT = 'SET_FILTER_TEXT';

export default (filterText) => ({
  type: SET_FILTER_TEXT,
  payload: {filterText}
});