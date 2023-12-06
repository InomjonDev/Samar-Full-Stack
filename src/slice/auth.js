import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true;
		},
		signUserSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = payload;
		},
		signUserFailuer: (state, { payload, type }) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

export const { signUserStart, signUserSuccess, signUserFailuer } =
	authSlice.actions;
export default authSlice.reducer;
