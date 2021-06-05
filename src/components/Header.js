import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "img/icon.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import PaletteIcon from "@material-ui/icons/Palette";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeColor,
	selectColor,
	selectIsDark,
	toggleDark,
} from "slices/themeSlice";
import { useHistory } from "react-router";
import { useState } from "react";
import { blue, green, pink, amber, deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "space-between",
		borderBottom: "1px solid " + theme.palette.divider,
	},
	marginLeftAuto: {
		marginLeft: "auto",
	},
	marginLeft: {
		marginLeft: theme.spacing(1),
	},
	btn: {
		width: 50,
		height: 50,
		cursor: "pointer",
		borderRadius: "100%",
	},
}));

const Header = forwardRef((props, ref) => {
	const { title } = props;
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);
	const isDark = useSelector(selectIsDark);
	const color = useSelector(selectColor);
	const icon = isDark ? <Brightness7Icon /> : <Brightness4Icon />;
	const handleToggleDark = () => dispatch(toggleDark());
	const handleToggleColor = (color) => {
		dispatch(changeColor(color));
	};
	const handleBack = () => history.goBack();

	return (
		<>
			<AppBar ref={ref} position="sticky" elevation={0} color="default">
				<Toolbar className={classes.root}>
					{title ? (
						<IconButton edge="start" onClick={handleBack}>
							<ArrowBackIcon />
						</IconButton>
					) : (
						<Avatar alt="app icon" src={Icon} />
					)}
					<Typography variant="h6">{title ?? "Genshin Fan Web"}</Typography>
					<IconButton
						edge="start"
						onClick={handleToggleDark}
						className={classes.marginLeftAuto}
					>
						{icon}
					</IconButton>
					<IconButton
						edge="end"
						onClick={toggleOpen}
						className={classes.marginLeft}
					>
						<PaletteIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Dialog onClose={toggleOpen} open={isOpen}>
				<DialogContent>
					<Typography gutterBottom align="center">
						Select a theme color
					</Typography>
					<Box
						display="flex"
						flexWrap="wrap"
						justifyContent="space-around"
						alignItems="center"
					>
						<Box
							bgcolor={blue[600]}
							className={classes.btn}
							mr={2}
							border={color === "blue" ? 4 : 0}
							onClick={() => handleToggleColor("blue")}
						/>
						<Box
							bgcolor={pink[600]}
							className={classes.btn}
							mr={2}
							border={color === "pink" ? 4 : 0}
							onClick={() => handleToggleColor("pink")}
						/>
						<Box
							bgcolor={green[600]}
							className={classes.btn}
							mr={2}
							border={color === "green" ? 4 : 0}
							onClick={() => handleToggleColor("green")}
						/>
						<Box
							bgcolor={deepOrange[600]}
							className={classes.btn}
							mr={2}
							border={color === "orange" ? 4 : 0}
							onClick={() => handleToggleColor("orange")}
						/>
						<Box
							bgcolor={amber[600]}
							className={classes.btn}
							border={color === "amber" ? 4 : 0}
							onClick={() => handleToggleColor("amber")}
						/>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
});

export default Header;
