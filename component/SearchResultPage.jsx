import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCol1 from './pruducts/productCol1/ProductsCol1';
import ProductsCol2 from './pruducts/productsCol2/ProductsCol2';
import { SearchProduct } from '../redux/actions';
import Loading from './Loading';

const SearchResultPage = () => {
  const isLoading = useSelector((state) => state.IsLoading);
  const dispatch = useDispatch();
  const AmazonAllProducts = useSelector((state) => state.AmazonAllProducts);

  useEffect(() => {
    const searchCategory = document.getElementById('SearchSelect')?.value,
      searchValue = document.getElementById('SearchInput')?.value;

    dispatch(SearchProduct(searchCategory, searchValue, AmazonAllProducts));
  }, [document.getElementById('SearchInput')?.value]);

  return (
    <div id='SearchResultPage'>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <ProductsCol1 />
          <ProductsCol2 category='SearchResult' />
        </>
      )}
    </div>
  );
};

export default SearchResultPage;
