import DashboardIcon from "@material-ui/icons/Dashboard";
import { Dashboard } from "pages";

const routes = [
	{
		name: "Dashboard",
		path: "/dashboard",
		component: Dashboard,
		icon: <DashboardIcon />,
	},
];

export default routes;
