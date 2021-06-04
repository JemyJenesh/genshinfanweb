import React from "react";
import { Layout, Weapon } from "components";
import { useQuery } from "react-query";
import { axios } from "utils";
import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Skeleton from "@material-ui/lab/Skeleton";
import Alert from "@material-ui/lab/Alert";

export default function Weapons() {
	const fetchWeapons = async () => {
		const { data } = await axios("/weapons?infoDataSize=minimal");
		return data;
	};
	const { data, isLoading } = useQuery("weapons", fetchWeapons);

	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.up("sm"));
	const md = useMediaQuery(theme.breakpoints.up("md"));

	if (isLoading)
		return (
			<Layout>
				<GridList
					spacing={sm ? (md ? 10 : 8) : 6}
					cellHeight={sm ? (md ? 320 : 280) : 260}
					cols={sm ? (md ? 5 : 3) : 2}
				>
					{[...new Array(20)].map((weapon, i) => (
						<GridListTile key={i}>
							<Skeleton variant="rect" width="100%" height="100%" />
						</GridListTile>
					))}
				</GridList>
			</Layout>
		);

	return (
		<Layout>
			<GridList
				spacing={sm ? (md ? 10 : 8) : 6}
				// cellHeight={sm ? (md ? 320 : 280) : 260}
				cellHeight={sm ? 220 : 200}
				cols={sm ? (md ? 5 : 3) : 2}
			>
				{data &&
					data.payload.weapons.map((weapon) => (
						<GridListTile key={weapon._id}>
							<Weapon weapon={weapon} />
							<GridListTileBar title={weapon.name} />
						</GridListTile>
					))}
			</GridList>
			<Box mt={2}>
				<Alert severity="info">All weapons show!</Alert>
			</Box>
		</Layout>
	);
}
