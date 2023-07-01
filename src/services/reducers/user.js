import {
    SET_AUTH_CHECKED,
    SET_USER,
    UPDATE_USER,
    UPDATE_USER_REQUEST,
    UPDATE_USER_ERROR,
    REGISTER_REQUEST,
    REGISTER_USER,
    REGISTER_ERROR,
    LOGIN_REQUEST,
    LOGIN_USER,
    LOGIN_ERROR,
    LOGOUT_USER,
    LOGOUT_REQUEST,
    LOGOUT_ERROR,
} from '../actions/user-actions'

const initialState = {
    isAuth: false,
    user: null,
    updateUser: false,
    updateUserErr: false,
    regRequest: false,
    regFailed: false,
    loginRequest: false,
    loginFailed: false,
    logoutRequest: false,
    logoutFailed: false,
}

export const userReducer = (state = initialState, action) => {
console.log(state)
    switch (action.type) {
        case SET_AUTH_CHECKED: {
            return {
                ...state,
                isAuth: action.payload
            };
        }
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                },
                updateUser: false,
                isAuth: true
            };
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateUser: true,
                updateUserErr: false,
            };
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                updateUserErr: true,
                updateUser: false
            };
        }
        case REGISTER_REQUEST: {
            return {
                ...state,
                regRequest: true,
                regFailed: false,
            };
        }
        case REGISTER_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                },
                regRequest: false,
                isAuth: true,
            };
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                regRequest: false,
                regFailed: true,
            };
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginFailed: false,
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginRequest: false,
                loginFailed: true,
            };
        }
        case LOGIN_USER: {
            return {
                ...state,
                loginRequest: false,
                user: {
                    ...state.user,
                    name: action.user.name,
                    email: action.user.email,
                },
                isAuth: true,
            };
        }
        case LOGOUT_USER: {
            return {
                ...state,
                logoutRequest: false,
                logoutFailed: true,
                isAuth: false,
            };
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
                logoutFailed: false,
            };
        }
        case LOGOUT_ERROR: {
            return {
                ...state,
                logoutRequest: false,
                logoutFailed: true,
            };
        }
        default: {
            return state;
        }
    }
}