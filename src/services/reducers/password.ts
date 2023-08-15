import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_CONFIRMED,
    RESET_PASSWORD_ERROR,
    FORGOT_PASSWORD_CONFIRMED,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_REQUEST,
    TPasswordActions,
} from '../actions/password-actions'

type TInitialState = {
    passwordForgotRequest: boolean,
    passwordForgot: boolean,
    passwordForgotError: string | null | undefined,
    resetPasswordRequest: boolean,
    resetPasswordConfirmed: boolean,
    resetPasswordError: string | null | undefined,
}

const initialState: TInitialState = {
    passwordForgotRequest: false,
    passwordForgot: false,
    passwordForgotError: null,
    resetPasswordRequest: false,
    resetPasswordConfirmed: false,
    resetPasswordError: null,
}

export const passwordReducer = (state = initialState, action: TPasswordActions): TInitialState => {

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
                resetPasswordConfirmed: true,
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