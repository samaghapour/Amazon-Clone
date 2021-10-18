import SponsoredProductCard from './SponsoredProductCard';

const SponsoredProductsBox = ({ sponsoredData }) => {
  const data =
    sponsoredData && sponsoredData?.length > 4
      ? sponsoredData.slice(-4).reverse()
      : sponsoredData && sponsoredData?.length > 0 && sponsoredData.reverse();

  return (
    <div id='SponsoredProductsBox'>
      <div id='SponsoredProductsBoxTitleContainer'>
        <span id='SponsoredProductsBoxTitle' className='BaketPageTitles'>
          Sponsored Products related to items in your cart
        </span>
      </div>
      <div id='SponsoredProductsContainer'>
        {data &&
          data.map((product) => {
            return <SponsoredProductCard data={product} key={product?.id} />;
          })}
      </div>
    </div>
  );
};

export default SponsoredProductsBox;
