import { TDataToOrders } from '../../components/types/orders-all'

export const ORDERS_CONNECT: 'ORDERS_CONNECT' = 'ORDERS_CONNECT';
export const ORDERS_DISCONNECT: 'ORDERS_DISCONNECT' = 'ORDERS_DISCONNECT';
export const ORDERS_WS_CONNECTING: 'ORDERS_WS_CONNECTING' = 'ORDERS_WS_CONNECTING';
export const ORDERS_WS_OPEN: 'ORDERS_WS_OPEN' = 'ORDERS_WS_OPEN';
export const ORDERS_WS_CLOSE: 'ORDERS_WS_CLOSE' = 'ORDERS_WS_CLOSE';
export const ORDERS_WS_MESSAGE: 'ORDERS_WS_MESSAGE' = 'ORDERS_WS_MESSAGE';
export const ORDERS_WS_ERROR: 'ORDERS_WS_ERROR' = 'ORDERS_WS_ERROR';

export const connect = (url: string) => ({
    type: ORDERS_CONNECT,
    payload: url
});

export const disconnect = () => ({
    type: ORDERS_DISCONNECT,
});

export interface IOrdersWsConnectingAction {
    readonly type: typeof ORDERS_WS_CONNECTING;
}

export interface IOrdersWsOpenAction {
    readonly type: typeof ORDERS_WS_OPEN;
}

export interface IOrdersWsCloseAction {
    readonly type: typeof ORDERS_WS_CLOSE;
}

export interface IOrdersWsMessageAction {
    readonly type: typeof ORDERS_WS_MESSAGE;
    readonly payload: TDataToOrders;
}

export interface IOrdersWsErrorAction {
    readonly type: typeof ORDERS_WS_ERROR;
    readonly payload: string;
}

export type TOrdersActions =
    | IOrdersWsConnectingAction
    | IOrdersWsOpenAction
    | IOrdersWsCloseAction
    | IOrdersWsMessageAction
    | IOrdersWsErrorAction