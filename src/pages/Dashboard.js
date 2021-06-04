import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectOpen, toggleDrawer } from "slices/drawerSlice";

const { DashboardHeader } = require("components");

const Dashboard = () => {
	const dispatch = useDispatch();
	const open = useSelector(selectOpen);
	return (
		<div>
			<button onClick={() => dispatch(toggleDrawer())}>
				{open ? "yes" : "no"}
			</button>

			<DashboardHeader />
			<Box p={3}>
				{[...new Array(12)].map(() => (
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
						sequi odit rerum beatae. Error, sit! Accusamus voluptatum ipsa
						laborum magni, quaerat laboriosam nemo iste laudantium quod
						deleniti? Tempore eveniet eaque ea eius, alias culpa eos neque
						suscipit expedita dolore? Iure eveniet voluptates quasi nisi eaque
						commodi est sequi, quisquam quia quo modi harum rerum, placeat totam
						consequatur aliquid unde neque fugiat dicta, id asperiores quis sit!
						Nostrum ullam laboriosam nihil consequatur doloremque! Dolore quam
						laudantium ut maxime cupiditate accusamus modi, rerum illum, magnam
						architecto eligendi quas, reiciendis illo libero. Quaerat, officia
						labore. Quibusdam, ut ipsa quaerat esse fugit possimus soluta.
					</Typography>
				))}
			</Box>
		</div>
	);
};

export default Dashboard;
