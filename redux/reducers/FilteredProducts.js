const FilteredProductReducer = (state = null, action) => {
  switch (action.type) {
    case 'FILTERED_PRODUCT_BY_BRANDS':
      return { ...state, filters: action.payload };

    case 'FILTERED_PRODUCT_BY_PRICE':
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
export default FilteredProductReducer;
