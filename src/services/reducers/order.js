import {
    ORDERDATA_REQUEST,
    ORDERDATA_SUCCESS,
    ORDERDATA_FAILED,
    ADD_ORDER,
    DELETE_ORDER,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
} from '../actions/order-actions'

const initialState = {
    actual: null,
    request: false,
    failed: false,
    orderItems: null,
    getOrders: [],
}

export const orderReducer = (state = initialState, action) => {
console.log(action)
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
                orderItems: null,
                actual: null,
            };
        }
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                request: true,
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                getOrders: action.getOrders,
            };
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                failed: true,
            };
        }
        default: {
            return state;
        }
    }
}