import styles from './order-info-page.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const OrderInfoPage = ({ data }) => {

    const { id } = useParams()

    return (
        <>
            <div className={`${styles.container}`}>
                <p className={`text text_type_main-default text_color_primary ${styles.order_id}`}>#987654321</p>
                <p className={`text text_type_main-medium text_color_primary mt-10 ${styles.order_text}`}>NAME</p>
                <p className={`text text_type_main-small mt-3 text_color_primary ${styles.order_text}`}>Status</p>
                <p className={`text text_type_main-medium text_color_primary mt-15 ${styles.order_text}`}>Состав:</p>
                <div className={`${styles.ingredients} mt-6 pr-4 custom-scroll`}>
                    {
                        'Ingredients'}
                </div>
                <div className={`${styles.info} mt-10`}>
                    <p className={"text text_type_main-small text_color_inactive"}>Вчера, 13:50 i-GMT+3</p>
                    <div className={styles.price}>
                        <p className={"text text_type_digits-default text_color_primary"}>510</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderInfoPage