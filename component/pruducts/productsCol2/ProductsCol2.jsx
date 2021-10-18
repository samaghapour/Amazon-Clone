import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductsCol2 = ({ category }) => {
  const Products = useSelector((state) => state.Products);
  const FilteredProducts = useSelector((state) => state.FilteredProduct);

  return (
    <div id='ProductsCol2'>
      {FilteredProducts &&
      FilteredProducts.filters &&
      FilteredProducts.filters.length > 0
        ? FilteredProducts.filters.map((product) => {
            return (
              <ProductCard
                details={product}
                key={product.id}
                category={category}
              />
            );
          })
        : Products &&
          Products.length > 0 &&
          Products.map((product) => {
            return (
              <ProductCard
                details={product}
                key={product.id}
                category={category}
              />
            );
          })}
    </div>
  );
};

export default ProductsCol2;
