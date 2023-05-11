import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../orderdetails/orderdetails.module.css';
 
function OrderDetails(props) {

    return (
        <ul className={style.orderdetails_box}>
            <li className={style.orderdetails_title_box}>
                <p className={style.orderdetails_title}></p>
                <div>{props.children}</div>
            </li>
            <li>
                <p className={`${style.orderdetails_number} text text_type_digits-large pb-4`}>
                    034536
                </p>
            </li>
            <p className="text text_type_main-medium pt-4">идентификатор заказа</p>
            <li className={style.orderdetails_icon_box}>
                <div className={style.orderdetails_icon_shadow_out}>
                    <div className={style.orderdetails_icon_shadow_in}>
                    <CheckMarkIcon type="primary" />
                    </div>
                    
                </div>

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