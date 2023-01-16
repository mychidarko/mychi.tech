import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

const heroStyles: StyleFunction = () => ({
	height: "calc(100vh - 220px)",
	// maxHeight: 850,
	background: theme.colors.transparent,
	paddingLeft: 0,
	paddingRight: 0,
	color: theme.colors.white,
	fontSize: theme.typography.fontSizes.xl,
	position: "relative",
	paddingTop: 120,
	paddingBottom: 120,

	[theme.breakpoints.md]: {
		paddingLeft: "calc(15% - 120px)",
		paddingRight: "calc(15% - 120px)",

		".hero-content": {
			paddingLeft: 120,
			paddingRight: 120,
		},
	},

	".hero-content": {
		[theme.breakpoints.xs]: {
			padding: 0,
			flexDirection: "column-reverse",
		},

		a: {
			color: theme.colors.white,
			zIndex: 10,

			"&:hover": {
				color: theme.colors.blueGray[400],
			},
		},
	},

	".hero-img": {
		zIndex: 2,
		height: "100%",
		maxHeight: 350,
		width: "100%",
		maxWidth: 350,
		position: "static",
		...theme.presets.rounded,
	},

	".hero-particles": {
		position: "absolute",
		left: 10,
		top: 0,
		zIndex: -1,
		height: "100vh",

		canvas: {
			width: "100%",
			height: "100vh",
		},
	},
});

export default heroStyles;
