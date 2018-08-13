export const INPUT_CHANGED = 'INPUT_CHANGED';

export default (input) => ({
  type: INPUT_CHANGED,
  payload: {input}
});