import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Poppins, sans-serif',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
	palette: {
		primary: {
			main: "#7047EB",
		},
	},
});

export default theme;
