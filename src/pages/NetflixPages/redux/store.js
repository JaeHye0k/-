import { configureStore } from "@reduxjs/toolkit";
import rcSlice from "./reducer/rcSlice";

export const store = configureStore({
  reducer: {
    movie: rcSlice,
  },
});
