const AmazonAllProductsReducer = (state = null, action) => {
  switch (action.type) {
    case 'ALL_AMAZON_PRODUCTS':
      return action.payload;

    default:
      return state;
  }
};

export default AmazonAllProductsReducer;
