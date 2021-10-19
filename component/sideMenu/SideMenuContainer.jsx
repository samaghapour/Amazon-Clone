import SideMenu from './SideMenu';
import { ToggleSideMenu } from '../../helpers';

const SideMenuContainer = () => {
  const closeSideMenu = (e) => {
    if (
      e.target.id === 'SideMenuContainer' ||
      e.target.id === 'SideMenuCloserBtn' ||
      e.target.id === 'SideMenuCloserBtnIcon'
    ) {
      ToggleSideMenu();
    }
  };

  return (
    <div id='SideMenuContainer' className='closeMenu' onClick={closeSideMenu}>
      <button id='SideMenuCloserBtn' className='closeBtn'>
        <i id='SideMenuCloserBtnIcon' />
      </button>
      <SideMenu />
    </div>
  );
};

export default SideMenuContainer;
