import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRef } from 'react';
import { ToggleSideMenu } from '../../helpers';

const SideMenuContentRight = () => {
  const SideMenuContentRightRef = useRef();
  const Categories = useSelector((state) => state.Categories);

  console.log(Categories);

  const GoBackToSideMenuContent = (e) => {
    SideMenuContentRightRef.current.style.transform = 'translateX(100%)';
  };

  return (
    <div
      id='SideMenuContentRight'
      ref={SideMenuContentRightRef}
      className='side-menu-content'>
      {Categories &&
        Categories.map((category) => {
          return (
            <ul
              key={category?.id}
              className='side-menu-content-list'
              data-parent-category={category?.id}>
              <div
                className='side-menu-content-list-header'
                onClick={GoBackToSideMenuContent}>
                <i className='side-menu-content-list-header-arrow' />
                <span className='side-menu-content-list-header-title'>
                  MAIN MENU
                </span>
              </div>
              <span className='side-menu-content-list-title'>
                {category?.name}
              </span>
              {category?.children.map((child) => {
                return (
                  <Link href={`/${child.slug}`} key={child?.id}>
                    <li
                      key={child?.id}
                      onClick={ToggleSideMenu}
                      className='side-menu-content-list-item'>
                      <span className='side-menu-content-list-item-text'>
                        {child?.name}
                      </span>
                      <i className='side-menu-content-list-item-arrow' />
                    </li>
                  </Link>
                );
              })}
            </ul>
          );
        })}
    </div>
  );
};

export default SideMenuContentRight;
