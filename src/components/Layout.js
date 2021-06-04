import { Paper } from "@material-ui/core";
import { BottomTab, Header, HideOnScroll } from "components";

export default function Layout({ children }) {
	return (
		<Paper elevation={0} square style={{ minHeight: "100vh" }}>
			<HideOnScroll>
				<Header />
			</HideOnScroll>
			{children}
			<HideOnScroll direction="up">
				<BottomTab />
			</HideOnScroll>
		</Paper>
	);
}
