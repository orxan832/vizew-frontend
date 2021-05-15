import * as constants from "../constants/user";
import axios from "../../helper/axios";

const registerStart = () => {
  return {
    type: constants.REGISTER_START,
  };
};

const registerSuccess = (message) => {
  return {
    type: constants.REGISTER_SUCCESS,
    message,
  };
};

const registerFail = () => {
  return {
    type: constants.REGISTER_FAIL,
  };
};

export const register = (userData, history) => (dispatch) => {
  dispatch(registerStart());
  axios
    .post(`user/register`, userData)
    .then((res) => {
      dispatch(registerSuccess(res.data));
      history.replace("/login");
    })
    .catch((err) => dispatch(registerFail()));
};

export const login = (user) => {
  return {
    type: constants.LOGIN,
    user,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  return {
    type: constants.LOGOUT,
  };
};
