import { Route, Switch } from "react-router";
import { Characters, Home, Settings, Weapons } from "./pages";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectType } from "slices/themesSlice";
import { Themes } from "common";

export default function App() {
	const type = useSelector(selectType);
	const theme = type === "dark" ? Themes.darkTheme : Themes.lightTheme;
	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/characters" exact component={Characters} />
				<Route path="/weapons" exact component={Weapons} />
				<Route path="/settings" exact component={Settings} />
			</Switch>
		</ThemeProvider>
	);
}
