import { useEffect } from "react";
import GlobalStyles from "styles/global";
import NProgress from 'nprogress';
import router from 'next/router';
import AOS from 'aos';

import 'aos/dist/aos.css';
import "449.css/dist/449.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
	});

	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
