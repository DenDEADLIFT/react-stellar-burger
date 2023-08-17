import { TOrder } from '../../components/types/order'

export type TDataToOrders = {
    orders: ReadonlyArray<TOrder> | undefined,
    success: boolean,
    total?: number,
    totalToday?: number,
    data: any,
}

export type TOrdersAllState = {
    status: string,
    ordersAll?: ReadonlyArray<TOrder>,
    connectingError: string,
    data: TDataToOrders | [],
}

export type TOrdersState = {
    status: string,
    connectingError: string,
    data: TDataToOrders | [],
}