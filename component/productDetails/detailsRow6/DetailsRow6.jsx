import CustomerStars from './CustomerStars';
import CustomerComments from './CustomerComments';

const DetailsRow6 = () => {
  return (
    <div
      id='DetailsRow6'
      title="this is dummy customer reviews.
     we don't have back-end for it">
      <h2 className='details-black-title'>Customer reviews</h2>
      <div id='DetailsRow6Container'>
        <CustomerStars />
        <CustomerComments />
      </div>
    </div>
  );
};

export default DetailsRow6;
