import { Paper, Box, Container } from "@material-ui/core";
import { BottomTab, Header, HideOnScroll, ScrollTop } from "components";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

export default function Layout({ children }) {
	return (
		<Paper elevation={0} square style={{ minHeight: "100vh" }}>
			<div id="back-to-top-anchor" />
			<HideOnScroll>
				<Header />
			</HideOnScroll>
			<Container fixed>
				<Box py={2}>{children}</Box>
			</Container>
			<HideOnScroll direction="up">
				<BottomTab />
			</HideOnScroll>
			<ScrollTop>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</Paper>
	);
}
