import MenuBtn from './MenuBtn';
import NavList from './NavList';

const NavMain = () => {
  return (
    <div className='nav-child' id='NavMain'>
      <MenuBtn text='yes' />
      <NavList />
    </div>
  );
};

export default NavMain;
