import {
	Grid,
	Box,
	makeStyles,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Layout } from "components";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { axios } from "utils";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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
	const theme = useTheme();
	const md = useMediaQuery(theme.breakpoints.up("sm"));
	const lg = useMediaQuery(theme.breakpoints.up("md"));
	const fetchWeapons = async () => {
		const { data } = await axios(`/weapons/info/${name}`);
		return data;
	};
	const { data, isLoading } = useQuery(["weapons", name], fetchWeapons);

	React.useEffect(() => {
		document.title = `Weapon / ${name}`;
	}, [name]);

	if (isLoading) return <p>Loading..</p>;
	const { weapon } = data.payload;

	return (
		<Layout showTabs={false}>
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
						<Box mb={4}>
							<Typography
								color="secondary"
								variant="h5"
								align="center"
								gutterBottom
							>
								Ascension Materials
							</Typography>
						</Box>
						<Box display="flex" justifyContent="center">
							<GridList
								style={{ justifyContent: "center" }}
								cellHeight={240}
								cols={md ? (lg ? 3 : 2) : 1}
								spacing={12}
							>
								{weapon.ascensionMaterials.map((material) => (
									<GridListTile
										key={material.name}
										style={{ textAlign: "center" }}
									>
										<img
											style={{ maxWidth: 200 }}
											src={material.iconUrl}
											alt={material.name}
										/>
										<GridListTileBar title={material.name} />
									</GridListTile>
								))}
							</GridList>
						</Box>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={8}>
					<Grid item xs={12}>
						<Box mt={6} mb={2}>
							<Typography
								color="secondary"
								variant="h5"
								align="center"
								gutterBottom
							>
								Ascension Enemy Drops
							</Typography>
						</Box>
						<Box display="flex" justifyContent="center">
							<GridList
								style={{ justifyContent: "center" }}
								cellHeight={240}
								cols={md ? (lg ? 3 : 2) : 1}
								spacing={12}
							>
								{weapon.ascensionEnemyDrops.map((material) => (
									<GridListTile
										key={material.name}
										style={{ textAlign: "center" }}
									>
										<img
											style={{ maxWidth: 200 }}
											src={material.iconUrl}
											alt={material.name}
										/>
										<GridListTileBar title={material.name} />
									</GridListTile>
								))}
							</GridList>
						</Box>
					</Grid>
				</Grid>
				<Grid item xs={12} lg={8}>
					<Typography>Ascension Cost</Typography>
				</Grid>
			</Grid>
		</Layout>
	);
}
