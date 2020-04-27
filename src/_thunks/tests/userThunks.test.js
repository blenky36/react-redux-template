import sinon from 'sinon';
import { loginUser } from '../userThunks';

describe('The userThunks', () => {
    describe('The loginUser thunk', () => {
        it('Logs the user in by dispatching the correct actions in the success scenario', () => {
            const fakeDispatch = sinon.spy();
            const fakeUserData = { username: 'test', token: 'test' };

            const expectedFirstAction = {
                type: 'LOGIN_ATTEMPT'
            };

            const expectedSecondAction = {
                type: 'LOGIN_SUCCESS',
                payload: fakeUserData
            };

            loginUser('test', 'password')(fakeDispatch);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
        });

    });
});