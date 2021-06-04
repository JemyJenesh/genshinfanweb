import { createSlice } from "@reduxjs/toolkit";

export const themesSlice = createSlice({
	name: "themes",
	initialState: {
		type: localStorage.getItem("type") ?? "dark",
	},
	reducers: {
		toggleDark: (state) => {
			const newType = state.type === "dark" ? "light" : "dark";
			localStorage.setItem("type", newType);
			state.type = newType;
		},
	},
});

export const { toggleDark } = themesSlice.actions;

export const selectType = (state) => state.themes.type;

export default themesSlice.reducer;
