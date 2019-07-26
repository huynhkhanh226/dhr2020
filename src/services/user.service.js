import config from "config";
import { authHeader, headerGetUser, headerGetClient } from "../helpers/index";

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
function getClientID(username, password) {
  localStorage.removeItem("client");
  const requestOptions = {
    method: "GET",
    headers: headerGetClient()
  };
  return fetch(`${config.apiUrl}/auth/token`, requestOptions)
    .then(handleResponse)
    .then(response => {
      localStorage.setItem("client", JSON.stringify(response));
      return response;
    });
}

/*!
 * @author user <email>
 * date 07/25/2019
 * Api Login
 */
function login(username, password) {
  localStorage.removeItem("user");
  const requestOptions = {
    method: "PUT",
    headers: headerGetUser(),
    body: JSON.stringify({ username, password })
  };

  return fetch(`${config.apiUrl}/user/login`, requestOptions)
    .then(handleResponse)
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res));
      return res;
    });
}

/*!
 * @author user <email>
 * date 07/25/2019
 * Api logout
 */
function logout() {
  // remove user from local storage to log user out

  let user = JSON.parse(localStorage.getItem("user"));

  let token = user.token;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token })
  };
  //api/user/logout
  return fetch(`${config.apiUrl}//user/logout`, requestOptions)
    .then(handleResponse)
    .then(response => {
      localStorage.removeItem("user");
      return response;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }
      alert("Vui lòng đăng nhập.");
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
