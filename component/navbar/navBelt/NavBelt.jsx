import NavBeltCol1 from './NavBeltCol1';
import SearchBox from './SearchBox';
import NavBeltCol2 from './NavBeltCol2';
import { useSelector } from 'react-redux';
const NavBelt = () => {
  const location = useSelector((state) => state.DeliveryLocation);

  return (
    <div className='nav-child' id='NavBelt'>
      <NavBeltCol1 location={location} />
      <SearchBox />
      <NavBeltCol2 />
    </div>
  );
};

export default NavBelt;
