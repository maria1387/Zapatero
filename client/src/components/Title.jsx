import PropTypes from 'prop-types';
const Title = ({titleLabel, h1, htmlFor}) => {
	return (
		<>
			<label htmlFor={htmlFor} >{titleLabel}</label>
			<h1>{h1}</h1>
		</>
	)
};
Title.propTypes = {
	titleLabel: PropTypes.node,
	h1: PropTypes.node,
	htmlFor: PropTypes.node,
 
  };

export default Title;
