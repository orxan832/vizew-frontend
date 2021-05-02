import * as constants from "../constants/userConstants";
import axios from "../../helper/axios";
import { error } from "../../helper/notification";
import { setAuthToken } from "../../helper/functions";

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

const loginStart = () => {
  return {
    type: constants.LOGIN_START,
  };
};

const loginSuccess = (token, id, message) => {
  return {
    type: constants.LOGIN_SUCCESS,
    token,
    id,
    message,
  };
};

const loginFail = () => {
  return {
    type: constants.LOGIN_FAIL,
  };
};

export const login = (userData, history) => (dispatch) => {
  dispatch(loginStart());
  axios
    .post(`user/login`, userData)
    .then((res) => {
      if (res.data.message) {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        dispatch(
          loginSuccess(res.data.token, res.data.userId, res.data.message)
        );
        history.replace("/");
      } else {
        error(res.data);
      }
    })
    .catch((err) => {
      error("Xəta baş verdi: " + err);
      dispatch(loginFail());
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  return {
    type: constants.LOGOUT,
  };
};
