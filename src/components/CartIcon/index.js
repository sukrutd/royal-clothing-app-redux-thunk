import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/cart.svg';
import './styles.scss';

const cartIcon = ({ className }) => (
	<div className={className ? `${className} cart-icon` : 'cart-icon'}>
		<ShoppingBag className='shopping-bag' />
		<span className='item-count'>0</span>
	</div>
);

export default cartIcon;
