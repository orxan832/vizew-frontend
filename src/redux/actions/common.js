import * as constants from "../constants/common";

export const setState = (name, value) => ({ type: constants.SET_STATE, name, value, });
