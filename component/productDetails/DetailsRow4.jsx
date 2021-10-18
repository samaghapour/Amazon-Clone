import { useSelector } from 'react-redux';

const DetailsRow4 = () => {
  const data = useSelector((state) => state.ProductDetails);

  return (
    <div id='DetailsRow4'>
      <span className='details-orange-title'>Product description</span>

      <div
        id='ProductDescription'
        dangerouslySetInnerHTML={{ __html: data && data?.description }}
      />
    </div>
  );
};

export default DetailsRow4;
