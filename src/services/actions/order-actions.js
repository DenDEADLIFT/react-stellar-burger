import { Orderdata } from '../../utils/datafromserver';

export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'ADD_ORDER';
export const ORDERDATA_REQUEST = 'ORDERDATA_REQUEST';
export const ORDERDATA_SUCCESS = 'ORDERDATA_SUCCESS';
export const ORDERDATA_FAILED = 'ORDERDATA_FAILED';

export function getOrderdata(arr) {
    return function (dispatch) {
        dispatch({type: ORDERDATA_REQUEST})
        Orderdata(arr)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: ORDERDATA_SUCCESS,
                        order: res,
                    })
                } else {
                    dispatch({type: ORDERDATA_FAILED})
                }
            })
    }
}