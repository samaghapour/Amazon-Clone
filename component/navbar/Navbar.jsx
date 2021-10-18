import NavBelt from './navBelt/NavBelt';
import NavMain from './navMain/NavMain';
const Navbar = () => {
  return (
    <div id='Navbar'>
      <NavBelt />
      <NavMain />

      <a id='PhoneDeliveryBox' className='close' href='DeliveryModule'>
        <div className='delivery-box-text'>
          <span>Deliver to </span>
          <span className='deliver-country'>Islamic Republic of Iran</span>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
