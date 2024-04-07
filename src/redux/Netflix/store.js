import { configureStore } from "@reduxjs/toolkit";
import intervalSlice from "./reducers/intervalSlice";

const netflixStore = configureStore({
  reducer: {
    interval: intervalSlice,
  },
});

export default netflixStore;
