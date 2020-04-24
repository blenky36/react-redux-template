import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from '../_constants/actionTypes';

export const loginAttempt = () => ({
    type: LOGIN_ATTEMPT
});

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});