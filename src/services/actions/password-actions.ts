import { forgotPassword, resetPasswordRequest } from '../../utils/datafromserver'
import { AppDispatch } from '../../components/types/hooks'

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_CONFIRMED: 'RESET_PASSWORD_CONFIRMED' = 'RESET_PASSWORD_CONFIRMED';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';
export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_CONFIRMED: 'FORGOT_PASSWORD_CONFIRMED' = 'FORGOT_PASSWORD_CONFIRMED';
export const FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';

export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordConfirmedAction {
    readonly type: typeof RESET_PASSWORD_CONFIRMED;
    readonly resetPasswordConfirmed: boolean;
}

export interface IResetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
    readonly err?: string | null;
}

export interface IForgotPasswordRequestAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordConfirmedAction {
    readonly type: typeof FORGOT_PASSWORD_CONFIRMED;
    readonly payload: boolean;
}

export interface IForgotPasswordErrorAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
    readonly err?: string;
}

export type TPasswordActions =
    | IResetPasswordRequestAction
    | IResetPasswordConfirmedAction
    | IResetPasswordErrorAction
    | IForgotPasswordRequestAction
    | IForgotPasswordConfirmedAction
    | IForgotPasswordErrorAction

    interface PasswordResetParams {
        password: string;
        token: string;
    }
    

export const passwordForgot = (email: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
        })
        forgotPassword(email)
            .then((res) => {
                if (res) {
                    dispatch({
                        type: FORGOT_PASSWORD_CONFIRMED,
                        payload: res.ok,
                    })
                } else {
                    dispatch({ type: FORGOT_PASSWORD_ERROR })
                }
            })
            .catch((err) => {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR,
                    resetRequestError: err,
                })
            })
            .finally(() => {
                dispatch({
                    type: FORGOT_PASSWORD_REQUEST,
                    forgotPasswordRequest: false,
                })
            })
    };
};

export const passwordReset = ({ password, token }: PasswordResetParams) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST,
            resetPasswordRequest: true,
        })
        resetPasswordRequest({ password, token })
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: RESET_PASSWORD_CONFIRMED,
                        resetPasswordConfirmed: res.success,
                    })
                } else {
                    dispatch({ type: RESET_PASSWORD_ERROR })
                }
            })
            .catch((err) => {
                dispatch({
                    type: RESET_PASSWORD_ERROR,
                    resetPasswordError: err,
                })
            })
    };
};