import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducer/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
