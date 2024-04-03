import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authenticateSlice from "./reducers/authenticateSlice";

// const rootReducer = combineReducers({
//   product: productReducer,
//   auth: authenticateReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authenticateSlice,
  },
});

export default store;
