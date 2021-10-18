import BrandFilters from './BrandFilters';
import PriceFilters from './PriceFilters';
import AvailabilityFilter from './AvailabilityFilter';
import SellerFilters from './SellerFilters';
import CustomerReview from './CustomerReview';

export const ProductsCol1 = () => {
  return (
    <div id='ProductsCol1'>
      <CustomerReview />
      <BrandFilters />
      <PriceFilters />
      <SellerFilters />
      <AvailabilityFilter />
    </div>
  );
};

export default ProductsCol1;
