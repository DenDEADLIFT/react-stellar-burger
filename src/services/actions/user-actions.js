import { userData, registerUser, login, logout, updateUser } from '../../utils/datafromserver'

export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';
export const SET_USER = 'SET_USER';
export const SET_USER_FILED = 'SET_USER_FILED';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const isAuth = () => {
    return function (dispatch) {
        if (localStorage.getItem("accessToken")) {
            userData()
                .then((res) => {
                    dispatch({
                        type: SET_USER,
                        payload: res.user,
                    })
                })
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch({
                        type: SET_USER,
                        payload: null,
                    });
                })
                .finally(() => dispatch({
                    type: SET_AUTH_CHECKED,
                    payload: true,
                }));
        } else {
            dispatch({
                type: SET_AUTH_CHECKED,
                payload: true,
            });
        }
    };
};

export function onRegister({ email, password, name }) {
    return function (dispatch) {
        dispatch({
            type: REGISTER_REQUEST,
        })
        registerUser({ email, password, name })
            .then((res) => {
                if (res && res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch({
                        type: REGISTER_USER,
                        user: res,
                    });
                    dispatch({
                        type: SET_USER,
                        payload: res.user,
                    })
                } else {
                    dispatch({ type: REGISTER_ERROR })
                }
            })
            .catch((err) => {
                dispatch({
                    type: REGISTER_ERROR,
                })
            })
    }
}

export const onLogin = ({ email, password }) => {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        })
        login({ email, password })
            .then(res => {
                if (res && res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch({
                        type: LOGIN_USER,
                        user: res
                    })
                    dispatch({
                        type: SET_USER,
                        payload: res.user,
                    })
                    dispatch({
                        type: SET_AUTH_CHECKED,
                        payload: true,
                    });
                } else {
                    dispatch({ type: LOGIN_ERROR })
                }
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_ERROR
                })
            })
    }
};

export const onLogout = () => {
    return function (dispatch) {
        dispatch({
            type: LOGOUT_REQUEST,
        })
        logout()
            .then((res) => {
                if (res) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch({
                        type: LOGOUT_USER,
                    })
                    dispatch({
                        type: SET_USER,
                        payload: null,
                    })
                } else {
                    dispatch({ type: LOGOUT_ERROR })
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_ERROR,
                })
            })
    };
};

export const userUpdate = (userData) => {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        })
        updateUser(userData)
            .then((res) => {
                if (res) {
                    console.log(res)
                    dispatch({
                        type: UPDATE_USER,
                        user: res
                    })
                    dispatch({
                        type: SET_USER,
                        payload: res.user,
                    })
                } else {
                    dispatch({ type: UPDATE_USER_ERROR })
                }
            }).catch(err => {
                dispatch({
                    type: UPDATE_USER_ERROR
                })

            });
    }
};