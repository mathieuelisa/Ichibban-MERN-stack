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

const initialState = {
  Cart: { cartItems: storageItem },
  UserLogin: { userInformation: storageUserInfos },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
