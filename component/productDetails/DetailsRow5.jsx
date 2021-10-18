const DetailsRow5 = () => {
  return (
    <div id='DetailsRow5'>
      <h2 className='DetailsSearchTitle'>Customer questions & answers</h2>

      <div className='DetailsSearchInputBox'>
        <i className='DetailsSearchIcon' />
        <input
          type='text'
          placeholder='Type your question or keyword'
          className='DetailsSearchInput'
        />
      </div>

      <div id='TypicalQuestionsBox'>
        <span>Typical questions asked about products:</span>
        <ul>
          <li>- Is the item durable?</li>
          <li>- Is this item easy to use?</li>
          <li> - What are the dimensions of this item?</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsRow5;
