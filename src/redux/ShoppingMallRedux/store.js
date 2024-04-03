import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

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
    auth: authenticateReducer,
  },
});

export default store;
