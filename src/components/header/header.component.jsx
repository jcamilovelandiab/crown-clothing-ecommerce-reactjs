import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hiddenCart }) =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='contact' to='/contact'>
                CONTACT
            </Link>
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
            )}
            <CartIcon />
        </div>
        { hiddenCart ? null : <CartDropDown /> }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
    currentUser,
    hiddenCart: hidden
});

export default connect(mapStateToProps)(Header);