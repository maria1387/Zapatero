/* eslint-disable react/prop-types */
const Title = ({titleLabel, h1, htmlFor}) => {
	return (
		<>
			<label htmlFor={htmlFor} >{titleLabel}</label>
			<h1>{h1}</h1>
		</>
	)
};

export default Title;
