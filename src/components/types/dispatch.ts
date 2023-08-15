import { Dispatch } from 'redux';
import { TServerdataActions } from '../../services/actions/data-actions'
import { TOrderActions } from '../../services/actions/order-actions'
import { TPasswordActions } from '../../services/actions/password-actions'
import { TUserActions } from '../../services/actions/user-actions'

export type AppDispatch = Dispatch<TServerdataActions | TOrderActions | TPasswordActions | TUserActions>;