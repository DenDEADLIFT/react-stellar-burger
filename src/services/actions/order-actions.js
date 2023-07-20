import { orderdata, getOrder } from '../../utils/datafromserver';

export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'ADD_ORDER';
export const ORDERDATA_REQUEST = 'ORDERDATA_REQUEST';
export const ORDERDATA_SUCCESS = 'ORDERDATA_SUCCESS';
export const ORDERDATA_FAILED = 'ORDERDATA_FAILED';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export function getOrderdata(arr) {
    return function (dispatch) {
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

export function getOrders(orderNum) {
    return function (dispatch) {
        dispatch({ type: GET_ORDER_REQUEST })
        getOrder(orderNum)
            .then(res => {
                if (res && res.success) {
                    //console.log(orderNum)
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