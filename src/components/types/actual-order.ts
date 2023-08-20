import { TOrder } from '../types/order'

export type TActualOrder = {
    name: string,
    order?: TOrder,
    success?: boolean,
}