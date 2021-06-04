import { Characters, Home, Weapons } from "pages";

import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import ColorizeIcon from "@material-ui/icons/Colorize";

const routes = [
	{
		name: "Characters",
		path: "/characters",
		component: Characters,
		icon: <GroupIcon />,
	},
	{
		name: "Home",
		path: "/",
		component: Home,
		icon: <HomeIcon />,
	},
	{
		name: "Weapons",
		path: "/weapons",
		component: Weapons,
		icon: <ColorizeIcon style={{ transform: "rotate(90deg)" }} />,
	},
];

export default routes;
