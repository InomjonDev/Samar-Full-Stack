import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	loggedIn: false,
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
		registerUserSuccess: state => {},
		registerUserFailure: state => {}
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
