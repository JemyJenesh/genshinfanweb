import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	media: {
		width: "100%",
	},
}));

export default function Weapon({ weapon }) {
	const { name, iconUrl, isReleased } = weapon;
	const classes = useStyles();

	if (!isReleased)
		return (
			<Box
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography color="primary">Unreleased</Typography>
			</Box>
		);

	return (
		<NavLink to={`/weapons/${name}`}>
			<img className={classes.media} src={iconUrl} alt={name} />
		</NavLink>
	);
}
