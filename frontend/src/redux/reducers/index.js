import { combineReducers } from "redux";

// Reducers
import { productsReducer, productDetailReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { userLoginReducer } from "./userReducer";

// Setting each reducers
const reducers = combineReducers({
  ListProducts: productsReducer,
  ListDetailProduct: productDetailReducer,
  Cart: cartReducer,
  UserLogin: userLoginReducer,
});

export default reducers;
