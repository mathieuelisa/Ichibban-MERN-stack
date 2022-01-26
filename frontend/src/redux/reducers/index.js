import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

// Setting each reducers
const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;
