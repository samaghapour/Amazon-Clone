const SellerFilters = () => {
  return (
    <div id='SellerFilters' title='dummy filter'>
      <span className='FiltersTitle'>Seller</span>

      <ul id='SellerList'>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Amazon Export Sales LLC.
          </label>
        </li>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Amazon.com
          </label>
        </li>

        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Bobby Mirzoyan
          </label>
        </li>

        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Kay's Krazy Kreations
          </label>
        </li>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Petyoy
          </label>
        </li>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            TC Office Supplies
          </label>
        </li>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Appliance Tech Support Inc
          </label>
        </li>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            CosmeticMall
          </label>
        </li>
        <li className='seller-items filter-items'>
          <label className='seller-items-label filter-items-label'>
            <input
              type='checkBox'
              className='seller-items-checkbox filter-items-checkbox'
            />
            Retailseeker
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SellerFilters;
