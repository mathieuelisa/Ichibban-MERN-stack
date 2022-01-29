import axios from "axios";

// Actions type all products
export const PRODUCT_LIST_REQ = "product_list_req";
export const PRODUCT_LIST_SUCCESSFUL = "product_list_successful";
export const PRODUCT_LIST_FAIL = "product_list_fail";

export const productList = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQ });
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// Actions type one product
export const PRODUCT_DETAIL_REQ = "product_detail_req";
export const PRODUCT_DETAIL_SUCCESSFUL = "product_detail_successful";
export const PRODUCT_DETAIL_FAIL = "product_detail_fail";

export const productDetailList = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQ });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAIL_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
