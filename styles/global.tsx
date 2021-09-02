import { css, Global } from "@emotion/react";
import theme from "./theme";

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");

				body {
					margin: 0;
					padding: 0;
					font-family: "Sen", sans-serif;
					background: ${theme.colors.primary};
				}

				.page {
					position: relative;
					color: white;
				}

				h4 {
					font-size: ${theme.typography.fontSizes["3xl"]};
				}

				p,
				small,
				b,
				strong {
					line-height: ${theme.typography.lineHeights.base};
					letter-spacing: ${theme.typography.letterSpacings.tight};
				}

				ul > li:not(:last-child) {
					margin-bottom: 15px;
				}

				#nprogress {
					pointer-events: none;
				}

				#nprogress .bar {
					background: ${theme.colors.white};

					position: fixed;
					z-index: 1031;
					top: 0;
					left: 0;
					width: 100%;
					height: 2px;
					border-radius: 8px;
				}

				#nprogress .peg {
					display: block;
					position: absolute;
					right: 0px;
					width: 100px;
					height: 100%;
					box-shadow: 0 0 10px ${theme.colors.white},
						0 0 5px ${theme.colors.white};
					opacity: 1;

					-webkit-transform: rotate(3deg) translate(0px, -4px);
					-ms-transform: rotate(3deg) translate(0px, -4px);
					transform: rotate(3deg) translate(0px, -4px);
				}

				#nprogress .spinner {
					display: block;
					position: fixed;
					z-index: 1031;
					top: 15px;
					right: 15px;
				}

				#nprogress .spinner-icon {
					width: 18px;
					height: 18px;
					box-sizing: border-box;

					border: solid 2px transparent;
					border-top-color: ${theme.colors.white};
					border-left-color: ${theme.colors.white};
					border-radius: 50%;

					-webkit-animation: nprogress-spinner 400ms linear infinite;
					animation: nprogress-spinner 400ms linear infinite;
				}

				.nprogress-custom-parent {
					overflow: hidden;
					position: relative;
				}

				.nprogress-custom-parent #nprogress .spinner,
				.nprogress-custom-parent #nprogress .bar {
					position: absolute;
				}

				@-webkit-keyframes nprogress-spinner {
					0% {
						-webkit-transform: rotate(0deg);
					}
					100% {
						-webkit-transform: rotate(360deg);
					}
				}

				@keyframes nprogress-spinner {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}
		/>
	);
};

export default GlobalStyles;
