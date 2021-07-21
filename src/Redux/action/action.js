export const incrementAction = num => ({
  type: 'INCREMENT',
  payload: num || 1,
});

export const decrementAction = num => ({
  type: 'DECREMENT',
  payload: num || 1,
});
