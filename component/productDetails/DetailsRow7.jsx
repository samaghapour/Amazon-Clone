import { useSelector } from 'react-redux';
import ProductSlider from '../ProductSlider';

const DetailsRow7 = () => {
  const data = useSelector((state) => state.ProductDetails);
  const related_products = data && data.related_products;
  const category = data && data.categories[data.categories.length - 1].slug;

  return (
    <div id='DetailsRow7'>
      <h2 className='details-black-title'>
        Recommended based on your shopping trends
      </h2>
      <div id='DetailsRow7SliderContainer'>
        <ProductSlider
          products={related_products}
          category={category}
          CardType='RelatedProducts'
        />
      </div>
    </div>
  );
};

export default DetailsRow7;
