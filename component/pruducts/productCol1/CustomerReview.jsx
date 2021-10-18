const CustomerReview = () => {
  return (
    <div id='CustomerReview' title='dummy filter'>
      <span className='FiltersTitle'>Avg. Customer Review</span>

      <ul id='CustomerReviewList'>
        <li className='customer-review-items filter-items'>
          <div className='customer-review-stars one-star'></div>& up
        </li>
        <li className='customer-review-items filter-items'>
          <div className='customer-review-stars two-star'></div>& up
        </li>
        <li className='customer-review-items filter-items'>
          <div className='customer-review-stars three-star'></div>& up
        </li>
        <li className='customer-review-items filter-items'>
          <div className='customer-review-stars four-star'></div>& up
        </li>
      </ul>
    </div>
  );
};

export default CustomerReview;
