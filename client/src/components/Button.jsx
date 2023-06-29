import PropTypes from 'prop-types';
import { motion } from "framer-motion";
const Button = ({type, className, textButton, onClick}) => {
	return (
		<motion.button whileHover={{ scale: 0.9 }} type={type}className={className} onClick={onClick}>
		
			{textButton}
		</motion.button>
	)
};
Button.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	textButton: PropTypes.node,
	onClick: PropTypes.func,
  };
export default Button;
