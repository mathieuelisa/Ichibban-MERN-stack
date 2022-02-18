import axios from "axios";

// Login actions
export const USER_LOGIN_REQUEST = "user_login_request";
export const USER_LOGIN_SUCCESSFUL = "user_login_successful";
export const USER_LOGIN_FAIL = "user_login_fail";
export const USER_LOGOUT = "user_logout";

// Register actions
export const USER_REGISTER_REQUEST = "user_register_request";
export const USER_REGISTER_SUCCESSFUL = "user_register_successful";
export const USER_REGISTER_FAIL = "user_register_fail";

// Detail actions
export const USER_INFO_REQUEST = "user_info_request";
export const USER_INFO_SUCCESSFUL = "user_info_successful";
export const USER_INFO_FAIL = "user_info_fail";

// Update actions
export const USER_UPDATE_PROFIL_REQUEST = "user_update_request";
export const USER_UPDATE_PROFIL_SUCCESSFUL = "user_update_successful";
export const USER_UPDATE_PROFIL_FAIL = "user_update_fail";
export const USER_UPDATE_PROFIL_RESET = "user_update_reset";

// Login profil user
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

// Logout profil user
export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });

  localStorage.removeItem("userInformations");
};

// Register new user
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESSFUL, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });

    localStorage.setItem("userInformations", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// Get infos profils
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_INFO_REQUEST });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({ type: USER_INFO_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: USER_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// Get infos profils
export const updateUserProfil = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFIL_REQUEST });

    const {
      UserLogin: { userInformation },
    } = getState();

    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInformation.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profil`, user, config);

    dispatch({ type: USER_UPDATE_PROFIL_SUCCESSFUL, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });

    localStorage.setItem("userInformations", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
