import React from 'react';
import './styles.scss';

const CustomButton = ({ children, ...otherProperties }) => {
	return (
		<button className='custom-button' {...otherProperties}>
			{children}
		</button>
	);
};

export default CustomButton;
