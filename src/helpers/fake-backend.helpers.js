import {authConstants } from '../constants/api.constants'


export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                //get ClientID
                if (url.endsWith(authConstants.URL_CLIENTID) && opts.method === 'GET') {
                    // get parameters from post request
                    let responseJson = {
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
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    return;
                }

                //login
                if (url.endsWith(authConstants.URL_LOGIN) && opts.method === 'PUT') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);
                    if (params.username === 'NV01') {
                        let responseJson = {
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
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }
                    return;
                }

                //logout
                if (url.endsWith(authConstants.URL_LOGOUT) && opts.method === 'PUT') {
                    // get parameters from post request
                    let responseJson = {
                        "code": 200,
                        "message": "",
                        "data": {},
                          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY3JlYXRlZEF0IjoiMjAxOS0wNy0yNVQwOToxMDoxMC40MzZaIiwidXBkYXRlZEF0IjoiMjAxOS0wNy0yNlQwMjozMjo0OC45MTJaIiwiZXhwaXJlZEF0IjoiMjAxOS0wOC0wNVQwMjozMjo0OC45MTJaIiwidXNlciI6eyJpZCI6MTUxOCwiVXNlckFjY291bnQiOiJOVjAxIiwiVXNlck5hbWUiOiJMw6ogVGjhu6VjIE5hIn0sImlhdCI6MTU2NDEwODM2OCwiZXhwIjoxNTY2NzAwMzY4fQ.LvJw0P7QzWjo6E0fIvF8-Fl2PboX59quOVJ8T75qZMQ"
                      };
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    return;
                }


                // authenticate
                /* if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                } */

                /* // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                } */



                
                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 200);
        });
    }
}