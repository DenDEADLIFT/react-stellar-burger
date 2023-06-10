import {
  SAUCE_TO_CONSTRUCTOR,
  BUN_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REMOVE_INGREDIENTS,
  REMOVE_BUN,
} from '../actions/actions'

const initialState = {
  ingredients: [],
  bun: null
}

export const constructorReducer = (state = initialState, action) => {

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
        bun: action.bun
      };
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(item => item._id !== action.key),
      }
    }
    case REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: [],
      }
    }
    case REMOVE_BUN: {
      return {
        ...state,
        bun: null,
      }
    }
    default: {
      return state;
    }
  }
}

