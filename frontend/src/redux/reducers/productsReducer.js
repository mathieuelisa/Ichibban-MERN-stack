import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESSFUL,
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_SUCCESSFUL,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DELETE_SUCCESSFUL,
  PRODUCT_DELETE_REQ,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQ,
  PRODUCT_CREATE_SUCCESSFUL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQ,
  PRODUCT_UPDATE_SUCCESSFUL,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQ,
  PRODUCT_CREATE_REVIEW_SUCCESSFUL,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQ,
  PRODUCT_TOP_SUCCESSFUL,
  PRODUCT_TOP_FAIL,
} from "../actions/productsActions";

export const productsReducer = (state = { products: [] }, action = {}) => {
  switch (action.type) {
    case PRODUCT_LIST_REQ:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESSFUL:
      return {
        loading: false,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
      };
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

export const productDeleteReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQ:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESSFUL:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQ:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESSFUL:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return (state = {});
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action = {}) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQ:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESSFUL:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productCreateReviewReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQ:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESSFUL:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const bestProductsReducer = (state = { products: [] }, action = {}) => {
  switch (action.type) {
    case PRODUCT_TOP_REQ:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESSFUL:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
