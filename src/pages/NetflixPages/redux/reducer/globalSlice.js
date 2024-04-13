import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en-US",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload.language;
    },
  },
});

export const { setLanguage } = globalSlice.actions;
export default globalSlice.reducer;
