import React from "react";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../orderdetails/orderdetails.module.css';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types.js';
import { BurgersContext } from '../../services/burgersContext.js';
import { orderdata } from '../../utils/datafromserver.js';
 
function OrderDetails(props) {

    const data = React.useContext(BurgersContext);

    const [orderNum, setOrder] = React.useState([]);

    const ingridientsId = React.useMemo(
        () => data.map((i) => i._id),
        [data]
      );
      //console.log(ingridientsId)

    React.useEffect(() => {
        const getData = async () => {
          await orderdata(ingridientsId)
          .then((resolve) => {
            setOrder(resolve.order.number)
          })
          .catch((reject) => {
            console.log(`Ошбика ${reject.status}`)
          })
        }
        getData();
      }, [])

      

    return (
        <ul className={style.orderdetails_box}>
            <li className={style.orderdetails_title_box}>
                <p className={style.orderdetails_title}></p>
                <div>{props.children}</div>
            </li>
            <li>
                <p className={`${style.orderdetails_number} text text_type_digits-large pb-4`}>
                {orderNum}
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

OrderDetails.propTypes = {
    props: PropTypes.arrayOf(ingredientPropType.isRequired),
};

export default OrderDetails; 