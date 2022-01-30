import { combineReducers } from "redux";

// Reducers
import { productsReducer, productDetailReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

// Setting each reducers
const reducers = combineReducers({
  ListProducts: productsReducer,
  ListDetailProduct: productDetailReducer,
  Cart: cartReducer,
});

export default reducers;
