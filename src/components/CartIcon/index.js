import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './styles.scss';

const cartIcon = ({ className, toggleCartHidden }) => (
	<div className={className ? `${className} cart-icon` : 'cart-icon'} onClick={toggleCartHidden}>
		<ShoppingBag className='shopping-bag' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(cartIcon);
