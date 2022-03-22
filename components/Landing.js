import ReactTyped from 'react-typed';

// Css
import styles from '../styles/Landing.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Landing = ({ theme }) => {
	const subtitles = [
		'Full-stack developer 🌐',
		'Exploring web 3',
		'Just getting started 📈',
	];

	return (
		<div
			className={
				styles.container +
				' ' +
				theme +
				' flex flex-col gap-3 justify-center pl-4'
			}
		>
			<h1 className='text-6xl font-light'>Hi, I&#39;m Dhruv</h1>
			<h2 className='text-xl p-1'>
				<ReactTyped strings={subtitles} typeSpeed={40} backSpeed={50} loop />
			</h2>
			<div className='flex flex-row gap-2'></div>
		</div>
	);
};

Landing.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Landing;
