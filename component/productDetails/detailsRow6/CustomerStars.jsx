const CustomerStars = () => {
  return (
    <div id='CustomerStars'>
      <div className='card-rate-box' title='dummy rate'>
        <div className='rate-stars'></div>
        <span className='rate-numbers'> 4 out of 5</span>
      </div>
      <span id='GlobalRatingSpan'>155,227 global ratings</span>

      <div id='StarsProgressBarBox'>
        <div className='StarsProgressBarItem'>
          <span className='details-a'>5 stars</span>
          <div className='StarsProgressBar five' />
          <span className='details-a'>3%</span>
        </div>

        <div className='StarsProgressBarItem'>
          <span className='details-a'>4 stars</span>
          <div className='StarsProgressBar four' />
          <span className='details-a'>90%</span>
        </div>

        <div className='StarsProgressBarItem'>
          <span className='details-a'>3 stars</span>
          <div className='StarsProgressBar three' />
          <span className='details-a'>2%</span>
        </div>

        <div className='StarsProgressBarItem'>
          <span className='details-a'>2 stars</span>
          <div className='StarsProgressBar two' />
          <span className='details-a'>3%</span>
        </div>

        <div className='StarsProgressBarItem'>
          <span className='details-a'>1 stars</span>
          <div className='StarsProgressBar one' />
          <span className='details-a'>2%</span>
        </div>
      </div>
      <span className='details-a' id='RatingsCalculateLink'>
        How are ratings calculated?
      </span>

      <div id='ReviewProductBox'>
        <h2 className='details-black-title'>Review this product</h2>
        <span>Share your thoughts with other customers</span>
        <button id='ReviewBtn'>Write a customer review</button>
      </div>
    </div>
  );
};

export default CustomerStars;
