import { useSelector } from 'react-redux';
import { ToggleModule } from '../../../helpers';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../redux/actions';

const AddToCartSec = ({ data }) => {
  const quantityRef = useRef();
  const location = useSelector((state) => state.DeliveryLocation);
  const dispatch = useDispatch();

  const AddToCardFunc = (e) => {
    const id = e.target.getAttribute('data-product-id');
    const quantityNumber = quantityRef.current.value;

    dispatch(AddToCart(id, quantityNumber));
  };

  return (
    <div id='AddToCartSec'>
      <ul id='ProductShareBox'>
        <span className='details-a'>share</span>
        <li
          title='dummy icon'
          className='socialmedia-icon email'
          title='Share via e-mail'
        />
        <li
          title='dummy icon'
          className='socialmedia-icon facebook'
          title='Share on facebook'
        />
        <li
          title='dummy icon'
          className='socialmedia-icon twitter'
          title='Share on twitter'
        />
        <li
          className='socialmedia-icon pinterest'
          title='Pin it on pinterest'
        />
      </ul>

      <div id='ProductAddToCartBox'>
        <div id='ProductDetailsDeliveryLocation'>
          <LocationOnOutlinedIcon color='primary' fontSize='small' />

          <div
            onClick={ToggleModule}
            id='ProductDetailsDeliveryLocationText'
            className='details-a'>
            Deliver to {location}
          </div>
        </div>

        <div className='ProductAddQuantity'>
          <label htmlFor='quantity' className='ProductAddQuantitySelectLable'>
            Qty:
          </label>
          <select
            name='quantity'
            className='ProductAddQuantitySelect'
            defaultValue='1'
            ref={quantityRef}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>

        <div id='ProductDetailsAddToCartBtnContainer'>
          <button
            id='ProductDetailsAddToCartBtn'
            className='Yellow-btn'
            data-product-id={data?.id}
            title='Add this product to yout cart'
            onClick={AddToCardFunc}>
            Add to Cart
          </button>
        </div>

        <div id='ProductDetailsSecureTransactionContainer' title='dummy box'>
          <LockOutlinedIcon fontSize='small' />
          <span className='details-a'>Secure transaction</span>
        </div>

        <div id='ProductDetailsReturnPolicyContainer' title='dummy box'>
          Return policy:
          <span className='details-a'>Refund or replacement availible</span>
        </div>

        <div id='ProductDetailsAddToListBtnContainer' title='dummy'>
          <button className='gray-btn' id='ProductDetailsAddToListBtn'>
            Add to List
          </button>
        </div>
      </div>

      <div id='ProductSellBox' title='dummy'>
        <span>Have one to sell?</span>
        <button id='ProductDetailsSellBtn' className='white-btn'>
          Sell on Amazon
        </button>
      </div>
    </div>
  );
};

export default AddToCartSec;
