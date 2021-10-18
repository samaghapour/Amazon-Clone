import { useRef } from 'react';
import { DisplaySignUpBoxCards } from '../../helpers';
import { useAuth0 } from '@auth0/auth0-react';
const SignInBox = () => {
  const { loginWithRedirect } = useAuth0();

  const selectIcon = useRef();
  const selectOptions = useRef();

  const toggleCollapse = () => {
    selectIcon.current.classList.toggle('collapse');
    selectOptions.current.classList.toggle('collapse');
  };

  return (
    <div id='SignInBox' className='sign-up-boxes active'>
      <div className='sign-up-boxes-card'>
        <h1 className='sign-up-boxes-card-title'>Sign-In</h1>

        <form className='sign-up-boxes-card-form' onSubmit={loginWithRedirect}>
          <label htmlFor='email' className='sign-up-boxes-card-label'>
            Email or mobile phone number
            <input
              autoComplete='off'
              type='text'
              className='sign-up-boxes-card-input'
              name='email'
            />
          </label>

          <input
            type='submit'
            className='sign-up-boxes-card-form-btn'
            value='Continue'
          />
        </form>

        <div className='sign-up-boxes-card-description'>
          By continuing, you agree to Amazon's{' '}
          <span className='details-a'>Conditions of Use</span> and{' '}
          <span className='details-a'>Privacy Notice</span>.
        </div>

        <div className='sign-up-boxes-card-last-row'>
          <div id='SignUpSelectBox' onClick={toggleCollapse}>
            <i id='SignUpSelectBoxIcon' className='' ref={selectIcon} />
            <span className='details-a'>Need help?</span>
          </div>

          <div id='SignUpSelectBoxOptions' ref={selectOptions}>
            <span
              className='details-a'
              onClick={() => DisplaySignUpBoxCards('PasswordAssistanceBox')}>
              Forgot your password?
            </span>
            <span className='details-a '>Other issues with Sign-In</span>
          </div>
        </div>
      </div>

      <div className='sign-up-boxes-second-row'>
        <div className='line-paragraph'>
          <span className='line-paragraph-span'>New to Amazon?</span>
        </div>

        <button
          className='gray-btn'
          id='CreateAccountBtn'
          onClick={() => DisplaySignUpBoxCards('SignUpBox')}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default SignInBox;
