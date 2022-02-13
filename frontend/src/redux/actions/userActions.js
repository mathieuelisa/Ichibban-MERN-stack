import axios from "axios";

export const USER_LOGIN_REQUEST = "user_login_request";
export const USER_LOGIN_SUCCESSFUL = "user_login_successful";
export const USER_LOGIN_FAIL = "user_login_fail";
export const USER_LOGOUT = "user_logout";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });

    localStorage.setItem("userInformations", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
