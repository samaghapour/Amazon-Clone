import { useSelector } from 'react-redux';

const CallToCheckoutBox = () => {
  const Cart = useSelector((state) => state.Cart);

  return (
    <div id='CallToCheckoutBox'>
      <div id='CallToCheckoutBoxTitleContainer'>
        <span id='CallToCheckoutBoxTitle'>
          Subtotal ({Cart && Cart?.cart?.total_items} items):{' '}
          <b>{Cart && Cart?.cart?.subtotal?.formatted_with_symbol}</b>
        </span>
      </div>

      <div id='CallToCheckoutBoxCheckBoxContainer'>
        <div className='filter-items'>
          <label className='filter-items-label'>
            <input type='checkBox' className='filter-items-checkbox' />
            This order contains a gift
          </label>
        </div>
      </div>

      <button className='Yellow-btn' id='CheckoutBtn'>
        Proceed to checkout
      </button>
    </div>
  );
};

export default CallToCheckoutBox;
