// Css
import styles from '../styles/Skills.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Skills = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>Skills</div>;
};

Skills.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Skills;
