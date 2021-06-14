import * as constants from "../constants/user";

const initialState = {
  user: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case constants.LOGOUT:
      return {
        ...state,
        user: false,
      };
    default:
      return state;
  }
};

export default userReducer;
