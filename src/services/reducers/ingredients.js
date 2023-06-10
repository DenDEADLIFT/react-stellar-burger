import {
  SERVERDATA_REQUEST,
  SERVERDATA_SUCCESS,
  SERVERDATA_FAILED,
  SELECTED_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
} from '../actions/actions'


const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientItem: []
}

export const ingredientsReducer = (state = initialState, action) => {

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

