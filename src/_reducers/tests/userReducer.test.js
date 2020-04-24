import { userReducer } from '../userReducer';

const getFakeAction = (type, payload) => ({ type, payload });

describe('The userReducer', () => {
    it('Sets isLoading to true when passed LOGIN_ATTEMPT', () => {
        const fakeState = { isLoading: false };
        const fakeAction = getFakeAction('LOGIN_ATTEMPT');

        const expected = { isLoading: true }
        const actual = userReducer(fakeState, fakeAction);
        
        expect(actual).toEqual(expected);
    });
    
    it('Sets isLoading to false, isLoggedIn to true and sets the payload userData when passed LOGIN_SUCCESS', () => {
        const fakeState = { isLoading: true, isLoggedIn: false, userData: { token: null, username: null } };
        const fakeUserData = { token: 'test', username: 'test' };
        const fakeAction = getFakeAction('LOGIN_SUCCESS', fakeUserData);
        
        const expected = { isLoading: false, isLoggedIn: true, userData: fakeUserData}
        const actual = userReducer(fakeState, fakeAction);

        expect(actual).toEqual(expected);
    });

    it('Sets isLoading to false when passed LOGIN_FAILURE', () => {
        const fakeState = { isLoading: true };
        const fakeAction = getFakeAction('LOGIN_FAILURE');

        const expected = { isLoading: false }
        const actual = userReducer(fakeState, fakeAction);
        
        expect(actual).toEqual(expected);
    });

    it('Sets isLoading to false, isLoggedIn to true and resets the userData when passed LOGOUT_REQUEST', () => {
        const fakeState = { isLoading: false, isLoggedIn: true, userData: { token: 'test', username: 'test' } };
        const fakeAction = getFakeAction('LOGOUT_REQUEST');
        
        const expected = { isLoading: false, isLoggedIn: false, userData: { token: null, username: null }}
        const actual = userReducer(fakeState, fakeAction);

        expect(actual).toEqual(expected);
    });

});