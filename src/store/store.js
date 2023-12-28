import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import ArticleReducer from "../slice/article";

const reducers = combineReducers({
	auth: AuthReducer,
	article: ArticleReducer
});

export const store = configureStore({
	reducer: reducers
});
