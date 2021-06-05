import {
	blue,
	purple,
	green,
	pink,
	orange,
	amber,
	deepOrange,
} from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const getColor = (color) => {
	switch (color) {
		case "blue":
			return blue[600];
		case "pink":
			return pink[600];
		case "green":
			return green[600];
		case "purple":
			return purple[600];
		case "orange":
			return deepOrange[600];
		case "amber":
			return amber[600];
		default:
			return blue[600];
	}
};

const theme = (dark = true, primary = "blue") =>
	createMuiTheme({
		typography: {
			fontFamily: "Poppins, sans-serif",
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 600,
			fontWeightBold: 700,
		},
		palette: {
			type: dark ? "dark" : "light",
			primary: {
				main: getColor(primary),
			},
		},
	});

export default theme;

// red: "#dc2626",
// blue: "#1976D2",
// purple: "#7047EB",
