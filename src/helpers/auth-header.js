/*!
 * @author user <email>
 * date 07/26/2019
 * attach auth for the header
 */
const headerType = ["", "CLIENTID", "AUTH"];

export function authHeader() {
  debugger;
    let user = JSON.parse(localStorage.getItem("user"));
    return { 
        "Content-Type": "application/json",
        token: user.token };
}

export function headerGetUser() {
  let client = JSON.parse(localStorage.getItem("client"));
  return {
    "Content-Type": "application/json",
    "token": client.token
  };
}

export function headerGetClient() {
    return {
      "Content-Type": "application/json",
      "secret":"q1ax0wc6sv4eb8dn6rm8ft7gy3hu6jl2ko9lp"
    };
  }
