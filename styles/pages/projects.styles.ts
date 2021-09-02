import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

export const projectsStyles: StyleFunction = () => ({
	".page__content": {
		marginTop: 120,
		paddingLeft: "15%",
		paddingRight: "15%",
		paddingBottom: 50,
		color: theme.colors.white,

		".projects__list": {
			".project-group": {
				"&__tabs": {},

				"&__container": {
					// marginBottom: 50,
				},

				"&__title": {
					marginBottom: 20,
				},

				"&__list": {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					marginBottom: 50,
				},

				"&__project": {
					width: "41%",
				},
			},
		},
	},
});
