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

export const PRODUCT_DELETE_REQ = "product_delete_req";
export const PRODUCT_DELETE_SUCCESSFUL = "product_delete_successful";
export const PRODUCT_DELETE_FAIL = "product_delete_fail";

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQ });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESSFUL });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const PRODUCT_CREATE_REQ = "product_create_req";
export const PRODUCT_CREATE_SUCCESSFUL = "product_create_successful";
export const PRODUCT_CREATE_FAIL = "product_create_fail";
export const PRODUCT_CREATE_RESET = "product_create_reset";

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQ });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    const { data } = await axios.post(`/api/products`, {}, config);

    dispatch({ type: PRODUCT_CREATE_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const PRODUCT_UPDATE_REQ = "product_update_req";
export const PRODUCT_UPDATE_SUCCESSFUL = "product_update_successful";
export const PRODUCT_UPDATE_FAIL = "product_update_fail";
export const PRODUCT_UPDATE_RESET = "product_update_reset";
