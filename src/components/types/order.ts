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
    owner?: TOwner,
    price: number,
    status: string,
    updatedAt: string,
    _id: string,
    __v?: number,
    order: {
        number?: string,
    },
}

export type TGetOrders = {
    orders: [],
    success?: boolean,
}