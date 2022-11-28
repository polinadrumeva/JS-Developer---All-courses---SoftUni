import * as api from './api.js';


export async function login(email, password) {
    const user = await api.post("users/login", {email, password});
    sessionStorage.setItem("user", JSON.stringify(user));

}

export async function register(email, password) {
    const user = await api.post("users/register", {email, password});
    sessionStorage.setItem("user", JSON.stringify(user));
}

export async function logout() {
    await api.get("users/logout");
    sessionStorage.removeItem("user");
}

