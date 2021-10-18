import AddedProducts from './AddedProductCard';
import { useSelector } from 'react-redux';
import SavedProductCard from './SavedProductCard';
import { useEffect } from 'react';

const BasketPageCol1 = () => {
  const Cart = useSelector((state) => state.Cart);
  const SavedProducts = useSelector((state) => state.SavedProducts);

  useEffect(() => {
    console.log(Cart);
  }, [Cart]);

  return (
    <div id='BasketPageCol1'>
      <div id='AddedProductsRow'>
        <div id='AddedProductsRowHeader'>
          <h1 id='AddedProductsRowTitle' className='BaketPageTitles'>
            Shopping Cart
          </h1>
          <span id='AddedProductsRowSpan'>Price</span>
        </div>

        <div id='AddedProductsContainer'>
          {Cart &&
            Cart.cart?.line_items?.length > 0 &&
            Cart.cart.line_items.map((product) => {
              return (
                <AddedProducts
                  data={product}
                  key={product.id}
                  AllData={Cart.cart.line_items}
                />
              );
            })}
        </div>

        <div id='AddedProductsTotalContainer'>
          <span id='AddedProductsTotalSpan'>
            Subtotal ({Cart && Cart?.cart?.total_items} items):{' '}
            <b>{Cart && Cart?.cart?.subtotal?.formatted_with_symbol}</b>
          </span>
        </div>
      </div>

      <div id='SavedProductsRow'>
        <div id='SavedProductsContainer'>
          <h1 id='SavedProductsContainerTitle' className='BaketPageTitles'>
            {SavedProducts && SavedProducts?.length > 0
              ? `Saved for later (${SavedProducts?.length} items)`
              : 'No items saved for later'}
          </h1>
          <div id='SavedProducts'>
            {SavedProducts &&
              SavedProducts?.length > 0 &&
              SavedProducts.map((product) => (
                <SavedProductCard
                  AllData={SavedProducts}
                  data={product}
                  key={product.id}
                />
              ))}
          </div>
        </div>

        <div id='BasketPageDescriptionContainer'>
          <p>
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price.
            <a href='#' className='details-a'>
              Learn more
            </a>
          </p>
          <p>
            Do you have a gift card or promotional code? We'll ask you to enter
            your claim code when it's time to pay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketPageCol1;
