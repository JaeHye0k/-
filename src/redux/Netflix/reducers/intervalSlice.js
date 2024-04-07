import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOnBannerInterval: false,
  bannerIntervalId: null,
};

const intervalSlice = createSlice({
  name: "interval",
  initialState,
  reducers: {
    setIsOnBannerInterval(state, action) {
      state.isOnBannerInterval = action.payload;
    },
    setBannerIntervalId(state, action) {
      state.bannerIntervalId = action.payload;
    },
  },
});

export const intervalActions = intervalSlice.actions;
export default intervalSlice.reducer;
