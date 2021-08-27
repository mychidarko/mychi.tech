import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

const topNavStyles: StyleFunction = ({ active, hidden }: { active: boolean, hidden: boolean }) => ({
	background: active ? theme.colors.primary : theme.colors.transparent,
	paddingLeft: "15%",
	paddingRight: "15%",
	color: theme.colors.white,
	// color: theme.colors.primary,
	zIndex: 3,
	width: "calc(100vw - 30%)",
	display: hidden ? "none" : "flex",
	boxShadow: active ? theme.shadows.md : "none",

	h3: {
		fontWeight: theme.typography.fontWeights.bold,
		fontSize: theme.typography.fontSizes["2xl"],
		fontFamily: theme.typography.fonts.default,
	},

	".topnav__links": {
		div: {
			cursor: "pointer",

			"&:not(:first-child)": {
				marginLeft: 50,
			},
		},

		button: {
			borderRadius: 4,
			border: `1px solid ${theme.colors.white}`,
			background: theme.colors.white,
			color: theme.colors.primary,
		},
	},
});

export default topNavStyles;
