const ProductDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DETAILS':
      return action.payload;
    default:
      return state;
  }
};
export default ProductDetailsReducer;
