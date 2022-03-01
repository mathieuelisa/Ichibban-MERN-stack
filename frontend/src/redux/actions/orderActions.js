import axios from "axios";

export const CREATE_ORDER_REQUEST = "create_order_request";
export const CREATE_ORDER_SUCCESSFUL = "create_order_successful";
export const CREATE_ORDER_FAIL = "create_order_fail";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({ type: CREATE_ORDER_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const DETAIL_ORDER_REQUEST = "detail_order_request";
export const DETAIL_ORDER_SUCCESSFUL = "detail_order_successful";
export const DETAIL_ORDER_FAIL = "detail_order_fail";

export const getOrderDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DETAIL_ORDER_REQUEST });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({ type: DETAIL_ORDER_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: DETAIL_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const ORDER_PAY_REQUEST = "order_pay_request";
export const ORDER_PAY_SUCCESSFUL = "order_pay_successful";
export const ORDER_PAY_FAIL = "order_pay_fail";
export const ORDER_PAY_RESET = "order_pay_reset";

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${id}/pay`,
      paymentResult,
      config
    );

    dispatch({ type: ORDER_PAY_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
