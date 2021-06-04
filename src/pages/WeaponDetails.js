import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import { Rating, Skeleton } from "@material-ui/lab";
import { ImageList, Layout } from "components";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { axios } from "utils";

const useStyles = makeStyles((theme) => ({
	weaponImg: {
		width: "200px",
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

export default function WeaponDetails() {
	const { name } = useParams();
	const classes = useStyles();
	const fetchWeapons = async () => {
		const { data } = await axios(`/weapons/info/${name}`);
		return data;
	};
	const { data, isLoading } = useQuery(["weapons", name], fetchWeapons);

	React.useEffect(() => {
		document.title = `Weapon / ${name}`;
	}, [name]);

	if (isLoading)
		return (
			<Layout title={name}>
				<Grid container justify="center" spacing={4}>
					<Grid item xs={12} lg={4}>
						<Box maxWidth="300px" mx="auto">
							<Skeleton variant="rect" width={"100%"} height={200} />
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
	const { weapon } = data.payload;

	return (
		<Layout showTabs={false} title={name}>
			<Grid container justify="flex-end" spacing={4}>
				<Grid
					container
					item
					xs={12}
					lg={4}
					className={classes.sticky}
					alignContent="flex-start"
				>
					<Grid item xs={12} md={4} lg={12}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							mb={3}
						>
							<img
								className={classes.weaponImg}
								src={weapon.iconUrl}
								alt={weapon.originalIconUrl}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={8} lg={12} className={classes.textCenter}>
						<Typography variant="h5" gutterBottom>
							{weapon.name}
						</Typography>
						<Box mb={3}>
							<Typography gutterBottom>{weapon.description}</Typography>
						</Box>
						<Grid container item xs={12}>
							<Grid item xs={6} className={classes.textCenter}>
								<Typography variant="subtitle2" color="textSecondary">
									Rarity
								</Typography>
								<Rating value={weapon.rarity} readOnly />
							</Grid>
							<Grid item xs={6} className={classes.textCenter}>
								<Typography variant="subtitle2" color="textSecondary">
									Type
								</Typography>
								<Typography color="secondary">{weapon.weaponType}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item xs={12} lg={8}>
					<Grid item xs={12}>
						<ImageList
							title="Ascension Materials"
							list={weapon.ascensionMaterials}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={8}>
					<Grid item xs={12}>
						<ImageList
							title="Ascension Enemy Drops"
							list={weapon.ascensionEnemyDrops}
						/>
					</Grid>
				</Grid>
				{/* <Grid item xs={12} lg={8}>
					<Typography>Ascension Cost</Typography>
				</Grid> */}
			</Grid>
		</Layout>
	);
}
