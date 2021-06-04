import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import { ImageList, Layout } from "components";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { axios } from "utils";
import clsx from "clsx";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	weaponImg: {
		width: "100%",
		height: 500,
		objectFit: "contain",
	},
	textCenter: {
		textAlign: "center",
	},
	sticky: {
		[theme.breakpoints.up("lg")]: {
			position: "sticky",
			top: 0,
		},
	},
}));

export default function CharacterDetails() {
	const { name } = useParams();
	const classes = useStyles();
	const fetchCharacter = async () => {
		const { data } = await axios(`/characters/info/${name}?infoDataSize=all`);
		return data;
	};
	const { data, isLoading } = useQuery(["characters", name], fetchCharacter);

	React.useEffect(() => {
		document.title = `Character / ${name}`;
	}, [name]);

	if (isLoading)
		return (
			<Layout title={name}>
				<Grid container justify="center" spacing={4}>
					<Grid item xs={12} lg={4}>
						<Box maxWidth="300px" mx="auto">
							<Skeleton variant="rect" width={"100%"} height={400} />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
						</Box>
					</Grid>
					<Grid item xs={12} lg={8}>
						<Skeleton variant="rect" width={"100%"} height="60vh" />
					</Grid>
				</Grid>
			</Layout>
		);
	const { character } = data.payload;

	return (
		<Layout showTabs={false} title={name}>
			<Grid container justify="flex-end" spacing={4}>
				<Grid container item xs={12} lg={4} alignContent="flex-start">
					<Grid
						item
						xs={12}
						className={clsx(classes.sticky, classes.textCenter)}
					>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							mb={3}
						>
							<img
								className={classes.weaponImg}
								src={character.cardImageURL}
								alt={character.name}
							/>
						</Box>
						<Typography variant="h5" gutterBottom>
							{character.name}
						</Typography>
						<Box mb={3}>
							<Typography gutterBottom>{character.description}</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12} lg={8}>
					<Grid item xs={12}>
						<ImageList title="Talent Books" list={character.talentBook} />
					</Grid>
					<Grid item xs={12}>
						<ImageList
							title="Common Ascension Materials"
							list={character.commonAscensionMaterials}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
}
