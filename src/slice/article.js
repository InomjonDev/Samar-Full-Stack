import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	articles: [],
	articleDetail: null,
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
		},
		getArticleDetailStart: state => {
			state.isLoading = true;
		},
		getArticleDetailSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.articleDetail = payload;
		},
		getArticleDetailFailure: state => {
			state.isLoading = false;
		},
		postArticleStart: state => {
			state.isLoading = true;
		},
		postArticleSuccess: (state, { paylaod }) => {
			state.isLoading = false;
		},
		postArticleFailure: state => {
			state.isLoading = false;
			state.error = "error";
		}
	}
});

export const {
	getArticlesStart,
	getArticlesSuccess,
	getArticlesFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
	getArticleDetailFailure,
	postArticleStart,
	postArticleSuccess,
	postArticleFailure
} = articleSlice.actions;
export default articleSlice.reducer;
