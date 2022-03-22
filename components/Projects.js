// Css
import styles from '../styles/Projects.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Projects = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>Projects</div>;
};

Projects.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Projects;
