import config from "config";

const url = `${config.apiUrl}`;


export function urlAPI(subUrl = '') {
    return url + subUrl;
}

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (! response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                location.reload(true);
                //alert("auto logout if 401 response returned from api");
            }
            //alert("Vui lòng đăng nhập.");
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
