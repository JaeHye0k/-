import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authenticateReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
