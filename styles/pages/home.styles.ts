import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

export const homeStyles: StyleFunction = () => ({
	".skills": {
		flexWrap: "wrap",

		".skill": {
			width: "calc(50% - 100px)",
		},
	},
});
