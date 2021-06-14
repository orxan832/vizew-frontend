import * as constants from "../constants/user";

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
