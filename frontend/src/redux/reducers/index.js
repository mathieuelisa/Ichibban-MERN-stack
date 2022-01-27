import { combineReducers } from "redux";

import productsReducer from "./productsReducer";

// Setting each reducers
const reducers = combineReducers({
  ListProducts: productsReducer,
});

export default reducers;
