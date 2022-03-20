import { useState, useEffect } from 'react';

// Components
import Navbar from '../src/Navbar';
import Landing from '../src/Landing';
import Experience from '../src/Experience';
import Projects from '../src/Projects';
import Skills from '../src/Skills';
import About from '../src/About';

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
		<div>
			<Navbar theme={theme} setTheme={setTheme} />
			<Landing theme={theme} />
			<Experience theme={theme} />
			<Projects theme={theme} />
			<Skills theme={theme} />
			<About theme={theme} />
		</div>
	);
};

export default Home;
