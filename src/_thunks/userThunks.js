import { loginAttempt, loginSuccess, loginFailure } from '../_actions/userActions';

export const loginUser = (username, password) => (dispatch) => {
    try {
        dispatch(loginAttempt);
        console.log({ username, password });
        dispatch(loginSuccess());
    } catch (e) {
        // this wont happen until we try to contact a server
        console.log(e);
        dispatch(loginFailure);
    }
}