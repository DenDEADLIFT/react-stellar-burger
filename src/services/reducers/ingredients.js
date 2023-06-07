import {
    SERVERDATA_REQUEST,
    SERVERDATA_SUCCESS,
    SERVERDATA_FAILED,
} from '../actions/actions'


const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
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
        default: {
          return state;
        }
      }
}

