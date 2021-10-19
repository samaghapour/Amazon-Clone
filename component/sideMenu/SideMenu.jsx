import SideMenuContent from './SideMenuContent';
import SideMenuContentRight from './SideMenuContentRight';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';

const SideMenu = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div id='SideMenu' className='close'>
      <Link href={isAuthenticated ? '#' : '/signup'}>
        <div id='SideMenuHeader'>
          <i id='sideMenuProfileIcon' />
          <span>hello, {isAuthenticated ? user.given_name : ' Sign in'}</span>
        </div>
      </Link>
      <div id='SideMenuMain'>
        <SideMenuContent />
        <SideMenuContentRight />
      </div>
    </div>
  );
};

export default SideMenu;
