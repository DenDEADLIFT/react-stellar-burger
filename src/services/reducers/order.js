import {
    ORDERDATA_REQUEST,
    ORDERDATA_SUCCESS,
    ORDERDATA_FAILED,
    ADD_ORDER,
    DELETE_ORDER,
} from '../actions/order-actions'

const initialState = {
    actual: null,
    request: false,
    failed: false,
    orderItems: null,
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
                request: false,
                orderItems: null,
                actual: null,
            };
        }
        case ADD_ORDER: {
            return {
                ...state,
                orderItems: action.orderItems,
            };
        }
        case DELETE_ORDER: {
            return {
                ...state,
                orderItems: null,
            };
        }
        default: {
            return state;
        }
    }
}