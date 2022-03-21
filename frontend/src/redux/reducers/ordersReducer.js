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
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESSFUL,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_SUCCESSFUL,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESSFUL,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_RESET,
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

export const orderDeliveredReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVERED_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DELIVERED_SUCCESSFUL:
      return {
        loading: false,
        success: true,
      };
    case ORDER_DELIVERED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_DELIVERED_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { order: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_MY_SUCCESSFUL:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_LIST_MY_RESET:
      return { order: [] };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESSFUL:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
