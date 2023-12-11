import { createSlice } from "@reduxjs/toolkit";
import { setItem, getItem } from "../helpers/persistance-storage";

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: getItem("token")
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
			setItem("token", payload.token);
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
