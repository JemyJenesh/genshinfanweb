import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	open: false,
};

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		toggleDrawer: (state) => {
			state.open = !state.open;
		},
	},
});

export const { toggleDrawer } = drawerSlice.actions;

export const selectOpen = (state) => state.drawer.open;

export default drawerSlice.reducer;
