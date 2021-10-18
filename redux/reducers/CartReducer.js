const CartReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_CART':
      return action.payload;

    case 'DELETE_ADDED_PRODUCTS':
      return action.payload;

    case 'UPDATE_CART_BY_QUANTITY':
      return action.payload;

    default:
      return state;
  }
};

export default CartReducer;
