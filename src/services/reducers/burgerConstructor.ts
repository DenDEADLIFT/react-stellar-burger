import {
  SAUCE_TO_CONSTRUCTOR,
  BUN_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REMOVE_INGREDIENTS,
  REMOVE_BUN,
  SORTING_INGREDIENTS,
  TConstructorActions,
} from "../actions/constructor-actions";

import image from "../../images/done.svg";
import { TIngredient } from '../../components/types/ingredient'

type TConstructorState = {
  ingredients: ReadonlyArray<TIngredient>;
  bun: TIngredient;
}

const initialState: TConstructorState = {
  ingredients: [],
  bun: {
    image: image,
    name: "Добавьте булку",
    price: 0,
    type: 'initial',
  },
};

export const constructorReducer = (state = initialState, action: TConstructorActions): TConstructorState => {
  
  switch (action.type) {
    case SAUCE_TO_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [...state.ingredients, { ...action.ingredients }],
      };
    }
    case BUN_TO_CONSTRUCTOR: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((item) => item.key !== action.key),
      };
    }
    case REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: [],
      };
    }
    case REMOVE_BUN: {
      return {
        ...state,
        bun: initialState.bun,
      };
    }
    case SORTING_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients,
      };
    }
    default: {
      return state;
    }
  }
};
