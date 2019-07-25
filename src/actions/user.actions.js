import { userConstants } from './user.actions';
import { userService } from '../services/user.service';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout
};

/*!
 * @author user <email>
 * date 07/25/2019
 * login function 
 */
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

/*!
 * @author user <email>
 * date 07/25/2019
 * Logout user 
 */

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
