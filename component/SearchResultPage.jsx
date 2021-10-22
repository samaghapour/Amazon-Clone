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
    const searchCategory = document.querySelector('.SearchSelect')?.value,
      searchValue =
        window.innerWidth <= 480
          ? document.querySelector('#PhoneSearchBox .SearchInput')?.value
          : document.querySelector('.SearchInput')?.value;

    if (searchValue !== '') {
      dispatch(SearchProduct(searchCategory, searchValue, AmazonAllProducts));
    }
  }, [
    document.querySelector('.SearchInput')?.value,
    document.querySelector('.SearchSelect')?.value,
    document.querySelector('#PhoneSearchBox .SearchInput')?.value,
  ]);

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
