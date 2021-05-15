import * as constants from "../constants/user";

const initialState = {
  user: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case constants.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case constants.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
      };
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
