import PropTypes from 'prop-types';
const Helmet = ({title, children }) => {
	document. title = '¡Zapatero! ' + title
	return (
		<div className="w-100">
			{children}
		</div>
	)
};
Helmet.propTypes = {
	title: PropTypes.node,
	children : PropTypes.node,
	
 
  };
export default Helmet;
