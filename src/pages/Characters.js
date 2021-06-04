import React from "react";
import { Character, Layout } from "components";
import { useQuery } from "react-query";
import { axios } from "utils";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default function Characters() {
	const fetchCharacters = async () => {
		const { data } = await axios("/characters?infoDataSize=minimal");
		return data;
	};
	const { data, isLoading } = useQuery("characters", fetchCharacters);

	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.up("sm"));
	const md = useMediaQuery(theme.breakpoints.up("md"));

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
		</Layout>
	);
}
