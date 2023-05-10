/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
const Button = ({type, className, textButton, onClick}) => {
	return (
		<motion.button whileHover={{ scale: 0.9 }} type={type}className={className} onClick={onClick}>
		
			{textButton}
		</motion.button>
	)
};

export default Button;
