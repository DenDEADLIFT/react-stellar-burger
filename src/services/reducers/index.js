import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './burgerConstructor';
import { orderReducer } from './order';
import { userReducer } from './user';
import { passwordReducer } from './password';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    order: orderReducer,
    user: userReducer,
    password: passwordReducer,
});