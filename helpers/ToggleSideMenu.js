export const ToggleSideMenu = () => {
  const SideMenu = document.getElementById('SideMenu'),
    SideMenuCloserBtn = document.getElementById('SideMenuCloserBtn'),
    SideMenuContainer = document.getElementById('SideMenuContainer'),
    SideMenuContentRight = document.getElementById('SideMenuContentRight');

  if ((SideMenu, SideMenuCloserBtn, SideMenuContainer, SideMenuContentRight)) {
    SideMenu.classList.toggle('close');
    SideMenuCloserBtn.classList.toggle('closeBtn');
    SideMenuContainer.classList.toggle('closeMenu');
    SideMenuContentRight.style.transform = 'translateX(100%)';
  }
};
