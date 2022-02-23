import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers/index.js";

const storageItem = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const storageUserInfos = localStorage.getItem("userInformations")
  ? JSON.parse(localStorage.getItem("userInformations"))
  : null;

const storageShippingAddress = localStorage.getItem("addressShipping")
  ? JSON.parse(localStorage.getItem("addressShipping"))
  : {};

const storagePaymentMethod = localStorage.getItem("methodShopping")
  ? JSON.parse(localStorage.getItem("methodShopping"))
  : {};

const initialState = {
  Cart: {
    cartItems: storageItem,
    shippingAddress: storageShippingAddress,
    paymentMethod: storagePaymentMethod,
  },
  UserLogin: { userInformation: storageUserInfos },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
