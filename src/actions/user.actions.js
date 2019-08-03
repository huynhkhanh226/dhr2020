import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { history } from '../helpers/history';
import {alertActions} from './alert.actions';


export const userActions = {
    login,
    logout,
    auth
};

function login(username, password, redirect) {
    return dispatch => {
        dispatch(request({ username: username, token: "" }));
        userService.getClientID()
            .then(
                data => { 
                    
                    if (data.code === 200){
                        dispatch(success(data));
                        dispatch(auth(username,password, redirect));
                    }else{
                        dispatch(failure(data.message));
                        dispatch(alertActions.error(data.message));
                    }

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(client) { return { type: userConstants.CLIENTID_REQUEST, client } }
    function success(client) { return { type: userConstants.CLIENTID_SUCCESS, client } }
    function failure(error) { return { type: userConstants.CLIENTID_FAILURE, error } }
}



/*!
 * @author user <email>
 * date 07/25/2019
 * login function 
 */

function auth(username, password, redirect) {
    return dispatch => {
        dispatch(request({ username : username }));
        userService.login(username, password)
            .then(
                data => { 
                    //debugger;
                    dispatch(success(data));
                    if (data.code === 200){
                        history.push(redirect || "/home");
                    }else{
                        dispatch(failure(data.message));
                        dispatch(alertActions.error(data.message));
                    }
                   
                },
                error => {
                    //debugger;
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
