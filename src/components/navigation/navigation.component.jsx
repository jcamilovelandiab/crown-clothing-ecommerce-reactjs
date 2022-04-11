import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { NavigationContainer, LogoContainer, OptionsContainer, OptionLink } from './navigation.styles';
import { Outlet } from 'react-router-dom';

const Navigation = ({ currentUser, hiddenCart }) => (
  <React.Fragment>
    <NavigationContainer>
      <LogoContainer to="/">
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink className='contact' to='/contact'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hiddenCart ? null : <CartDropDown />}
    </NavigationContainer>
    <Outlet />
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden
});

export default connect(mapStateToProps)(Navigation);