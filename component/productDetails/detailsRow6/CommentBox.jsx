const CommentBox = ({
  starNumber,
  name = 'anonymous',
  title = '',
  date = new Date().getFullYear(),
  location,
  comment = '',
  helpful = 0,
}) => {
  const starsPosition = {
    backgroundPosition: `${
      starNumber === 0
        ? '-190px -1427px'
        : starNumber === 1
        ? '-380px -973px'
        : starNumber === 2
        ? '-96px -380px'
        : starNumber === 3
        ? '-284px -1427px'
        : starNumber === 4
        ? '0 -83px'
        : starNumber === 5
        ? '-96px -355px'
        : '-190px -1427px'
    }`,
  };
  return (
    <div className='comment-box'>
      <div className='comment-box-row-1'>
        <img
          src='/assets/images/defaultProfile.jfif'
          alt={name}
          className='comment-box-user-profile'
        />
        <span className='comment-box-username'>{name}</span>
      </div>

      <div className='comment-box-row-2'>
        <div className='rate-stars' style={starsPosition} />
        <span className='comment-box-user-title ellipsis'>{title}</span>
      </div>

      <div className='comment-box-row-3'>
        <span className='comment-box-date-location'>
          Reviewed in the {location} on {date}
        </span>
      </div>

      <div className='comment-box-row-4'>
        <p className='comment-box-user-comment'>{comment}</p>
      </div>

      {helpful > 0 && (
        <div className='comment-box-row-5'>
          <span className='comment-box-user-helpful-number'>
            {helpful} people found this helpful
          </span>
        </div>
      )}

      <div className='comment-box-row-6'>
        <button className='comment-box-helpful-btn'>helpful</button>

        <span className='text-separator'>|</span>

        <button className='comment-box-report-btn'>Report abuse</button>
      </div>
    </div>
  );
};

export default CommentBox;
