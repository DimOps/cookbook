const storage = sessionStorage;

export function getUserData() {
    return JSON.parse(storage.getItem('userData'));
}

export function setUserData(data) {
    storage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    storage.removeItem('userData');
}

export function createSubmitHandler (ctx, handler) {
    return function(e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

        handler(ctx, formData, e)
    };
}

export function parseQuerystring (query='') {
    return Object.fromEntries(query.split('&').map(kvp => kvp.split('=')))
}