function login(id, password) {
  return (dispatch, getState) => {
    dispatch({
      type: "LOGIN",
      payload: { id, password },
    });
  };
}
function logout() {
  return (dispatch, getState) => {
    dispatch({
      type: "LOGOUT",
      payload: "",
    });
  };
}

export const authenticateActions = { login, logout };
