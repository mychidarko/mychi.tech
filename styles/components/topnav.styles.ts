import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

const topNavStyles: StyleFunction = ({ active, hidden }) => ({
	zIndex: hidden ? -1 : 100,
	color: theme.colors.white,
	width: "100vw",
	opacity: hidden ? 0 : 1,
	boxShadow: active ? theme.shadows.md : "none",
	background: active ? theme.colors.primary : theme.colors.transparent,
	transition: "ease-in all .2s",

	h3: {
		fontWeight: theme.typography.fontWeights.bold,
		fontSize: theme.typography.fontSizes["2xl"],
		fontFamily: theme.typography.fonts.default,
	},

	".topnav__logo": {
		paddingLeft: "10%",

		[theme.breakpoints.md]: {
			paddingLeft: "15%",
		},
	},

	".topnav__menu": {
		paddingRight: "10%",

		[theme.breakpoints.md]: {
			paddingRight: "15%",
		},
	},

	".topnav__link": {
		"&.-active": {
			color: theme.colors.red[400],
		},
	},
});

export default topNavStyles;
