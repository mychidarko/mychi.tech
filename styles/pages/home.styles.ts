import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

export const homeStyles: StyleFunction = () => ({
	".skills": {
		flexWrap: "wrap",

		".skill": {
			width: "calc(50% - 100px)",
		},
	},
	[theme.breakpoints.md]: {
		".skills__section": {
			paddingLeft: "calc(15% + 0px)",
			paddingRight: "calc(15% + 0px)",
		},
		".contact__section": {
			paddingLeft: "calc(15% + 0px)",
			paddingRight: "calc(15% + 0px)",
		},
	},
});
