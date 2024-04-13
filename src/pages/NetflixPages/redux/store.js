import { configureStore } from "@reduxjs/toolkit";
import rcSlice from "./reducer/rcSlice";
import globalSlice from "./reducer/globalSlice";

export const store = configureStore({
  reducer: {
    remoteController: rcSlice,
    global: globalSlice,
  },
});
