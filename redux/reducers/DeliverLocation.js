const DeliverLocationReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_DELIVERY_LOCATION':
      return action.payload;
    default:
      return state;
  }
};
export default DeliverLocationReducer;
