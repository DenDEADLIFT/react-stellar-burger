import { Serverdata } from '../../utils/datafromserver';

export const SERVERDATA_REQUEST = 'SERVERDATA_REQUEST';
export const SERVERDATA_SUCCESS = 'SERVERDATA_SUCCESS';
export const SERVERDATA_FAILED = 'SERVERDATA_FAILED';

export function getServerdata() {
    return function (dispatch) {
        dispatch({ type: SERVERDATA_REQUEST })
        Serverdata()
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