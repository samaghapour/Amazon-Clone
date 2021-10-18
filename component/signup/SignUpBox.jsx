import { DisplaySignUpBoxCards } from '../../helpers';
import { useAuth0 } from '@auth0/auth0-react';

const SignUpBox = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div id='SignUpBox' className='sign-up-boxes'>
      <div className='sign-up-boxes-card'>
        <h1 className='sign-up-boxes-card-title'>Create account</h1>

        <form className='sign-up-boxes-card-form' onSubmit={loginWithRedirect}>
          <label htmlFor='email' className='sign-up-boxes-card-label'>
            Your name
            <input
              autoComplete='off'
              type='text'
              className='sign-up-boxes-card-input'
              name='email'
            />
          </label>
          <label htmlFor='email' className='sign-up-boxes-card-label'>
            Mobile number or email
            <input
              autoComplete='off'
              type='text'
              className='sign-up-boxes-card-input'
              name='email'
            />
          </label>
          <label htmlFor='email' className='sign-up-boxes-card-label'>
            Password
            <input
              autoComplete='off'
              type='password'
              className='sign-up-boxes-card-input'
              name='email'
            />
          </label>
          <label htmlFor='email' className='sign-up-boxes-card-label'>
            Re-enter password
            <input
              autoComplete='off'
              type='password'
              className='sign-up-boxes-card-input'
              name='email'
            />
          </label>

          <input
            type='submit'
            className='sign-up-boxes-card-form-btn'
            value='Verify email'
          />
        </form>

        <div className='sign-up-boxes-card-description'>
          By creating an account, you agree to Amazon's{' '}
          <span className='details-a'>Conditions of Use</span> and{' '}
          <span className='details-a'>Privacy Notice</span>.
        </div>

        <div className='sign-up-boxes-card-last-row'>
          <div className='gradiantBorderLine' />
          <div>
            Already have an account?{' '}
            <div
              className='details-a'
              onClick={() => DisplaySignUpBoxCards('SignInBox')}>
              Sign-In
            </div>
          </div>
          <div>
            Buying for work?{' '}
            <div className='details-a'>Create a free business account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
