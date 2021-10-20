import HomeSlider from './HomeSlider';
import HomeProductsBox from './home products/HomeProductsBox';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commerce } from '../../lib/Commerce';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    commerce.products
      .list({
        limit: 300,
      })
      .then((response) =>
        dispatch({ type: 'ALL_AMAZON_PRODUCTS', payload: response.data })
      );
  }, []);

  return (
    <div id='HomePage'>
      <HomeSlider />
      <HomeProductsBox />
    </div>
  );
};

export default HomePage;
