import Link from 'next/link';

const SponsoredProductCard = ({ data }) => {
  return (
    <div className='sponsored-product-card'>
      <div className='sponsored-product-card-image-container'>
        <Link href={`/addedProducts/${data && data.id}`}>
          <img
            src={data && data?.image?.url}
            alt={data && data?.name}
            className='sponsored-product-card-image'
          />
        </Link>
      </div>

      <div className='sponsored-product-card-text-container'>
        <div className='sponsored-product-card-title-container'>
          <Link href={`/sponsoredProducts/${data && data?.id}`}>
            <span className='card-title'>{data && data?.name}</span>
          </Link>
        </div>

        <div className='card-rate-box' title='dummy rate'>
          <div className='rate-stars' />
          <span className='rate-numbers details-a'> 155,227</span>
        </div>

        <div className='sponsored-product-card-price-container'>
          <span className='sponsored-product-card-price  details-orange-title'>
            {data && data?.price?.formatted_with_symbol}
          </span>
        </div>

        <div className='sponsored-product-card-add-btn-container'>
          <Link href={`/sponsoredProducts/${data && data?.id}`}>
            <button className='sponsored-product-card-add-btn white-btn'>
              all buying options
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsoredProductCard;
