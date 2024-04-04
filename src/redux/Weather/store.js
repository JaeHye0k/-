import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/weatherSlice";

const weatherStore = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

export default weatherStore;
