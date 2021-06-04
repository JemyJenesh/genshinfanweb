import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "slices/drawerSlice";
import themesReducer from "slices/themesSlice";

const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		themes: themesReducer,
	},
});
export default store;
