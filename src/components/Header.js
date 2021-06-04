import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "img/icon.png";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectType, toggleDark } from "slices/themesSlice";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "space-between",
		borderBottom: "1px solid " + theme.palette.divider,
	},
}));

const Header = forwardRef((props, ref) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const type = useSelector(selectType);
	const icon = type === "dark" ? <Brightness7Icon /> : <Brightness4Icon />;
	const handleToggleDark = () => dispatch(toggleDark());

	return (
		<AppBar ref={ref} position="sticky" elevation={0} color="default">
			<Toolbar className={classes.root}>
				<Avatar alt="app icon" src={Icon} />
				<Typography variant="h6">Genshin Fan Web</Typography>
				<IconButton edge="end" onClick={handleToggleDark}>
					{icon}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
});

export default Header;
