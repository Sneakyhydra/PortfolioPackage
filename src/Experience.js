// Css
import styles from '../styles/Experience.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Experience = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>Experience</div>;
};

Experience.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Experience;
