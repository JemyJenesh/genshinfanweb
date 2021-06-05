import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: {
		isDark: localStorage.getItem("isDark")
			? JSON.parse(localStorage.getItem("isDark"))
			: true,
		color: localStorage.getItem("color") ?? "blue",
	},
	reducers: {
		toggleDark: (state) => {
			const newType = !state.isDark;
			localStorage.setItem("isDark", newType);
			state.isDark = newType;
		},
		changeColor: (state, action) => {
			localStorage.setItem("color", action.payload);
			state.color = action.payload;
		},
	},
});

export const { toggleDark, changeColor } = themeSlice.actions;

export const selectColor = (state) => state.theme.color;
export const selectIsDark = (state) => state.theme.isDark;

export default themeSlice.reducer;
