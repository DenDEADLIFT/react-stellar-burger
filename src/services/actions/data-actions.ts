import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch } from '../../components/types/dispatch';
import { serverdata } from '../../utils/datafromserver';
import { TIngredient } from '../../components/types/ingredient'

export const SERVERDATA_REQUEST: 'SERVERDATA_REQUEST' = 'SERVERDATA_REQUEST';
export const SERVERDATA_SUCCESS: 'SERVERDATA_SUCCESS' = 'SERVERDATA_SUCCESS';
export const SERVERDATA_FAILED: 'SERVERDATA_FAILED' = 'SERVERDATA_FAILED';



export interface IServerdataRequestAction {
    readonly type: typeof SERVERDATA_REQUEST;
}

export interface IServerdataSuccessAction {
    readonly type: typeof SERVERDATA_SUCCESS;
    readonly ingredients?: ReadonlyArray<TIngredient>;
    readonly data: ReadonlyArray<TIngredient>;
}

export interface IServerdataFiledAction {
    readonly type: typeof SERVERDATA_FAILED;
}

export type TServerdataActions =
    | IServerdataRequestAction
    | IServerdataSuccessAction
    | IServerdataFiledAction

export function getServerdata() {
    return function (dispatch: AppDispatch) {
        dispatch({ type: SERVERDATA_REQUEST })
        serverdata()
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: SERVERDATA_SUCCESS,
                        data: res.data,
                    })
                } else {
                    dispatch({ type: SERVERDATA_FAILED })
                }
            })
            .catch(err => {
                dispatch({
                    type: SERVERDATA_FAILED
                })
            })
    }
}