export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
      break;
    case 'decrement':
      return { ...state, value: state.value - 1 };
      break;
    case 'reset':
      return { ...state, value: 0 };
      break;

    default:
      return state;
      break;
  }
};
