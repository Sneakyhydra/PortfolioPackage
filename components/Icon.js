// Icons
import simpleIcons from 'simple-icons';

// Proptypes
import PropTypes from 'prop-types';

const Icon = ({ alt, icon, link }) => {
	// Get icon from library
	const ic = simpleIcons.Get(icon);

	// Create object with relevant details
	const professionalDetails = {
		alt: alt,
		backgroundColor: '#' + ic.hex,
		icon: (
			<svg
				role='img'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				height='100%'
				width='100%'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<title>{icon}</title>
				<path d={ic.path} fill='white' />
			</svg>
		),
		link: link,
	};

	return (
		<a
			href={professionalDetails.link}
			target='_blank'
			rel='noopener noreferrer'
			style={{
				backgroundColor: professionalDetails.backgroundColor,
				padding: '1rem',
				marginLeft: '0.25rem',
			}}
		>
			{professionalDetails.icon}
		</a>
	);
};

Icon.propTypes = {
	alt: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Icon;
