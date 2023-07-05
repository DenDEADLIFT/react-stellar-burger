export const BASE_URL = `https://norma.nomoreparties.space/api`;
export const WSS_URL = `wss://norma.nomoreparties.space/`;

export const checkResponse = (resolve) => {
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

export const orderdata = (items) => {
    return fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'ingredients': items,
        })
    })
        .then(checkResponse)
}

export const registerUser = ({ email, password, name }) => {
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

export const onRefreshToken = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (error) {
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

export const login = ({ email, password }) => {
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
    return fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem('accessToken')
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse)
}

export const forgotPassword = (email) => {
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

export const resetPasswordRequest = ({ password, token }) => {
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

export const updateUser = async ({ email, name, password }) => {
    console.log(name)
    return fetch(`${BASE_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password
        }),
    })
        .then(checkResponse)
}