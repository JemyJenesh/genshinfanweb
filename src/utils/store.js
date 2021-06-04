import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "slices/drawerSlice";

const store = configureStore({
	reducer: {
		drawer: drawerReducer,
	},
});
export default store;
