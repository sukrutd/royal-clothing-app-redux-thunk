import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './styles.scss';

const cartIcon = ({ className, itemCount, toggleCartHidden }) => (
	<div className={className ? `${className} cart-icon` : 'cart-icon'} onClick={toggleCartHidden}>
		<ShoppingBag className='shopping-bag' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
