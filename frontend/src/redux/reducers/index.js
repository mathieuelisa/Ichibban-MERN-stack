import { combineReducers } from "redux";

// Reducers
import {
  productsReducer,
  productDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCreateReviewReducer,
} from "./productsReducer";

import { cartReducer } from "./cartReducer";

import {
  userDeleteReducer,
  userInfoReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfilReducer,
  userUpdateReducer,
} from "./userReducer";

import {
  createOrderReducer,
  detailOrderReducer,
  orderDeliveredReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
} from "./ordersReducer";

const reducers = combineReducers({
  ListProducts: productsReducer,
  ProductDelete: productDeleteReducer,
  ProductCreate: productCreateReducer,
  ProductUpdate: productUpdateReducer,
  ProductCreateReview: productCreateReviewReducer,
  ListDetailProduct: productDetailReducer,
  Cart: cartReducer,
  UserLogin: userLoginReducer,
  UserRegister: userRegisterReducer,
  UserInfo: userInfoReducer,
  UserUpdateProfil: userUpdateProfilReducer,
  UserUpdate: userUpdateReducer,
  UserDelete: userDeleteReducer,
  CreateOrder: createOrderReducer,
  DetailOrder: detailOrderReducer,
  OrderPay: orderPayReducer,
  OrderDelivery: orderDeliveredReducer,
  OrderListMy: orderListMyReducer,
  OrderList: orderListReducer,
  UserList: userListReducer,
});

export default reducers;
