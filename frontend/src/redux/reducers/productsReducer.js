import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESSFUL,
} from "../actions/productsActions";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_LIST_REQ:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESSFUL:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
