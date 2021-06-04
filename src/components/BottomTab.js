import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Divider from "@material-ui/core/Divider";
import { routes } from "utils";
import { useHistory } from "react-router";

const useStyles = makeStyles({
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		zIndex: 2,
	},
});

const BottomTab = forwardRef((props, ref) => {
	const classes = useStyles();
	const history = useHistory();
	const [value, setValue] = React.useState(history.location.pathname);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		history.push(newValue);
	};

	return (
		<div className={classes.root} ref={ref}>
			<Divider />
			<BottomNavigation value={value} onChange={handleChange}>
				{routes.map(({ name, path, icon }) => (
					<BottomNavigationAction
						key={path}
						label={name}
						value={path}
						icon={icon}
					/>
				))}
			</BottomNavigation>
		</div>
	);
});

export default BottomTab;
