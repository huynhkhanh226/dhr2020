import { userConstants } from '../constants/user.constants';



let user = JSON.parse(localStorage.getItem('user'));

const initialState = user !== null ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.CLIENTID_REQUEST:
      return {
        username: action.client.username,
        clientID: action.client.token
      };
    case userConstants.CLIENTID_SUCCESS:
      return {
        username: action.client.username,
        clientID: action.client.token
      };
    case userConstants.CLIENTID_FAILURE:
      return {};
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}