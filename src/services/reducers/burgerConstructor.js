import {
    SERVERDATA_SUCCESS,
} from '../actions/actions'

const initialState = {
    ingredients: [],
    bun: [],
}

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVERDATA_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        bun: action.data.filter((i) => i.type === 'bun')
      };
    }
    default: {
        return state;
    }
}
}

