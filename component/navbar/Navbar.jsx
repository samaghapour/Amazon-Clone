import { useSelector } from 'react-redux';
import NavBelt from './navBelt/NavBelt';
import SearchBox from './navBelt/SearchBox';
import NavMain from './navMain/NavMain';
import { ToggleModule } from '../../helpers';

const Navbar = () => {
  const country = useSelector((state) => state.DeliveryLocation);

  return (
    <div id='Navbar'>
      <NavBelt />
      <div id='PhoneSearchBox'>
        <SearchBox placeHolder='Search Amazon' />
      </div>
      <NavMain />

      <div id='PhoneDeliveryBox' className='close' onClick={ToggleModule}>
        <span className='locationIcon' />
        <div className='delivery-box-text'>
          <span className='deliver-country'>
            Deliver to {country && country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
