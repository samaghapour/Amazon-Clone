import { ToggleSideMenu } from '../../../helpers';

const MenuBtn = ({ text }) => {
  return (
    <div className='menu-btn' onClick={ToggleSideMenu}>
      <span className='menu-btn-icon' />
      {text === 'yes' && <span className='menu-btn-text'>All</span>}
    </div>
  );
};

export default MenuBtn;
