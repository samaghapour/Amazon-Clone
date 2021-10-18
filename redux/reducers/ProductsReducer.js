const ProductReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_EXISTING_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};
export default ProductReducer;
