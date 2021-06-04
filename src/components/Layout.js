import { Paper, Box, Container } from "@material-ui/core";
import { BottomTab, Header, HideOnScroll } from "components";

export default function Layout({ children }) {
	return (
		<Paper elevation={0} square style={{ minHeight: "100vh" }}>
			<HideOnScroll>
				<Header />
			</HideOnScroll>
			<Container fixed>
				<Box py={2}>{children}</Box>
			</Container>
			<HideOnScroll direction="up">
				<BottomTab />
			</HideOnScroll>
		</Paper>
	);
}
