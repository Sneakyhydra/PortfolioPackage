// Hooks
import { useState, useEffect, Fragment } from 'react';

// Components
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Description from '../components/Description';
import Contact from '../components/Contact';

const Home = () => {
	// Theme
	const [theme, setTheme] = useState('theme-light');

	useEffect(() => {
		// Set Theme on load
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}

		// Check for preference changes using event listener
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'theme-dark' : 'theme-light';
				setTheme(newColorScheme);
			});

		// Return function to remove event listener
		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', (event) => {});
		};
	}, []);

	return (
		<Fragment>
			<Navbar theme={theme} setTheme={setTheme} />
			<Landing theme={theme} />
			<Description theme={theme} />
			<Skills theme={theme} />
			<Projects theme={theme} />
			<Experience theme={theme} />
			<Contact theme={theme} />
		</Fragment>
	);
};

export default Home;
