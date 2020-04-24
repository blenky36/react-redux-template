import { getIsUserLoggedIn, getUserData, getUsersLoading } from '../userSelectors';

describe('The userSelectors', () => {
    describe('The getIsUserLoggedIn selector', () => {
        it('Returns whether the user is logged in from the state', () => {
            const fakeState = { userReducer: { isLoggedIn: false }};

            const expected = false;
            const actual = getIsUserLoggedIn(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getUsersLoading selector', () => {
        it('Returns whether the users reducer is loading from the state', () => {
            const fakeState = { userReducer: { isLoading: true }};

            const expected = true;
            const actual = getUsersLoading(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getUserData selector', () => {
        it('Returns the userData from the state', () => {
            const fakeState = { userReducer: { userData: { token: 'test', username: 'test' }}};

            const expected = { token: 'test', username: 'test' };
            const actual = getUserData(fakeState);

            expect(actual).toEqual(expected);
        });
    });
});