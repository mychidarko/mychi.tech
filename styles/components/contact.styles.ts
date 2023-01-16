import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

const contactStyles: StyleFunction = () => ({
	b: {
		fontSize: theme.typography.fontSizes.xl,

		[theme.breakpoints.xs]: {
			fontSize: `${theme.typography.fontSizes["2xl"]} !important`,
			textAlign: "center",
		},

		span: {
			fontWeight: theme.typography.fontWeights.black,
			color: theme.colors.blueGray[400],
		},
	},

	a: {
		color: theme.colors.white,

		"&:hover": {
			color: theme.colors.blueGray[400],
		},

		[theme.breakpoints.xs]: {
			svg: {
				width: 30,
				height: 30,
			},
		},
	},
});

export default contactStyles;
