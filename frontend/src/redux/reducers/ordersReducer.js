import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESSFUL,
  CREATE_ORDER_FAIL,
  DETAIL_ORDER_REQUEST,
  DETAIL_ORDER_SUCCESSFUL,
  DETAIL_ORDER_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESSFUL,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from "../actions/orderActions";

export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ORDER_SUCCESSFUL:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const detailOrderReducer = (
  state = { loading: true, shippingAddress: {}, orderItems: [] },
  action
) => {
  switch (action.type) {
    case DETAIL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_ORDER_SUCCESSFUL:
      return {
        loading: false,
        order: action.payload,
      };
    case DETAIL_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESSFUL:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};
