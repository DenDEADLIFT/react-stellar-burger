import { store } from '../../services/reducers/index';
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type AppDispatch = typeof store.dispatch; 

export const useDispatch = () => dispatchHook<AppDispatch>();