import { Route, Switch } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { CharacterDetails, Characters, Home, Settings, Weapons } from "./pages";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectType } from "slices/themesSlice";
import { Themes } from "common";

const queryClient = new QueryClient();

export default function App() {
	const type = useSelector(selectType);
	const theme = type === "dark" ? Themes.darkTheme : Themes.lightTheme;
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/characters" exact component={Characters} />
					<Route path="/characters/:name" exact component={CharacterDetails} />
					<Route path="/weapons" exact component={Weapons} />
					<Route path="/settings" exact component={Settings} />
				</Switch>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
