export type TIngredient = {
    calories?: number,
    carbohydrates?: number,
    fat?: number,
    image: string,
    image_mobile?: string,
    image_large?: string,
    key?: string,
    name: string,
    price: number,
    proteins?: number,
    type: string,
    __v?: number,
    _id?: string,
}

export interface IBurgerIngredientProps {
    item: TIngredient;
    index: number,
    handleClose: (item?: TIngredient) => void;
}

export interface IIngridientType {
    type: string,
    data: readonly TIngredient[],
}