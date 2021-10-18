import ImagesSec from './ImagesSec';
import TextSec from './TextSec';
import AddToCartSec from './AddToCartSec';
import { useSelector } from 'react-redux';

const DetailsRow1 = () => {
  const DetailsData = useSelector((state) => state.ProductDetails);

  return (
    <div id='DetailsRow1'>
      <ImagesSec data={DetailsData?.assets} />
      <TextSec data={DetailsData} />
      <AddToCartSec data={DetailsData} />
    </div>
  );
};

export default DetailsRow1;
