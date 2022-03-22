// Css
import styles from '../styles/About.module.css';

// Proptypes
import PropTypes from 'prop-types';

const About = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>About</div>;
};

About.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default About;
