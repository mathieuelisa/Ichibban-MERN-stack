import { combineReducers } from "redux";

import { productsReducer, productDetailReducer } from "./productsReducer";

// Setting each reducers
const reducers = combineReducers({
  ListProducts: productsReducer,
  ListDetailProduct: productDetailReducer,
});

export default reducers;
