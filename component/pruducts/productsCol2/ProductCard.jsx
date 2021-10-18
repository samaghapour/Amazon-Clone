import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../../redux/actions';

const ProductCard = ({ details, category, CardType = 'none' }) => {
  const dispatch = useDispatch();
  const SavedProducts = useSelector((state) => state.SavedProducts);
  const Cart = useSelector((state) => state.Cart);

  const AddToCardFunc = (e) => {
    const id = e.target.getAttribute('data-product-id');

    const savedProduct =
      SavedProducts &&
      SavedProducts.filter((product) => product.product_id !== id);

    const AlreadyHasThisItem =
      Cart && Cart.cart?.line_items.filter((item) => item.product_id === id);

    if (AlreadyHasThisItem.length === 0) {
      dispatch(AddToCart(id, 1));
    }

    dispatch({
      type: 'DELETE_FROM_SAVED_PRODUCTS',
      payload: savedProduct,
    });
  };

  return (
    <div className='product-card' data-pid={details?.id}>
      <div className='card-image-container'>
        <Link Link href={`/${category}/${details?.id}`}>
          <img
            src={details?.media?.source}
            alt={details?.name}
            className='card-image'
          />
        </Link>
      </div>

      <div className='card-second-row'>
        <Link Link href={`/${category}/${details?.id}`}>
          <span className='card-title'>{details?.name}</span>
        </Link>

        <div className='card-rate-box' title='dummy rate'>
          <div className='rate-stars' />
          <span className='rate-numbers details-a'> 155,227</span>
        </div>

        <div className='card-price-box'>
          <span
            className='card-price'
            data-price={Number(details?.price.formatted)}>
            <sup>$</sup>
            {details?.price?.formatted}
          </span>
        </div>

        {CardType === 'none' ? (
          <div className='card-delivery-date-box'>
            <span>
              Get it <b>Tue, Oct 5</b> - <b>Fri, Nov 12</b>
            </span>
          </div>
        ) : (
          CardType === 'RecentlyViewed' && (
            <button
              className='Yellow-btn'
              data-product-id={details && details?.id}
              onClick={AddToCardFunc}
              id='ProductCardAddToCardBtn'>
              Add to Cart
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
