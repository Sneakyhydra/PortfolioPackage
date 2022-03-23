// Css
import styles from '../styles/Description.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Description = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>Description</div>;
};

Description.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Description;
