import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetProductDetails } from '../../redux/actions';
import DetailsRow1 from './detailsRow1/DetailsRow1';
import DetailsRow2 from './DetailsRow2';
import DetailsRow3 from './DetailsRow3';
import DetailsRow4 from './DetailsRow4';
import DetailsRow5 from './DetailsRow5';
import DetailsRow6 from './detailsRow6/DetailsRow6';
import DetailsRow7 from './detailsRow7';
import Loading from '../Loading';

const ProductDetailsPage = ({ productId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.IsLoading);

  ('prod_nPEVlNQqAy5a7d');
  useEffect(() => {
    dispatch(GetProductDetails(productId));
  }, [productId]);

  return (
    <div id='ProductDetailsPage'>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <DetailsRow1 />
          <DetailsRow2 />
          <DetailsRow3 />
          <DetailsRow4 />
          <DetailsRow5 />
          <DetailsRow6 />
          <DetailsRow7 />
        </>
      )}
    </div>
  );
};

export default ProductDetailsPage;
