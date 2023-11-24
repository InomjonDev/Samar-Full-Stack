import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import AuthReducer from "../slice/auth";
import AuthReducer from "../slice/auth";

const reducers = combineReducers({
	auth: AuthReducer
});

export const store = configureStore({
	reducer: reducers
});
