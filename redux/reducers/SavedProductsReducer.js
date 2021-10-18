const SavedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVED_PRODUCTS':
      return [...state, action.payload];

    case 'DELETE_FROM_SAVED_PRODUCTS':
      return action.payload;

    default:
      return state;
  }
};
export default SavedProductsReducer;
