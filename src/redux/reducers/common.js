import * as constants from "../constants/common";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_STATE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default userReducer;
