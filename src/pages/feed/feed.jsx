import styles from './feed.module.css'
import OrdersForm from '../../components/orders-form/orders-form'
import OrdersStatus from '../../components/orders-status/orders-status'
import { useSelector } from "react-redux";

function Feed() {

    const { total, totalToday } = useSelector(state => state.rootReducer.ordersAll.data);
    const { ordersAll } = useSelector((state) => state.rootReducer.ordersAll);

    return (ordersAll.length !== 0 &&
        <div className={styles.box}>
            <p className={`text text_type_main-large text_color_primary ${styles.title}`}>Лента заказов</p>
            <div className={styles.content}>
                <div className={styles.orders}>
                    <OrdersForm />
                </div>
                <div>
                    <OrdersStatus total={total} totalToday={totalToday} />
                </div>
            </div>
        </div>
    );
}

export default Feed;