import { WebsocketStatus } from "../../utils/live-table";
import {
    ORDERS_WS_CLOSE,
    ORDERS_WS_CONNECTING,
    ORDERS_WS_ERROR,
    ORDERS_WS_MESSAGE,
    ORDERS_WS_OPEN,
    TOrdersActions,
} from "../actions/orders";
import { TOrdersState } from '../../components/types/orders-all'

const initialState: TOrdersState = {
    status: WebsocketStatus.OFFLINE,
    data: [],
    connectingError: '',
};

export const ordersReducer = (state = initialState, action: TOrdersActions): TOrdersState => {

    switch (action.type) {
        case ORDERS_WS_CONNECTING:
            return {
                ...state,
                status: WebsocketStatus.CONNECTING
            };
        case ORDERS_WS_OPEN:
            return {
                ...state,
                status: WebsocketStatus.ONLINE,
                connectingError: ''
            };
        case ORDERS_WS_CLOSE:
            return {
                ...state,
                status: WebsocketStatus.OFFLINE,
            };
        case ORDERS_WS_ERROR:
            return {
                ...state,
                connectingError: action.payload
            };
        case ORDERS_WS_MESSAGE:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}