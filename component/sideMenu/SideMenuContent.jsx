import { useSelector } from 'react-redux';

const SideMenuContent = () => {
  const Categories = useSelector((state) => state.Categories);

  const GoToSideMenuContentRight = (e) => {
    // set up elements that we need to style
    let categoryId =
      e.target.className === 'side-menu-content-list-item'
        ? e.target.getAttribute('data-category')
        : e.target.parentNode.getAttribute('data-category');

    const SideMenuContentRight = document.getElementById(
        'SideMenuContentRight'
      ),
      SideMenuContentRightLists = document.querySelectorAll(
        '#SideMenuContentRight > [data-parent-category]'
      ),
      SideMenuContentRightCurrentList = Array.from(
        SideMenuContentRightLists
      ).filter(
        (list) => list.getAttribute('data-parent-category') === categoryId
      )[0];

    // style elements

    SideMenuContentRight.style.transform = 'translateX(0)';
    SideMenuContentRightLists.forEach((item) =>
      item.classList.remove('active')
    );
    SideMenuContentRightCurrentList.classList.add('active');
  };

  return (
    <div id='SideMenuContent' className='side-menu-content'>
      <ul className='side-menu-content-list' title='dummy'>
        <span className='side-menu-content-list-title'>
          Digital Content & Devices
        </span>
        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>Amazon Music</span>
          <i className='side-menu-content-list-item-arrow' />
        </li>

        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>
            Kindle E-Readers & Books
          </span>
          <i className='side-menu-content-list-item-arrow' />
        </li>

        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>
            Appstore for Android
          </span>
          <i className='side-menu-content-list-item-arrow' />
        </li>
      </ul>

      <ul className='side-menu-content-list'>
        <span className='side-menu-content-list-title'>Shop By Department</span>
        {Categories &&
          Categories.map((category) => {
            return (
              <li
                onClick={GoToSideMenuContentRight}
                key={category?.id}
                className='side-menu-content-list-item'
                data-category={category.id}>
                <span className='side-menu-content-list-item-text'>
                  {category?.name}
                </span>
                <i className='side-menu-content-list-item-arrow' />
              </li>
            );
          })}
      </ul>

      <ul className='side-menu-content-list' title='dummy'>
        <span className='side-menu-content-list-title'>
          Programs & Features
        </span>
        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>Gift Cards</span>
          <i className='side-menu-content-list-item-arrow' />
        </li>

        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>Amazon Live</span>
          <i className='side-menu-content-list-item-arrow' />
        </li>

        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>
            International Shopping
          </span>
          <i className='side-menu-content-list-item-arrow' />
        </li>
      </ul>

      <ul className='side-menu-content-list' title='dummy'>
        <span className='side-menu-content-list-title'>Your Account</span>
        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>
            Customer Service
          </span>
        </li>

        <li className='side-menu-content-list-item'>
          <span className='side-menu-content-list-item-text'>Sign In</span>
        </li>
      </ul>
    </div>
  );
};

export default SideMenuContent;
