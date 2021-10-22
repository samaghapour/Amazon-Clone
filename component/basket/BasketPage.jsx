import { useSelector } from 'react-redux';
import ProductSlider from '../ProductSlider';
import BasketPageCol1 from './basketPageCol1/BasketPageCol1';
import BasketPageCol2 from './basketPageCol2/BasketPageCol2';
import CallToCheckoutBox from './basketPageCol2/CallToCheckoutBox';
import Link from 'next/link';

const BasketPage = () => {
  const data = useSelector((state) => state.RecentlyViewedProducts);
  const RecentData =
    data &&
    data.filter((item, index, array) => {
      return array.findIndex((t) => t.id === item.id) === index;
    });

  return (
    <div id='BasketPage'>
      <div id='PhoneCallToCheckOutBox'>
        <CallToCheckoutBox />
      </div>
      <div id='BasketPageRow1'>
        <BasketPageCol1 />
        <BasketPageCol2 sponsoredData={RecentData} />
      </div>

      <div id='BasketPageRow2'>
        <div id='BasketPageRow2TitleContainer'>
          <span id='BasketPageRow2Title' className='BaketPageTitles'>
            Your recently viewed items
          </span>
        </div>
        <ProductSlider
          products={RecentData}
          category='ProductsHasCategory'
          CardType='RecentlyViewed'
        />
      </div>

      <div id='PhoneCountinueShoppingBtnContainer'>
        <Link href='/'>
          <button id='PhoneCountinueShoppingBtn' className='Yellow-btn'>
            Countinue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BasketPage;
