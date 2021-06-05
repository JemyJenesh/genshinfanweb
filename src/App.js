import { Route, Switch } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import {
	CharacterDetails,
	Characters,
	Home,
	Settings,
	WeaponDetails,
	Weapons,
} from "./pages";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectIsDark, selectColor } from "slices/themeSlice";
import { theme } from "common";

const queryClient = new QueryClient();

export default function App() {
	const isDark = useSelector(selectIsDark);
	const color = useSelector(selectColor);
	const currentTheme = theme(isDark, color);
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={currentTheme}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/characters" exact component={Characters} />
					<Route path="/characters/:name" component={CharacterDetails} />
					<Route path="/weapons" exact component={Weapons} />
					<Route path="/weapons/:name" component={WeaponDetails} />
					<Route path="/settings" component={Settings} />
				</Switch>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
