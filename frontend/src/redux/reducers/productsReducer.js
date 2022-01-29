import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESSFUL,
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_SUCCESSFUL,
  PRODUCT_DETAIL_FAIL,
} from "../actions/productsActions";

export const productsReducer = (state = { products: [] }, action = {}) => {
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

export const productDetailReducer = (state = { product: {} }, action = {}) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQ:
      return { loading: true, ...state };
    case PRODUCT_DETAIL_SUCCESSFUL:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
