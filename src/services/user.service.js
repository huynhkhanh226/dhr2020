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

  let data = {
    "code": 200,
    "message": "",
    "data": {
      "id": 4,
      "createdAt": "2019-07-26T03:13:39.028Z",
      "updatedAt": "2019-07-26T03:13:39.028Z",
      "expiredAt": "2019-08-05T03:13:39.018Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiY3JlYXRlZEF0IjoiMjAxOS0wNy0yNlQwMzoxMzozOS4wMjhaIiwidXBkYXRlZEF0IjoiMjAxOS0wNy0yNlQwMzoxMzozOS4wMjhaIiwiZXhwaXJlZEF0IjoiMjAxOS0wOC0wNVQwMzoxMzozOS4wMThaIiwiaWF0IjoxNTY0MTEwODE5LCJleHAiOjE1NjY3MDI4MTl9.PnCk2gu-qK7ISOvRIWUH9Miy1e9rX0vxOLonPcivk64"
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

  let data = {
    "code": 200,
    "message": "",
    "data": {
      "user": {
        "UserID": "NV01",
        "UserName": "Lê Th?c Na",
        "UserDepartment": "Phân tích thi?t k? 4",
        "UserVerify": "ige",
        "DateEntered": "2019-03-12T09:00:09.707Z",
        "DateLastModified": "2019-04-02T15:42:59.343Z",
        "UserGroupID": "",
        "CreateUserID": "LEMONADMIN",
        "LastModifyUserID": "LEMONADMIN",
        "Remote": 0,
        "IPAddress": "",
        "MachineID": "",
        "TimeFrom": "",
        "TimeTo": "",
        "ExpiryDays": 0,
        "LastPChange": "2019-03-12T09:01:00.097Z",
        "Violations": 0,
        "ViolationDate": null,
        "ULanguage": "",
        "Disabled": 0,
        "TelNumber": "0123",
        "TelExt": "",
        "FaxNo": "",
        "Email": "LETHUCNA@YOPMAIL.COM",
        "MobileNo": "",
        "Remark": "",
        "UseDynamicPassword": 0,
        "UserNameU": "Lê Thục Na",
        "UserDepartmentU": "Phân tích thiết kế 4",
        "RemarkU": "",
        "IsDesktop": 0,
        "D91DepartmentID": "",
        "HREmployeeID": "LN00241",
        "AppServer": "",
        "ReportServer": "",
        "DefaultPage": "",
        "IsPermissionSvrUpg": 0,
        "IsPermissionManCCUser": 0,
        "IsSysManUser": 0,
        "UserDutyNameU": "Chuyên viên chăm sóc khách hàng",
        "UserDutyName": "Chuyên viên cham sóc khách hàng",
        "UserPicture": null,
        "id": 1518,
        "LogonTokenEoffice": "",
        "BirthDate": "2000-01-01T00:00:00.000Z",
        "UserAddress": "341 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Tp HCM",
        "Gender": 0,
        "DivisionID": ""
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY3JlYXRlZEF0IjoiMjAxOS0wNy0yNVQwOToxMDoxMC40MzZaIiwidXBkYXRlZEF0IjoiMjAxOS0wNy0yNlQwMjozMjo0OC45MTJaIiwiZXhwaXJlZEF0IjoiMjAxOS0wOC0wNVQwMjozMjo0OC45MTJaIiwidXNlciI6eyJpZCI6MTUxOCwiVXNlckFjY291bnQiOiJOVjAxIiwiVXNlck5hbWUiOiJMw6ogVGjhu6VjIE5hIn0sImlhdCI6MTU2NDEwODM2OCwiZXhwIjoxNTY2NzAwMzY4fQ.LvJw0P7QzWjo6E0fIvF8-Fl2PboX59quOVJ8T75qZMQ"
    }
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
