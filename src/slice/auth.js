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
		// Login
		loginUserStart: state => {
			state.isLoading = true;
		},
		loginUserSuccess: state => {},
		loginUserFailur: state => {},
		// Register
		registerUserStart: state => {
			state.isLoading = true;
		},
		registerUserSuccess: state => {
			state.loggedIn = true;
			state.isLoading = false;
		},
		registerUserFailure: state => {
			state.error = "error";
			state.isLoading = false;
		}
	}
});

export const {
	loginUserStart,
	loginUserSuccess,
	loginUserFailur,
	registerUserStart,
	registerUserSuccess,
	registerUserFailure
} = authSlice.actions;
export default authSlice.reducer;
