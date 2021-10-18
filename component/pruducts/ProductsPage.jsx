import ProductsCol1 from './productCol1/ProductsCol1';
import ProductsCol2 from './productsCol2/ProductsCol2';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../../redux/actions';
import { useEffect } from 'react';
import Loading from '../Loading';

const ProductsPage = ({ productCategory }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.IsLoading);

  useEffect(() => {
    dispatch(GetProducts(productCategory));
  }, [productCategory]);

  return (
    <div id='ProductsPage'>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <ProductsCol1 />
          <ProductsCol2 category={productCategory} />
        </>
      )}
    </div>
  );
};

export default ProductsPage;
