const initialState = {
  number: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        number: state.number + action.payload,
      };

    case 'DECREMENT':
      return {
        ...state,
        number: state.number > 0 ? state.number - action.payload : state.number,
      };

    default:
      return state;
  }
};
