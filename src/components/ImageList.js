import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default function ImageList({ title, list }) {
	const theme = useTheme();
	const md = useMediaQuery(theme.breakpoints.up("md"));
	const lg = useMediaQuery(theme.breakpoints.up("lg"));
	return (
		<Box mb={6}>
			<Box>
				<Typography color="primary" variant="h5" align="center" gutterBottom>
					{title}
				</Typography>
			</Box>
			<Box display="flex" justifyContent="center">
				<GridList
					style={{ justifyContent: "center" }}
					cellHeight={280}
					cols={md ? (lg ? 2 : 3) : 1}
					spacing={12}
				>
					{list.map(({ name, iconUrl }) => (
						<GridListTile key={name} style={{ textAlign: "center" }}>
							<img style={{ maxWidth: 300 }} src={iconUrl} alt={name} />
							<GridListTileBar title={name} />
						</GridListTile>
					))}
				</GridList>
			</Box>
		</Box>
	);
}
