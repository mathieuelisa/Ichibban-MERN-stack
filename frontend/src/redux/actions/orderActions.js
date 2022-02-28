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
