import config from 'config';
import { authHeader } from '../helpers';

export const userService = {
    getClientID,
    login,
    logout
};


/*!
 * @author user <email>
 * date 07/25/2019
 * getClientID 
 */
function getClientID(secret) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret })
    };

    return fetch(`${config.apiUrl}//user/login`, requestOptions)
        .then(handleResponse)
        .then(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //localStorage.setItem('res', JSON.stringify(res));
            return res;
        });
}

/*!
 * @author user <email>
 * date 07/25/2019
 * Api Login 
 */
function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}//user/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

/*!
 * @author user <email>
 * date 07/25/2019
 * Api logout 
 */
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

