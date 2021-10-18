import { Language, LocationOn } from '@material-ui/icons';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleModule } from '../helpers';
import { ChangeDeliverLocation } from '../redux/actions';

const DeliveryModule = () => {
  const locationSelectorRed = useRef();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.DeliveryLocation);

  useEffect(() => {
    dispatch(
      ChangeDeliverLocation(document.getElementById('LocationSelect').value)
    );
  }, [locationSelectorRed.value]);

  return (
    <div
      id='DeliveryModule'
      onClick={(e) => {
        e.target.id === 'DeliveryModule' && ToggleModule();
      }}>
      <div id='LocationCard'>
        <span id='LocationCardTitle'>Choose your location</span>
        <div id='LocationCardContent'>
          <p>
            Delivery options and delivery speeds may vary for different
            locations
          </p>
          <button id='LocationCardSignInBtn'>
            Sign in to update your location
          </button>
          <div id='LocationCardZipCode'>
            <LocationOn color='primary' />
            <span>Enter a US zip code</span>
          </div>
          <div id='LocationCardLocationSelect'>
            <div id='LocationCardLocationSelectRow1'>
              <Language color='primary' />
              <span>Ship outside the US</span>
            </div>
            <select
              name='locationSelect'
              id='LocationSelect'
              ref={locationSelectorRed}
              defaultValue={location ? location : 'United States'}
              onChange={(e) => dispatch(ChangeDeliverLocation(e.target.value))}>
              <option value='United states'>United states</option>
              <option value='Germany'>Germany</option>
              <option value='Iran'>Iran</option>
              <option value='Canada'>Canada</option>
              <option value='Japan'>Japan</option>
              <option value='Mexico'>Mexico</option>
            </select>
          </div>
          <button id='LocationCardDoneBtn' onClick={ToggleModule}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryModule;
