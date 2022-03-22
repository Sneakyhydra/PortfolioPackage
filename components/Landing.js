// Css
import styles from '../styles/Landing.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Landing = ({ theme }) => {
	return (
		<div className={styles.container + ' ' + theme}>
			<h1 className='text-3xl'>Hi, I&#39;m Dhruv</h1>
		</div>
	);
};

Landing.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Landing;
