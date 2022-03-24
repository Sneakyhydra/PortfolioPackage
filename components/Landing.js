// React Typed for dynamic text
// import ReactTyped from 'react-typed';

// Components
import Icon from './Icon';

// Css
import styles from '../styles/Landing.module.css';

// Proptypes
import PropTypes from 'prop-types';

const Landing = ({ theme }) => {
	// Dynamic text
	const subtitles = [
		'Full-stack developer 🌐',
		'Exploring web 3',
		'Just getting started 📈',
	];

	// Details
	const professionalDetails = [
		{
			alt: 'dhruvrishishwar',
			icon: 'linkedin',
			link: 'https://www.linkedin.com/in/dhruvrishishwar/',
		},
		{
			alt: 'Sneakyhydra',
			icon: 'github',
			link: 'https://github.com/Sneakyhydra',
		},
		{
			alt: 'Email',
			icon: 'gmail',
			link: 'mailto:dhruvrishishwar2@gmail.com',
		},
	];

	return (
		<div
			className={
				styles.container +
				' ' +
				theme +
				' flex flex-col gap-3 justify-center pl-4 min-h-max'
			}
		>
			<h1 className='text-6xl font-light'>Hi, I&#39;m Dhruv</h1>
			{/* <h2 className='text-xl p-1'>
				<ReactTyped strings={subtitles} typeSpeed={40} backSpeed={50} loop />
			</h2> */}
			<div className='flex flex-row gap-2 h-16'>
				{professionalDetails.map(({ alt, icon, link }, idx) => (
					<Icon key={idx} alt={alt} icon={icon} link={link} />
				))}
			</div>
		</div>
	);
};

Landing.propTypes = {
	theme: PropTypes.string.isRequired,
};

export default Landing;
