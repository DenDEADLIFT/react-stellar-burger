import { useEffect, useMemo } from "react";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../order-details/order-details.module.css';
import { useSelector, useDispatch } from "../types/hooks";
import { getOrderdata } from '../../services/actions/order-actions';
import { ADD_ORDER, DELETE_ORDER } from '../../services/actions/order-actions';
import Spinner from '../../pages/spinner/spinner'
import { TIngredient } from '../types/ingredient'

const OrderDetails = () => {

    const { bun, ingredients } = useSelector(state => state.burgerConstructor);
    const { actual } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const ingredientsId: string[] = useMemo(() => {
        return ingredients.map(i => i?._id!);
    }, [ingredients]);

    useEffect(() => {
        if (actual) {
            dispatch({ type: DELETE_ORDER })
        } else {
            const items: Array<string> = [bun?._id!, ...ingredientsId, bun?._id!];
            const ingredientsToOrder: TIngredient[] = [...ingredients, bun];
            dispatch(getOrderdata(items));
            dispatch({ type: ADD_ORDER, orderItems: ingredientsToOrder });
        }
    }, [ingredientsId, ingredients, bun, dispatch])

    return (!ingredients ? <Spinner /> :
        <ul className={style.orderdetails_box}>
            <li className={style.orderdetails_title_box}>
                <p className={style.orderdetails_title}></p>

            </li>
            <li>
                {actual === null ? <Spinner /> : <p className={`${style.orderdetails_number} text text_type_digits-large pb-4`}>
                    {actual && actual.order.number}
                </p>
                }
            </li>
            <p className="text text_type_main-medium pt-4">идентификатор заказа</p>
            <li className={style.orderdetails_icon_box}>
                {
                    <div className={style.orderdetails_icon_shadow_out}>
                        <div className={style.orderdetails_icon_shadow_in}>
                            <CheckMarkIcon type="primary" />
                        </div>
                    </div>
                }
            </li>
            <li>
                <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
            </li>
            <li>
                <p className={`${style.orderdetails_text} text text_type_main-default`}>
                    Дождитесь готовности на орбитальной станции
                </p>
            </li>
        </ul>
    )
}



export default OrderDetails; 