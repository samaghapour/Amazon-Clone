import { DisplaySignUpBoxCards } from '../../helpers';

const PasswordAssistanceBox = () => {
  return (
    <div id='PasswordAssistanceBox' className='sign-up-boxes' title='dummy'>
      <div className='sign-up-boxes-card'>
        <h1 className='sign-up-boxes-card-title'>Password assistance</h1>

        <span>
          Enter the email address or mobile phone number associated with your
          Amazon account.
        </span>
        <form className='sign-up-boxes-card-form'>
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
      </div>

      <div className='sign-up-boxes-second-row'>
        <h4>Has your email or mobile number changed?</h4>
        <p>
          If you no longer use the email address associated with your Amazon
          account, you may contact <a className='details-a'>Customer Service</a>{' '}
          for help restoring access to your account
        </p>

        <button
          className='gray-btn'
          id='GetBackFromPasswordAssistanceBtn'
          onClick={() => DisplaySignUpBoxCards('SignInBox')}>
          Get Back to SignIn
        </button>
      </div>
    </div>
  );
};

export default PasswordAssistanceBox;
