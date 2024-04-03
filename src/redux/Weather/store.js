import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import weatherReducer from "./reducers/weatherReducer";

const weatherStore = createStore(weatherReducer, applyMiddleware(thunk));

export default weatherStore;
