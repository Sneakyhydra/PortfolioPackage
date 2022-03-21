import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import styles from '../styles/Navbar.module.css';

const Navbar = ({ theme, setTheme }) => {
	const changeTheme = () => {
		if (theme === 'theme-light') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	};

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

export default Navbar;
