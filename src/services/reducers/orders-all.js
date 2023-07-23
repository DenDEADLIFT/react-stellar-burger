import {WebsocketStatus} from "../../utils/live-table";
import {
    ORDERS_ALL_WS_CLOSE,
    ORDERS_ALL_WS_CONNECTING,
    ORDERS_ALL_WS_ERROR,
    ORDERS_ALL_WS_MESSAGE,
    ORDERS_ALL_WS_OPEN
} from "../actions/orders-all";

const initialState = {
    status: WebsocketStatus.OFFLINE,
    ordersAll: [],
    connectingError: '',
    data: [],
};

export const ordersAllReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type)
    {
        case ORDERS_ALL_WS_CONNECTING:
            return {
                ...state,
                status: WebsocketStatus.CONNECTING
            };
        case ORDERS_ALL_WS_OPEN:
            return {
                ...state,
                status: WebsocketStatus.ONLINE,
                connectingError: ''
            };
        case ORDERS_ALL_WS_CLOSE:
            return {
                ...state,
                status: WebsocketStatus.OFFLINE,
            };
        case ORDERS_ALL_WS_ERROR:
            return {
                ...state,
                connectingError: action.payload
            };
        case ORDERS_ALL_WS_MESSAGE:
            return {
                ...state,
                ordersAll: action.payload.orders,
                data: action.payload,
            }
        default:
            return state;
    }
}