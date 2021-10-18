import SignUpBox from './SignUpBox';
import SignInBox from './SignInBox';
import PasswordAssistanceBox from './PasswordAssistanceBox';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';

const SignUpPage = () => {
  const { isAuthenticated } = useAuth0();

  isAuthenticated && <div>you already sign in</div>;

  return (
    <div id='SignUpPage'>
      <div className='sign-up-brand-logo'>
        <Link href='/'>
          <div className='sign-up-brand' />
        </Link>
      </div>

      <div id='SignUpPageMain'>
        <SignInBox />
        <SignUpBox />
        <PasswordAssistanceBox />
      </div>

      <div id='SignUpPageFooter'>
        <div className='gradiantBorderLine' />
        <ul>
          <li className='details-a'>Conditions of Use </li>
          <li className='details-a'>Privacy Notice </li>
          <li className='details-a'>Help </li>
        </ul>
        <span>
          © 2021, Amazon Clone Created By{' '}
          <a href='https://github.com/samaghapour'>sam Aghapour</a>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
