import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Accountslice from "./Accountslice";
const store = configureStore({
  reducer: Accountslice,
});
export default store;
