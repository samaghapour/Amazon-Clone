import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import ProductDetailsReducer from './ProductDetailsReducer';
import DeliverLocationReducer from './DeliverLocation';
import IsLoadingReducer from './LoadingReducer';
import FilteredProductReducer from './FilteredProducts';
import CartReducer from './CartReducer';
import RecentlyViewedReducer from './RecentlyViewedReducer';
import SavedProductsReducer from './SavedProductsReducer';
import CategoriesReducer from './CategoriesReducer';
import AmazonAllProductsReducer from './AmazonAllProductsReducer';

export const AllReducers = combineReducers({
  Products: ProductsReducer,
  ProductDetails: ProductDetailsReducer,
  DeliveryLocation: DeliverLocationReducer,
  IsLoading: IsLoadingReducer,
  FilteredProduct: FilteredProductReducer,
  Cart: CartReducer,
  RecentlyViewedProducts: RecentlyViewedReducer,
  SavedProducts: SavedProductsReducer,
  Categories: CategoriesReducer,
  AmazonAllProducts: AmazonAllProductsReducer,
});
