import { Dispatch } from 'redux';
import { TServerdataActions } from '../../services/actions/data-actions'
import { TOrderActions } from '../../services/actions/order-actions'
import { TPasswordActions } from '../../services/actions/password-actions'

export type AppDispatch = Dispatch<TServerdataActions | TOrderActions | TPasswordActions>;