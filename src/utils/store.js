import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "slices/drawerSlice";
import themeReducer from "slices/themeSlice";

const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		theme: themeReducer,
	},
});
export default store;
