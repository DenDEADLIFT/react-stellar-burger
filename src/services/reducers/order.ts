import {
    ORDERDATA_REQUEST,
    ORDERDATA_SUCCESS,
    ORDERDATA_FAILED,
    ADD_ORDER,
    DELETE_ORDER,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    TOrderActions,
} from '../actions/order-actions'
import { TGetOrders } from '../../components/types/order'
import { TOrder } from '../../components/types/order'
import { TIngredient } from '../../components/types/ingredient'

type TIngredientsState = {
    actual: TOrder | undefined | null,
    request: boolean,
    failed: boolean,
    orderItems: ReadonlyArray<TIngredient> | null,
    getOrders: ReadonlyArray<TGetOrders>,
}

const initialState: TIngredientsState = {
    actual: null,
    request: false,
    failed: false,
    orderItems: null,
    getOrders: [],
}

export const orderReducer = (state = initialState, action: TOrderActions): TIngredientsState => {

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
                request: false,
                failed: false,
                getOrders: [],
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