import { combineReducers } from "redux";

// Reducers
import { productsReducer, productDetailReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import {
  userDeleteReducer,
  userInfoReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfilReducer,
} from "./userReducer";
import {
  createOrderReducer,
  detailOrderReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./ordersReducer";

// Setting each reducers
const reducers = combineReducers({
  ListProducts: productsReducer,
  ListDetailProduct: productDetailReducer,
  Cart: cartReducer,
  UserLogin: userLoginReducer,
  UserRegister: userRegisterReducer,
  UserInfo: userInfoReducer,
  UserUpdateProfil: userUpdateProfilReducer,
  UserDelete: userDeleteReducer,
  CreateOrder: createOrderReducer,
  DetailOrder: detailOrderReducer,
  OrderPay: orderPayReducer,
  OrderListMy: orderListMyReducer,
  UserList: userListReducer,
});

export default reducers;
