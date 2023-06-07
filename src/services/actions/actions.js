import { Orderdata, Serverdata } from '../../utils/datafromserver';

export const SERVERDATA_REQUEST = 'SERVERDATA_REQUEST';
export const SERVERDATA_SUCCESS = 'SERVERDATA_SUCCESS';
export const SERVERDATA_FAILED = 'SERVERDATA_FAILED';
export const ORDERDATA_REQUEST = 'ORDERDATA_REQUEST';
export const ORDERDATA_SUCCESS = 'ORDERDATA_SUCCESS';
export const ORDERDATA_FAILED = 'ORDERDATA_FAILED';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function getServerdata() {
    return function (dispatch) {
        dispatch({type: SERVERDATA_REQUEST})
        Serverdata()
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: SERVERDATA_SUCCESS,
                        data: res.data,
                    })
                } else {
                    dispatch({type: SERVERDATA_FAILED})
                }
            })
    }
}

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