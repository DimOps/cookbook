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