import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ColorizeIcon from "@material-ui/icons/Colorize";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		zIndex: 2,
	},
	weaponIcon: {
		transform: "rotate(90deg)",
	},
});

const BottomTab = forwardRef((props, ref) => {
	const classes = useStyles();
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root} ref={ref}>
			<Divider />
			<BottomNavigation value={value} onChange={handleChange}>
				<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
				<BottomNavigationAction
					label="Characters"
					value="Characters"
					icon={<GroupIcon />}
				/>
				<BottomNavigationAction
					label="Weapons"
					value="weapons"
					icon={<ColorizeIcon className={classes.weaponIcon} />}
				/>
				<BottomNavigationAction
					label="Settings"
					value="settings"
					icon={<SettingsIcon />}
				/>
			</BottomNavigation>
		</div>
	);
});

export default BottomTab;
