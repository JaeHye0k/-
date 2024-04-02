const initialState = {
  id: "",
  password: "",
  auth: false,
};

function authenticateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        auth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        id: "",
        password: "",
        auth: false,
      };
    default:
      return { ...state };
  }
}

export default authenticateReducer;
