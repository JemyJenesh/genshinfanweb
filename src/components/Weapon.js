import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	media: {
		width: "100%",
	},
}));

export default function Weapon({ weapon }) {
	const { name, iconUrl } = weapon;
	const classes = useStyles();
	return (
		<NavLink to={`/weapons/${name}`}>
			<img className={classes.media} src={iconUrl} alt={name} />
		</NavLink>
	);
}
