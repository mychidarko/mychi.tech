import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

export const blogStyles: StyleFunction = () => ({
	".page__content": {
		marginTop: 120,
		paddingLeft: "15%",
		paddingRight: "15%",
		paddingBottom: 50,
		color: theme.colors.white,

		[theme.breakpoints.mdDown]: {
			paddingLeft: "10%",
			paddingRight: "10%",
		},
	},

	".blog__welcome": {
		img: {
			...theme.presets.rounded,
			width: 150,
			height: 150,
		},
	},

	".blog__list": {
		flexWrap: "wrap",

		".blog__post": {
			marginBottom: 20,

			[theme.breakpoints.mdDown]: {
				width: "100%",
			},
		},
	},
});
