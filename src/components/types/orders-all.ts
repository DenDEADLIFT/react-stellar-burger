import { TOrder } from '../../components/types/order'

export type TDataToOrders = {
    orders: ReadonlyArray<TOrder>,
    success: boolean,
    total: number,
    totalToday: number,
}

export type TOrdersAllState = {
    status: string,
    ordersAll: ReadonlyArray<TOrder>,
    connectingError: string,
    data: TDataToOrders | [],
}

export type TOrdersState = {
    status: string,
    connectingError: string,
    data: TDataToOrders | [],
}