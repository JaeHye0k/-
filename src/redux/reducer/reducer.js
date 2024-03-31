const initialState = {
  count: 0,
  fullName: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.gap };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.gap };
    case "LOGIN":
      return {
        ...state,
        fullName: action.payload.name.firstName + action.payload.name.lastName,
      };
    default:
      return { ...state };
  }
}

export default reducer;
