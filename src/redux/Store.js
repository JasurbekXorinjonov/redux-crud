import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

const rootreducer = combineReducers({ user: Reducer });
const Store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk, logger),
});

export default Store;
