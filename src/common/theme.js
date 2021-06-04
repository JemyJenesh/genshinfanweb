import { createMuiTheme } from "@material-ui/core/styles";

const typography = {
	fontFamily: "Poppins, sans-serif",
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
};

// const colors = {
// 	red: "#dc2626",
// 	blue: "#1976D2",
// 	purple: "#7047EB",
// };

const darkTheme = createMuiTheme({
	typography,
	palette: {
		type: "dark",
		primary: {
			main: "#dc2626",
		},
	},
});

const lightTheme = createMuiTheme({
	typography,
	palette: {
		primary: {
			main: "#dc2626",
		},
	},
});

const Themes = { darkTheme, lightTheme };

export default Themes;
