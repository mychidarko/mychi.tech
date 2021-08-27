import GlobalStyles from "styles/global";
import "449.css/dist/449.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
