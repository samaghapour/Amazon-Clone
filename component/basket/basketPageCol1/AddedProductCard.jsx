import Link from 'next/link';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteFromCart } from '../../../redux/actions';
import { UpdateProductQuantity } from '../../../redux/actions';

const AddedProductCard = ({ data, AllData }) => {
  const quantityRef = useRef();
  const dispatch = useDispatch();

  const SaveForLaterFunc = (e) => {
    const productId = e.target.getAttribute('data-product-id');
    const lineId = e.target.getAttribute('data-line-id');

    const savedProduct =
      AllData &&
      AllData.filter((product) => product.product_id === productId)[0];

    dispatch({ type: 'SAVED_PRODUCTS', payload: savedProduct });
    dispatch(DeleteFromCart(lineId));
  };

  const DeleteAddedProductFunc = (e) => {
    const lineId = e.target.getAttribute('data-line-id');

    dispatch(DeleteFromCart(lineId));
  };

  const UpdateProductQuantityFunc = (e) => {
    const lineId = e.target.getAttribute('data-line-id');
    const quantityNumber = e.target.value;

    dispatch(UpdateProductQuantity(lineId, quantityNumber));
  };

  return (
    <div className='added-product-card'>
      <div className='added-product-card-image-box'>
        <Link href={`/addedProducts/${data && data.id}`}>
          <img
            src={data && data?.image?.url}
            alt={data && data?.product_name}
            className='added-product-card-image'
          />
        </Link>
      </div>

      <div className='added-product-card-text-box'>
        <div className='added-product-card-title-container'>
          <Link href={`/addedProducts/${data && data.id}`}>
            <span className='card-title'>{data && data?.product_name}</span>
          </Link>
        </div>

        <span className='is-in-stock-span'>In Stock</span>

        <div
          className='added-product-card-gift-checkbox-container'
          title='dummy'>
          <div className='filter-items'>
            <label className='filter-items-label'>
              <input type='checkBox' className='filter-items-checkbox' /> This
              is a gift.{' '}
            </label>
            <a href='#' className='details-a'>
              Learn more
            </a>
          </div>
        </div>

        <div className='added-product-card-edit-container'>
          <div className='ProductAddQuantity'>
            <label htmlFor='quantity' className='ProductAddQuantitySelectLable'>
              Qty:
            </label>
            <select
              name='quantity'
              className='ProductAddQuantitySelect'
              defaultValue={data && data?.quantity}
              ref={quantityRef}
              data-line-id={data?.id}
              onChange={UpdateProductQuantityFunc}>
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
          <span className='text-separator'>|</span>
          <button
            className='added-product-card-delete-btn'
            data-line-id={data?.id}
            onClick={DeleteAddedProductFunc}>
            Delete
          </button>
          <span className='text-separator'>|</span>
          <button
            className='added-product-card-save-for-later-btn'
            data-product-id={data?.product_id}
            data-line-id={data?.id}
            onClick={SaveForLaterFunc}>
            Save for later
          </button>
          <span className='text-separator'>|</span>
          <button className='added-product-card-compare-btn'>
            Compare with similar items
          </button>
        </div>
      </div>

      <div className='added-product-card-price-ebox'>
        <span className='added-product-card-price'>
          {data && data?.price?.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
};

export default AddedProductCard;
