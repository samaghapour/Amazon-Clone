const AvailabilityFilter = () => {
  return (
    <div id='AvailabilityFilter' title='dummy'>
      <span className='FiltersTitle'>Availability</span>
      <li id='AvailabilityItem' className='filter-items'>
        <label id='AvailabilityItemLabel' className='filter-items-label'>
          <input
            type='checkBox'
            className='AvailabilityItemCheckbox filter-items-checkbox'
          />
          Include Out of Stock
        </label>
      </li>
    </div>
  );
};

export default AvailabilityFilter;
