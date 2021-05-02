
import * as constants from '../constants/userConstants';

const initialState = {
    message: false,
    isAuth: localStorage.getItem('token') ? true : false,
    userId: localStorage.getItem('id') || null,
    loading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case constants.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        case constants.REGISTER_FAIL:
            return {
                ...state,
                loading: false
            }
        case constants.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                message: action.message,
                isAuth: true,
                userId: action.id,
                loading: false
            }
        case constants.LOGIN_FAIL:
            return {
                ...state,
                isAuth: false,
                loading: false
            }
        case constants.LOGOUT:
            return {
                ...state,
                isAuth: false,
                message: false
            }
        default:
            return state;
    }
}

export default userReducer;