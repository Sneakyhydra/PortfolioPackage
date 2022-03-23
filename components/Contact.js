// Css
import styles from '../styles/Contact.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Contact = ({ theme }) => {
	return <div className={styles.container + ' ' + theme}>Contact</div>;
};

Contact.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Contact;
