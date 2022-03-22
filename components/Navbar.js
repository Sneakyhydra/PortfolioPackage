// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Css
import styles from '../styles/Navbar.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Navbar = ({ theme, setTheme }) => {
	// Function to toggle theme
	const changeTheme = () => {
		if (theme === 'theme-light') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	};

	// Icon to display depending on theme
	let icon =
		theme === 'theme-light' ? (
			<button onClick={changeTheme} className={styles.icon}>
				<DarkModeIcon fontSize='large' />
			</button>
		) : (
			<button onClick={changeTheme} className={styles.icon}>
				<LightModeIcon fontSize='large' />
			</button>
		);

	return (
		<nav
			className={
				(theme === 'theme-dark' ? 'theme-dark' : 'theme-light') +
				' ' +
				styles.navbar
			}
		>
			{icon}
		</nav>
	);
};

Navbar.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

export default Navbar;
