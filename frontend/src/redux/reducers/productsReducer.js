import {
  PRODUCT_LIST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESSFUL,
} from "../actions/productsActions";

const initialState = {};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_LIST:
    return {loading: true, product=[]}
      break;
    case PRODUCT_LIST_SUCCESSFUL:
    return {loading: false}
        break;
    case PRODUCT_LIST_FAIL:
        return {loading:true, error: action.payload}
        default:
            return state
  }
};

export default productsReducer;
