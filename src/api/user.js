import { clearUserData, setUserData } from "../utils.js";
import { post, get } from "./api.js";
export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    setUserData(userData);
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    setUserData(userData);
}

export async function logout(){
    await get('/users/logout');
    clearUserData();
}
