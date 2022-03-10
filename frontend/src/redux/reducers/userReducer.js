import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESSFUL,
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_RESET,
  USER_INFO_SUCCESSFUL,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESSFUL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESSFUL,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFIL_FAIL,
  USER_UPDATE_PROFIL_REQUEST,
  USER_UPDATE_PROFIL_RESET,
  USER_UPDATE_PROFIL_SUCCESSFUL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESSFUL,
} from "../actions/userActions";

export const userLoginReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESSFUL:
      return { loading: false, userInformation: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESSFUL:
      return { loading: false, userInformation: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userInfoReducer = (state = { user: {} }, action = {}) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return { ...state, loading: true };
    case USER_INFO_SUCCESSFUL:
      return { loading: false, user: action.payload };
    case USER_INFO_FAIL:
      return { loading: false, error: action.payload };
    case USER_INFO_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfilReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_UPDATE_PROFIL_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_PROFIL_SUCCESSFUL:
      return {
        loading: false,
        userInformation: action.payload,
        success: true,
      };
    case USER_UPDATE_PROFIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_PROFIL_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action = {}) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESSFUL:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return (state = {});
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESSFUL:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action = {}) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESSFUL:
      return { loading: false, user: payload.data };
    case USER_UPDATE_FAIL:
      return { loading: false, error: payload.data };
    case USER_UPDATE_RESET:
      return (user = {});
    default:
      return state;
  }
};
