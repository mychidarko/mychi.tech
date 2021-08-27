import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

const heroStyles: StyleFunction = () => ({
	height: "100vh",
	// maxHeight: 850,
	background: theme.colors.transparent,
	paddingLeft: "15%",
	paddingRight: "15%",
	color: theme.colors.white,
	fontSize: theme.typography.fontSizes.xl,
	position: "relative",

	".hero-img": {
		zIndex: 2,
		height: "100%",
		maxHeight: 350,
		width: "100%",
		maxWidth: 350,
		...theme.presets.rounded,
	},

	".hero-particles": {
		position: "absolute",
		left: 10,
		top: 0,
		zIndex: 0,

		canvas: {
			width: "100%",
			height: "100vh",
		},
	},
});

export default heroStyles;
