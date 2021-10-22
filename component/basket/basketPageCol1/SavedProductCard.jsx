import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../redux/actions';

const SavedProductCard = ({ data, AllData }) => {
  const dispatch = useDispatch();

  const DeleteSavedProductFunc = (lineId) => {
    const savedProduct =
      AllData && AllData.filter((product) => product.id !== lineId);

    dispatch({
      type: 'DELETE_FROM_SAVED_PRODUCTS',
      payload: savedProduct,
    });
  };

  const moveToCartFunc = (e) => {
    const lineId = e.target.getAttribute('data-line-id');
    const productId = e.target.getAttribute('data-product-id');
    const quantity = e.target.getAttribute('data-saved-quantity');

    dispatch(AddToCart(productId, quantity));
    DeleteSavedProductFunc(lineId);
  };

  return (
    <div className='saved-product-card'>
      <div className='card-image-container'>
        <Link Link href={`/SavedProducts/${data?.product_id}`}>
          <img
            src={data?.media?.source}
            alt={data?.product_name}
            className='card-image'
          />
        </Link>
      </div>

      <div className='card-second-row'>
        <Link Link href={`/SavedProducts/${data?.product_id}`}>
          <span className='card-title'>{data?.product_name}</span>
        </Link>

        <div className='card-price-box'>
          <span className='card-price'>
            {data?.price?.formatted_with_symbol}
          </span>
        </div>

        <span className='is-in-stock-span'>In Stock</span>

        <button
          data-product-id={data?.product_id}
          data-line-id={data?.id}
          data-saved-quantity={data?.quantity}
          className='move-to-cart-btn white-btn'
          onClick={moveToCartFunc}>
          Move to cart
        </button>

        <button
          className='saved-product-btn added-product-card-delete-btn'
          data-line-id={data?.id}
          onClick={() => DeleteSavedProductFunc(data?.id)}>
          Delete
        </button>

        <button className='saved-product-btn added-product-card-compare-btn'>
          Compare with similar items
        </button>
      </div>
    </div>
  );
};

export default SavedProductCard;
