import { css, Global } from '@emotion/react';
import theme from './theme';

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');

				body {
					margin: 0;
					padding: 0;
					font-family: 'Sen', sans-serif;
					background: ${theme.colors.primary};
				}

				.page {
					position: relative;
					color: white;
					padding-bottom: 100px;
				}

				h4 {
					font-size: ${theme.typography.fontSizes["3xl"]};
				}

				p, small, b, strong {
					line-height: ${theme.typography.lineHeights.base};
					letter-spacing: ${theme.typography.letterSpacings.tight}
				}
			`}
		/>
	);
};

export default GlobalStyles;
