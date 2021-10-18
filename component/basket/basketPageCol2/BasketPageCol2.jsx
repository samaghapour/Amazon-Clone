import CallToCheckoutBox from './CallToCheckoutBox';
import SponsoredProductsBox from './SponsoredProductsBox';

const BasketPageCol2 = ({ sponsoredData }) => {
  return (
    <div id='BasketPageCol2'>
      <CallToCheckoutBox />
      <SponsoredProductsBox sponsoredData={sponsoredData} />
    </div>
  );
};

export default BasketPageCol2;
