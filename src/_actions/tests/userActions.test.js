import { loginAttempt, loginSuccess, loginFailure, logoutRequest } from '../userActions';
import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from '../../_constants/actionTypes';

describe('The userActions', () => {
    describe('The loginAttempt action', () => {
        it('Returns an object of type LOGIN_ATTEMPT', () => {

            const expected = {
                type: LOGIN_ATTEMPT
            }
            const actual = loginAttempt();

            expect(actual).toEqual(expected);
        });
    });

    describe('The loginSucess action', () => {
        it('Returns an object of type LOGIN_SUCCESS with the userData in the payload', () => {
            const fakeUserData = { token: 'test', username: 'test' };

            const expected = {
                type: LOGIN_SUCCESS,
                payload: fakeUserData
            }
            const actual = loginSuccess(fakeUserData);

            expect(actual).toEqual(expected);
        });
    });

    describe('The loginFailure action', () => {
        it('Returns an object of type LOGIN_FAILURE', () => {

            const expected = {
                type: LOGIN_FAILURE
            }
            const actual = loginFailure();

            expect(actual).toEqual(expected);
        });
    });

    describe('The logoutRequest action', () => {
        it('Returns an object of type LOGOUT_REQUEST', () => {

            const expected = {
                type: LOGOUT_REQUEST
            }
            const actual = logoutRequest();

            expect(actual).toEqual(expected);
        });
    });
});

