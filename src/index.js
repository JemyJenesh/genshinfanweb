import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "utils";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./common";

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
