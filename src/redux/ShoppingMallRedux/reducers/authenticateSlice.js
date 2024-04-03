import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  password: "",
  auth: false,
};

const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.auth = true;
    },
    logout(state, action) {
      state.id = "";
      state.password = "";
      state.auth = false;
    },
  },
});

// function authenticateReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "LOGIN":
//       return {
//         ...state,
//         id: payload.id,
//         password: payload.password,
//         auth: true,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         id: "",
//         password: "",
//         auth: false,
//       };
//     default:
//       return { ...state };
//   }
// }

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
