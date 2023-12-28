import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	articles: [],
	error: null
};

export const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true;
		},
		getArticlesSuccess: (state, { payload }) => {
			state.articles = payload;
			state.isLoading = false;
		},
		getArticlesFailure: (state, { payload }) => {
			state.error = "error";
			state.isLoading = false;
		}
	}
});

export const { getArticlesStart, getArticlesSuccess, getArticlesFailure } =
	articleSlice.actions;
export default articleSlice.reducer;
