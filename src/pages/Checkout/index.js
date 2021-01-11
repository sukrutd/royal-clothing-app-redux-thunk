import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem';
import './styles.scss';

const Checkout = ({ cartItems, cartTotal }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>Product</div>
				<div className='header-block'>Description</div>
				<div className='header-block'>Quantity</div>
				<div className='header-block'>Price</div>
				<div className='header-block'>Remove</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='cart-total'>Total: ${cartTotal}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
