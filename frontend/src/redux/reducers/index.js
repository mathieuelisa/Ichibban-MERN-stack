import { combineReducers } from "redux";

// Reducers
import { productsReducer, productDetailReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import {
  userInfoReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfilReducer,
} from "./userReducer";
import { createOrderReducer, detailOrderReducer } from "./ordersReducer";

// Setting each reducers
const reducers = combineReducers({
  ListProducts: productsReducer,
  ListDetailProduct: productDetailReducer,
  Cart: cartReducer,
  UserLogin: userLoginReducer,
  UserRegister: userRegisterReducer,
  UserInfo: userInfoReducer,
  UserUpdateProfil: userUpdateProfilReducer,
  CreateOrder: createOrderReducer,
  DetailOrder: detailOrderReducer,
});

export default reducers;
