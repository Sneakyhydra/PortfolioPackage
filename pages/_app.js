// Head
import Head from 'next/head';

// Css
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Head>
				<title>Dhruv Rishishwar</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
