import { TUser } from '../components/types/user'

export const BASE_URL = `https://norma.nomoreparties.space/api`;

export const checkResponse = (resolve: any) => {
    if (resolve.ok) {
        return resolve.json()
    } else {
        return Promise.reject(`Ошибка ${resolve.status}`);
    }
}

export const serverdata = () => {
    return fetch(`${BASE_URL}/ingredients`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(checkResponse)
}

const headers = new Headers();
headers.append("Content-Type", "application/json");

const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
  headers.append("Authorization", accessToken);
}

export const orderdata = (items: string[]) => {
    
    return fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            'ingredients': items,
        })
    })
        .then(checkResponse)
}

export const getOrder = async (orderNum: string | undefined) => {
    return fetch(`${BASE_URL}/orders/${orderNum}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(checkResponse)
}

export const registerUser = ({ email, password, name }: TUser) => {
    return fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, password, name
        })
    })
}

export const refreshToken = () => {
    return fetch(`${BASE_URL}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse);
}

export const onRefreshToken = async (url: string, options: any) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (error: any) {
        if (error.message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(error);
        }
    }
}

export const userData = () => {
    return onRefreshToken(`${BASE_URL}/auth/user`, {
        headers: {
            authorization: localStorage.getItem('accessToken'),
        },
    })
}

export const login = ({ email, password }: TUser) => {
    return fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            email, password,
        }),
    })
        .then(checkResponse)
}

export const logout = () => {
    console.log(123)
    return fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse)
}

export const forgotPassword = (email: string) => {
    return fetch(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
        }),
    })
        .then(checkResponse)
}

export const resetPasswordRequest = ({ password, token }: {password: string, token: string}) => {
    return fetch(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password, token,
        }),
    })
        .then(checkResponse)
}

export const updateUser = async ({ email, name, password }: TUser) => {
    return fetch(`${BASE_URL}/auth/user`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
            email: email,
            name: name,
            password: password
        }),
    })
        .then(checkResponse)
}