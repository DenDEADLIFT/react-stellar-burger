import { orderdata, getOrder } from '../../utils/datafromserver';
import { AppDispatch } from '../../components/types/hooks';
import { TActualOrder } from '../../components/types/actual-order'
import { TOrder } from '../../components/types/order'
import { TIngredient } from '../../components/types/ingredient'
import { TGetOrders } from '../../components/types/order'

export const ADD_ORDER: 'ADD_ORDER' = 'ADD_ORDER';
export const DELETE_ORDER: 'DELETE_ORDER' = 'DELETE_ORDER';
export const ORDERDATA_REQUEST: 'ORDERDATA_REQUEST' = 'ORDERDATA_REQUEST';
export const ORDERDATA_SUCCESS: 'ORDERDATA_SUCCESS' = 'ORDERDATA_SUCCESS';
export const ORDERDATA_FAILED: 'ORDERDATA_FAILED' = 'ORDERDATA_FAILED';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';

export interface IAddOrderAction {
    readonly type: typeof ADD_ORDER;
    readonly orderItems: ReadonlyArray<TIngredient> | null;
    readonly actual: TActualOrder | null;
}

export interface IDeleteOrderAction {
    readonly type: typeof DELETE_ORDER;
}

export interface IOrderdataRequestAction {
    readonly type: typeof ORDERDATA_REQUEST;
}

export interface IOrderdataSuccessAction {
    readonly type: typeof ORDERDATA_SUCCESS;
    readonly actual?: TActualOrder | null;
    readonly order?: TOrder;
}

export interface IOrderdataFiledAction {
    readonly type: typeof ORDERDATA_FAILED;
}

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly getOrders: TGetOrders[];
}

export interface IGetOrderFiledAction {
    readonly type: typeof GET_ORDER_FAILED;
}

export type TOrderActions =
    | IAddOrderAction
    | IDeleteOrderAction
    | IOrderdataRequestAction
    | IOrderdataSuccessAction
    | IOrderdataFiledAction
    | IGetOrderRequestAction
    | IGetOrderSuccessAction
    | IGetOrderFiledAction

export function getOrderdata(arr: string[]) {
    return function (dispatch: AppDispatch) {
        dispatch({ type: ORDERDATA_REQUEST })
        orderdata(arr)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: ORDERDATA_SUCCESS,
                        order: res,
                    })
                } else {
                    dispatch({ type: ORDERDATA_FAILED })
                }
            })
            .catch(err => {
                dispatch({
                    type: ORDERDATA_FAILED
                })
            })

    }
}

export function getOrders(orderNum: string | undefined) {
    return function (dispatch: AppDispatch) {
        dispatch({ type: GET_ORDER_REQUEST })
        getOrder(orderNum)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        getOrders: res,
                    })
                } else {
                    dispatch({ type: GET_ORDER_FAILED })
                }
            })
            .catch(err => {
                dispatch({
                    type: GET_ORDER_FAILED
                })
            })

    }
}