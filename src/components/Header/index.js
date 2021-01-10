import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartDropdown from '../CartDropdown';
import CartIcon from '../CartIcon';
import './styles.scss';

const Header = ({ currentUser, cartDropdownHidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
				ROYAL CLOTHING
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/contact' className='option'>
					CONTACT
				</Link>
				{currentUser ? (
					<button className='link-button option' onClick={() => auth.signOut()}>
						SIGN OUT
					</button>
				) : (
					<Link to='/signin' className='option'>
						SIGN IN
					</Link>
				)}
				<CartIcon className='option' />
			</div>
			{!cartDropdownHidden && <CartDropdown />}
		</div>
	);
};

/* 
const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state),
	cartDropdownHidden: selectCartHidden(state)
}); 
*/
// Alternate way to write the above selector mapping logic inside mapStateToProps
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartDropdownHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
