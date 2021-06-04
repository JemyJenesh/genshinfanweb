import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

export default function HideOnScroll({ children, direction = "down" }) {
	const trigger = useScrollTrigger({ threshold: 50 });
	return (
		<Slide appear={false} direction={direction} in={!trigger}>
			{children}
		</Slide>
	);
}
