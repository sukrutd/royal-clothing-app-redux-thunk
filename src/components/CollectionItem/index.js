import React from 'react';
import CustomButton from '../CustomButton';
import './styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className='collection-item'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton className='inverted'>ADD TO CART</CustomButton>
		</div>
	);
};

export default CollectionItem;
