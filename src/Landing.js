// Css
import styles from '../styles/Landing.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Landing = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>Landing</div>;
};

Landing.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Landing;
