type TOwner = {
    createdAt: string,
    email: string,
    name: string,
    updatedAt: string,
}

export type TOrder = {
    createdAt: string,
    ingredients: string[],
    name: string,
    number: number,
    owner: TOwner,
    price: number,
    status: string,
    updatedAt: string,
    _id: string,
    order?: any,
}

export type TGetOrders = {
    orders: TOrder[],
    success: boolean,
    ingredients?: any,
    number?: number,
    name?: string,
    status?: string,
    updatedAt?: any,
    length?: any,
}