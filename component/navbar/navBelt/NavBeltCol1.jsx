import Link from 'next/link';
import { ToggleModule } from '../../../helpers';
import MenuBtn from '../navMain/MenuBtn';

const NavBeltCol1 = ({ location }) => {
  return (
    <div id='NavBeltCol1'>
      <MenuBtn />

      <Link href='/'>
        <div className='icon nav-brand' />
      </Link>

      <div id='DeliveryBox' onClick={ToggleModule}>
        <span className='locationIcon' />

        <div className='delivery-box-text'>
          <span>Deliver to</span>
          <span className='deliver-country  ellipsis'>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBeltCol1;
