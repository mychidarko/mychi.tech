import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

const contactStyles: StyleFunction = () => ({
	b: {
		fontSize: theme.typography.fontSizes.xl,

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
	},
});

export default contactStyles;
