import { TDataToOrders } from '../../components/types/orders-all'

export const ORDERS_ALL_CONNECT: 'ORDERS_ALL_CONNECT' = 'ORDERS_ALL_CONNECT';
export const ORDERS_ALL_DISCONNECT: 'ORDERS_ALL_DISCONNECT' = 'ORDERS_ALL_DISCONNECT';
export const ORDERS_ALL_WS_CONNECTING: 'ORDERS_ALL_WS_CONNECTING' = 'ORDERS_ALL_WS_CONNECTING';
export const ORDERS_ALL_WS_OPEN: 'ORDERS_ALL_WS_OPEN' = 'ORDERS_ALL_WS_OPEN';
export const ORDERS_ALL_WS_CLOSE: 'ORDERS_ALL_WS_CLOSE' = 'ORDERS_ALL_WS_CLOSE';
export const ORDERS_ALL_WS_MESSAGE: 'ORDERS_ALL_WS_MESSAGE' = 'ORDERS_ALL_WS_MESSAGE';
export const ORDERS_ALL_WS_ERROR: 'ORDERS_ALL_WS_ERROR' = 'ORDERS_ALL_WS_ERROR';

export const connect = (url: string) => ({
    type: ORDERS_ALL_CONNECT,
    payload: url
});

export const disconnect = () => ({
    type: ORDERS_ALL_DISCONNECT,
});

export interface IOrdersAllWsConnectingAction {
    readonly type: typeof ORDERS_ALL_WS_CONNECTING;
}

export interface IOrdersAllWsOpenAction {
    readonly type: typeof ORDERS_ALL_WS_OPEN;
}

export interface IOrdersAllWsCloseAction {
    readonly type: typeof ORDERS_ALL_WS_CLOSE;
}

export interface IOrdersAllWsMessageAction {
    readonly type: typeof ORDERS_ALL_WS_MESSAGE;
    readonly payload: TDataToOrders;
}

export interface IOrdersAllWsErrorAction {
    readonly type: typeof ORDERS_ALL_WS_ERROR;
    readonly payload: string;
}

export type TOrdersAllActions =
    | IOrdersAllWsConnectingAction
    | IOrdersAllWsOpenAction
    | IOrdersAllWsCloseAction
    | IOrdersAllWsMessageAction
    | IOrdersAllWsErrorAction