import {configureStore} from "@reduxjs/toolkit";
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './burgerConstructor';
import { orderReducer } from './order';
import { userReducer } from './user';
import { passwordReducer } from './password';
import { ordersAllReducer } from './orders-all';
import { ordersReducer } from './orders';
import {socketMiddleware} from "../middleware/socket-middleware";
import {
    ORDERS_ALL_CONNECT,
    ORDERS_ALL_DISCONNECT, ORDERS_ALL_WS_CLOSE,
    ORDERS_ALL_WS_CONNECTING, ORDERS_ALL_WS_ERROR, ORDERS_ALL_WS_MESSAGE,
    ORDERS_ALL_WS_OPEN
} from "../actions/orders-all";
import {
    ORDERS_CONNECT,
    ORDERS_DISCONNECT, ORDERS_WS_CLOSE,
    ORDERS_WS_CONNECTING, ORDERS_WS_ERROR, ORDERS_WS_MESSAGE,
    ORDERS_WS_OPEN
} from "../actions/orders";

const OrdersAllMiddleware = socketMiddleware({
    wsConnect: ORDERS_ALL_CONNECT,
    wsDisconnect: ORDERS_ALL_DISCONNECT,
    wsConnecting: ORDERS_ALL_WS_CONNECTING,
    onOpen: ORDERS_ALL_WS_OPEN,
    onClose: ORDERS_ALL_WS_CLOSE,
    onError: ORDERS_ALL_WS_ERROR,
    onMessage: ORDERS_ALL_WS_MESSAGE
});

const OrdersMiddleware = socketMiddleware({
    wsConnect: ORDERS_CONNECT,
    wsDisconnect: ORDERS_DISCONNECT,
    wsConnecting: ORDERS_WS_CONNECTING,
    onOpen: ORDERS_WS_OPEN,
    onClose: ORDERS_WS_CLOSE,
    onError: ORDERS_WS_ERROR,
    onMessage: ORDERS_WS_MESSAGE
});

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        burgerConstructor: constructorReducer,
        order: orderReducer,
        user: userReducer,
        password: passwordReducer,
        ordersAll: ordersAllReducer,
        orders: ordersReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(OrdersAllMiddleware, OrdersMiddleware)
    },
});