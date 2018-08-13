export const INPUT_CHANGE = 'INPUT_CHANGE';

export default (filterText) => ({
  type: INPUT_CHANGE,
  payload: {filterText}
});