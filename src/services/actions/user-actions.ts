import { userData, registerUser, login, logout, updateUser } from '../../utils/datafromserver'
import { AppDispatch } from '../../components/types/dispatch'
import { TUser } from '../../components/types/user'

export const SET_AUTH_CHECKED: 'SET_AUTH_CHECKED' = 'SET_AUTH_CHECKED';
export const SET_USER: 'SET_USER' = 'SET_USER';
export const SET_USER_FILED: 'SET_USER_FILED' = 'SET_USER_FILED';
export const UPDATE_USER: 'UPDATE_USER' = 'UPDATE_USER';
export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_ERROR: 'UPDATE_USER_ERROR' = 'UPDATE_USER_ERROR';
export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_USER: 'REGISTER_USER' = 'REGISTER_USER';
export const REGISTER_ERROR: 'REGISTER_ERROR' = 'REGISTER_ERROR';
export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_USER: 'LOGIN_USER' = 'LOGIN_USER';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';
export const LOGOUT_USER: 'LOGOUT_USER' = 'LOGOUT_USER';
export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';

export interface ISetAuthCheckedAction {
    readonly type: typeof SET_AUTH_CHECKED;
    readonly payload: boolean;
}

export interface ISetUserAction {
    readonly type: typeof SET_USER;
    readonly payload: TUser | null;
}

export interface ISetUserFiledAction {
    readonly type: typeof SET_USER_FILED;
}

export interface IUpdateUserAction {
    readonly type: typeof UPDATE_USER;
    readonly user: TUser;
    readonly updateUser?: boolean;
    readonly isAuth?: boolean;
}

export interface IUpdateUserRequestAction {
    readonly type: typeof UPDATE_USER_REQUEST;
    readonly updateUser: boolean;
    readonly updateUserErr: boolean;
}

export interface IUpdateUserErrorAction {
    readonly type: typeof UPDATE_USER_ERROR;
    readonly updateUser?: boolean;
    readonly updateUserErr?: boolean;
}

export interface IRegisterRequestAction {
    readonly type: typeof REGISTER_REQUEST;
    readonly regRequest?: boolean;
    readonly regFailed?: boolean;
}

export interface IRegisterUserAction {
  readonly type: typeof REGISTER_USER;
  readonly user: { email: any; name: any; password?: any; };
  readonly regRequest?: boolean;
  readonly isAuth?: boolean;
}

export interface IRegisterErrorAction {
    readonly type: typeof REGISTER_ERROR;
    readonly regRequest?: boolean;
    readonly regFailed?: boolean;
}

export interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST;
    readonly loginRequest?: boolean;
    readonly loginFailed?: boolean;
}

export interface ILoginUserAction {
    readonly type: typeof LOGIN_USER;
    readonly loginRequest?: boolean;
    readonly user: TUser;
    readonly isAuth?: boolean;
}

export interface ILoginErrorAction {
    readonly type: typeof LOGIN_ERROR;
    readonly loginRequest?: boolean;
    readonly loginFailed?: boolean;
}

export interface ILogoutUserAction {
    readonly type: typeof LOGOUT_USER;
    readonly logoutRequest?: boolean;
    readonly logoutFailed?: boolean;
    readonly isAuth?: boolean;
    
}

export interface ILogoutRequestAction {
    readonly type: typeof LOGOUT_REQUEST;
    readonly logoutRequest?: boolean;
    readonly logoutFailed?: boolean;
}

export interface ILogoutErrorAction {
    readonly type: typeof LOGOUT_ERROR;
    readonly logoutRequest?: boolean;
    readonly logoutFailed?: boolean;
}

export type TUserActions =
    | ISetAuthCheckedAction
    | ISetUserAction
    | ISetUserFiledAction
    | IUpdateUserAction
    | IUpdateUserRequestAction
    | IUpdateUserErrorAction
    | IRegisterRequestAction
    | IRegisterUserAction
    | IRegisterErrorAction
    | ILoginRequestAction
    | ILoginUserAction
    | ILoginErrorAction
    | ILogoutUserAction
    | ILogoutRequestAction
    | ILogoutErrorAction;

export const isAuth = () => {
    return function (dispatch: AppDispatch) {
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

export function onRegister({ email, password, name }: TUser) {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: REGISTER_REQUEST,
        })
        registerUser({ email, password, name })
            .then((res: any) => {
                if (res) {
                    console.log(res)
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

export const onLogin = ({ email, password }: TUser) => {
    return function (dispatch: AppDispatch) {
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
    return function (dispatch: AppDispatch) {
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

export const userUpdate = (userData: TUser) => {
    return function (dispatch: AppDispatch) {
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