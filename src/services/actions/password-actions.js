import { forgotPassword, resetPasswordRequest } from '../../utils/datafromserver'

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_CONFIRMED = 'RESET_PASSWORD_CONFIRMED';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_CONFIRMED = 'FORGOT_PASSWORD_CONFIRMED';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
 
export const passwordForgot = (email) => {
    return function (dispatch) {
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

export const passwordReset = ({ password, token }) => {
    return function (dispatch) {
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