const RecentlyViewedReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RECENTLY_PRODUCT':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default RecentlyViewedReducer;
