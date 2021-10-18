import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

const NavBeltCol2 = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const Cart = useSelector((state) => state.Cart);

  const positionPriceNumber = {
    left:
      Cart && Cart.cart.total_items > 9 && Cart.cart.total_items <= 99
        ? '25%'
        : Cart && Cart.cart.total_items < 9
        ? '31%'
        : Cart && Cart.cart.total_items > 99 && '13%',
    top: Cart && Cart.cart.total_items > 99 && '-10%',
  };

  return (
    <div id='NavBeltCol2'>
      <div id='Languages' title='dummy'>
        <span id='Flag' />
        <ArrowDropDownIcon />
      </div>

      <Link href={!isAuthenticated ? '/signup' : '#'}>
        <div
          id='SignIn'
          onClick={isAuthenticated ? logout : undefined}
          title={isAuthenticated ? 'Click to log out' : 'Click to log in'}>
          hello,{' '}
          <span id='Username'>
            {isAuthenticated ? user.given_name : 'sign in'}
          </span>
          {isAuthenticated && <span>,Log out</span>}
        </div>
      </Link>

      <div id='Returns' title='dummy'>
        Returns <b>&Orders</b>
      </div>

      <Link href='/basket'>
        <a
          id='BasketBox'
          title={isAuthenticated ? 'Click to go to your basket' : undefined}>
          <span id='BasketNumber' style={positionPriceNumber}>
            {Cart && Cart.cart.total_items > 0 && Cart.cart.total_items <= 99
              ? Cart.cart.total_items
              : Cart && Cart.cart.total_items > 99
              ? '+99'
              : 0}
          </span>
          <span id='BasketLogo' />
        </a>
      </Link>
    </div>
  );
};

export default NavBeltCol2;
