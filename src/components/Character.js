import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	media: {
		width: "100%",
	},
}));

export default function Character({ character }) {
	const { name, compressedImageURL } = character;
	const classes = useStyles();
	return (
		<NavLink to={`/characters/${name}`}>
			<img className={classes.media} src={compressedImageURL} alt={name} />
		</NavLink>
	);
}
