import * as constants from "../constants/common";

export const setState = (name, value) => {
  return {
    type: constants.SET_STATE,
    name,
    value,
  };
};
