import { TIngredient } from '../../components/types/ingredient'

export const SAUCE_TO_CONSTRUCTOR: 'SAUCE_TO_CONSTRUCTOR' = 'SAUCE_TO_CONSTRUCTOR';
export const BUN_TO_CONSTRUCTOR: 'BUN_TO_CONSTRUCTOR' = 'BUN_TO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR: 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR' = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const REMOVE_INGREDIENTS: 'REMOVE_INGREDIENTS' = 'REMOVE_INGREDIENTS';
export const REMOVE_BUN: 'REMOVE_BUN' = 'REMOVE_BUN';
export const SORTING_INGREDIENTS: 'SORTING_INGREDIENTS' = 'SORTING_INGREDIENTS';

export interface ISauceToConstructorAction {
    readonly type: typeof SAUCE_TO_CONSTRUCTOR;
    readonly ingredients: TIngredient;
}

export interface IBunToConstructorAction {
    readonly type: typeof BUN_TO_CONSTRUCTOR;
    readonly bun: TIngredient;
}

export interface IRemoveIngredientFromConstructorAction {
    readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
    readonly ingredients: ReadonlyArray<TIngredient>;
    readonly key: string;
}

export interface IRemoveIngredientsAction {
    readonly type: typeof REMOVE_INGREDIENTS;
}

export interface IRemoveBunAction {
    readonly type: typeof REMOVE_BUN;
}

export interface ISortingIngredientsAction {
    readonly type: typeof SORTING_INGREDIENTS;
    readonly ingredients: ReadonlyArray<TIngredient>;
}

export type TConstructorActions = 
    | ISauceToConstructorAction
    | IBunToConstructorAction
    | IRemoveIngredientFromConstructorAction
    | IRemoveIngredientsAction
    | IRemoveBunAction
    | ISortingIngredientsAction