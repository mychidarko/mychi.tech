import { url } from "inspector";
import theme from "styles/theme";
import { StyleFunction } from "./../@types/styles";

export const contentCard: StyleFunction = () => ({
	background: theme.colors.blueGray[900],
	borderRadius: 25,
});

export const blogCard: StyleFunction = (background: string) => ({
	background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.85)), url(${background})`,
	padding: 30,
	borderRadius: 25,
	width: "calc(50% - 70px)",
	height: 400,
	backgroundPosition: "center",
	backgroundSize: "cover",
	position: "relative",
	transition: "ease all .5s",
	textDecoration: "none",
	color: theme.colors.white,

	"&:hover": {
		transform: "scale(1.015)",
	},

	".stats": {
		position: "absolute",
		right: 30,
		top: 30,

		".stat": {
			span: {
				marginLeft: 5,
			},

			"&:not(:last-child)": {
				marginRight: 20,
			},

			"&.hearts": {
				color: theme.colors.red[100],
			},

			"&.comments": {
				color: theme.colors.amber[400],
			},
		},
	},

	".details": {
		marginTop: "55%",

		h4: {
			fontWeight: theme.typography.fontWeights.extrabold,
		},
	},

	".tags": {
		fontSize: theme.typography.fontSizes.sm,

		span: {
			"&:not(:last-child)": {
				marginRight: 10,
			},
		},
	},
});

export const projectCard: StyleFunction = (background: string) => {
	if (!background) {
		background =
			"https://opengraph.githubassets.com/5d042ac0ac3c8592e46b1c17196c738b695e7d3d54eb3eb8c66fdfee21775650/mychidarko/changelly";
	}

	return {
		// width: "100%",
		background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.85)), url(${background})`,
		height: 400,
		backgroundPosition: "center",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPositionY: "top",
		position: "relative",
		transition: "ease all .5s",
		display: "flex",
		flexDirection: "column",
		marginBottom: 20,

		"&:hover": {
			transform: "scale(1.015)",
		},

		h4: {
			marginTop: "auto",
			marginBottom: 10,
			fontWeight: theme.typography.fontWeights.extrabold,
		},

		p: {
			marginBottom: 30,
		},
	};
};
