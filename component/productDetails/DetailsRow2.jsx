const DetailsRow2 = () => {
  return (
    <div id='DetailsRow2' title='dummy'>
      <h2 className='details-black-title'>Have a question?</h2>
      <span>Find answers in product info, Q&As, reviews</span>
      <div className='DetailsSearchInputBox'>
        <i className='DetailsSearchIcon' />
        <input
          type='text'
          placeholder='Type your question or keyword'
          className='DetailsSearchInput'
        />
      </div>
    </div>
  );
};

export default DetailsRow2;
