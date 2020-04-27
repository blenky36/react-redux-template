import { loginAttempt, loginSuccess, loginFailure } from '../_actions/userActions';

export const loginUser = (username, password) => (dispatch) => {
    try {
        dispatch(loginAttempt());
        console.log({ username, password });
        const fakeUserData = { username, token: 'test' };
        dispatch(loginSuccess(fakeUserData));
    } catch (e) {
        // this wont happen until we try to contact a server
        console.log(e);
        dispatch(loginFailure());
    }
}