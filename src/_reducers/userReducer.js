import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from '../_constants/actionTypes';

const initialState = { userData: { token: null, username: null }, isLoggedIn: true, isLoading: false };

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_ATTEMPT:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            const userData = payload;
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                userData
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggedIn: false,
                userData: { token: null, username: null }
            }
        default:
            return state;
    }
}