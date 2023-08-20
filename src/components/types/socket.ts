import { Middleware, Dispatch, AnyAction } from "redux"

export type TWsActions = {
    wsConnect?: string,
    wsSendMessage?: string,
    onOpen?: string,
    onClose?: string,
    onError?: string,
    onMessage?: string,
    wsConnecting?: string,
    wsDisconnect?: string,
}

export type CustomMiddleware = Middleware<{}, any, Dispatch<AnyAction>>;