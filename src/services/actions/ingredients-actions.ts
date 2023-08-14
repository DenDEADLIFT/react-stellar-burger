import { TIngredient } from '../../components/types/ingredient'

export const SELECTED_INGREDIENT: 'SELECTED_INGREDIENT' = 'SELECTED_INGREDIENT';
export const REMOVE_SELECTED_INGREDIENT: 'REMOVE_SELECTED_INGREDIENT' = 'REMOVE_SELECTED_INGREDIENT';

export interface ISelectedIngredientAction {
    readonly type: typeof SELECTED_INGREDIENT;
    readonly ingredientItem: ReadonlyArray<TIngredient>;
    readonly data: ReadonlyArray<TIngredient>;
}

export interface IRemoveSelectedIngredientAction {
    readonly type: typeof REMOVE_SELECTED_INGREDIENT;
}

export type TIngredientsActions = 
    | ISelectedIngredientAction
    | IRemoveSelectedIngredientAction