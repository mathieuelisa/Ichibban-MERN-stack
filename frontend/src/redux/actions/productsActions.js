import axios from "axios";

// Actions type
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
