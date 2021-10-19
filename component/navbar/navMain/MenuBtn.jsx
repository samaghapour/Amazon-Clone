import { ToggleSideMenu } from '../../../helpers';

const MenuBtn = () => {
  return (
    <div className='menu-btn' onClick={ToggleSideMenu}>
      <span className='menu-btn-icon' />
      <span className='menu-btn-text'>All</span>
    </div>
  );
};

export default MenuBtn;
