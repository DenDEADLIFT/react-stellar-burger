import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_CONFIRMED,
    RESET_PASSWORD_ERROR,
    FORGOT_PASSWORD_CONFIRMED,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_REQUEST,
} from '../actions/password-actions'

const initialState = {
    passwordForgotRequest: false,
    passwordForgot: false,
    passwordForgotError: null,
    resetPasswordRequest: false,
    resetPasswordConfirmed: false,
    resetPasswordError: null,
}

export const passwordReducer = (state = initialState, action) => {

    switch (action.type) {
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
            };
        }
        case RESET_PASSWORD_CONFIRMED: {
            return {
                ...state,
                resetPasswordConfirmed: action,
            };
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                resetPasswordError: action.err,
            };
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                passwordForgotRequest: true,
            };
        }
        case FORGOT_PASSWORD_CONFIRMED: {
            return {
                ...state,
                passwordForgot: action.payload,
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                passwordForgotError: action.err,
            };
        }
        default: {
            return state;
        }
    }
}