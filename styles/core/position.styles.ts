import { CSSObject } from "@emotion/serialize";
import theme from "styles/theme";
// import { StyleFunction } from "./../@types/styles";

export const flex: Record<string, CSSObject> = {
	centerAll: {
		height: 60,
		background: theme.colors.white,
		padding: 20,
		display: "flex",
	},
};
