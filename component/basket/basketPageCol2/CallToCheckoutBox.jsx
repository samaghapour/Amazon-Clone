import { useSelector } from 'react-redux';

const CallToCheckoutBox = () => {
  const Cart = useSelector((state) => state.Cart);

  return (
    <div className='CallToCheckoutBox'>
      <div className='CallToCheckoutBoxTitleContainer'>
        <span className='CallToCheckoutBoxTitle'>
          Subtotal ({Cart && Cart?.cart?.total_items} items):{' '}
          <b>{Cart && Cart?.cart?.subtotal?.formatted_with_symbol}</b>
        </span>
      </div>

      <div className='CallToCheckoutBoxCheckBoxContainer'>
        <div className='filter-items'>
          <label className='filter-items-label'>
            <input type='checkBox' className='filter-items-checkbox' />
            This order contains a gift
          </label>
        </div>
      </div>

      <button className='Yellow-btn CheckoutBtn'>Proceed to checkout</button>
    </div>
  );
};

export default CallToCheckoutBox;
