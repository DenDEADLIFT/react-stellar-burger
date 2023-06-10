import {
  SAUCE_TO_CONSTRUCTOR,
  BUN_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REMOVE_INGREDIENTS,
  REMOVE_BUN,
} from '../actions/actions'

import image from '../../images/done.svg'

const initialState = {
  ingredients: [],
  bun: {
    image: image,
  name: "Добавьте булку",
  price: 0,
  }
}

export const constructorReducer = (state = initialState, action) => {
  console.log(state)
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
        ingredients: [...state.ingredients].filter(item => item.key !== action.key),
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
        bun: initialState.bun,
      }
    }
    default: {
      return state;
    }
  }
}
