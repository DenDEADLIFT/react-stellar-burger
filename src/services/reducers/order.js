import {
    ORDERDATA_REQUEST,
    ORDERDATA_SUCCESS,
    ORDERDATA_FAILED,
    //OPEN_MODAL,
    //CLOSE_MODAL,
} from '../actions/actions'

const initialState = {
    actual: null,
    request: false,
    failed: false,
    modal: false,
}

export const orderReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ORDERDATA_REQUEST: {
            return {
                ...state,
                request: true
            };
        }
        case ORDERDATA_SUCCESS: {
            return {
                ...state,
                failed: false,
                request: false,
                actual: action.order,
            };
        }
        case ORDERDATA_FAILED: {
            return {
                ...state,
                failed: true,
                request: false
            };
        }
        default: {
            return state;
        }
    }
}