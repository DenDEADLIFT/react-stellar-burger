import {
  SERVERDATA_REQUEST,
  SERVERDATA_SUCCESS,
  SERVERDATA_FAILED,
  TServerdataActions,
} from '../actions/data-actions'
import {
  SELECTED_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
  TIngredientsActions,
} from '../actions/ingredients-actions'
import { TIngredient } from '../../components/types/ingredient'

type TIngredientsState = {
  ingredients: ReadonlyArray<TIngredient>;
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
  ingredientItem: ReadonlyArray<TIngredient>,
  modalOpened: boolean,
}

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientItem: [],
  modalOpened: false,
}

export const ingredientsReducer = (state = initialState, action: TServerdataActions | TIngredientsActions): TIngredientsState => {
  
  switch (action.type) {
    case SERVERDATA_REQUEST: {
      return {
        ...state,

        ingredientsRequest: true,
      };
    }
    case SERVERDATA_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };

    }
    case SERVERDATA_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
        ingredientItem: [],
      };
    }
    case SELECTED_INGREDIENT: {
      return {
        ...state,
        ingredientItem: action.data
      };
    }
    case REMOVE_SELECTED_INGREDIENT: {
      return {
        ...state,
        ingredientItem: []
      };
    }
    default: {
      return state;
    }
  }
}

