import React from "react";
import { Character, Layout } from "components";
import { useQuery } from "react-query";
import { axios } from "utils";
import { useMediaQuery, useTheme, Box } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import Skeleton from "@material-ui/lab/Skeleton";
import Alert from "@material-ui/lab/Alert";

export default function Characters() {
	const fetchCharacters = async () => {
		const { data } = await axios("/characters?infoDataSize=minimal");
		return data;
	};
	const { data, isLoading } = useQuery("characters", fetchCharacters);

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
					{[...new Array(20)].map((character, i) => (
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
				cellHeight={sm ? (md ? 320 : 280) : 260}
				cols={sm ? (md ? 5 : 3) : 2}
			>
				{data &&
					data.payload.characters.map((character) => (
						<GridListTile key={character.name}>
							<Character character={character} />
							<GridListTileBar title={character.name} />
						</GridListTile>
					))}
			</GridList>
			<Box mt={2}>
				<Alert severity="info">All characters show!</Alert>
			</Box>
		</Layout>
	);
}
