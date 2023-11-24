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
		userStart: state => {
			state.isLoading = true;
		},
		userSuccess: state => {},
		userFailur: state => {}
	}
});

export const { userStart, userSuccess, userFailur } = authSlice.actions;
export default authSlice.reducer;
