import { useSelector } from "react-redux";
import styles from './orders-status.module.css'

function OrdersStatus({ total, totalToday }) {

    const { ordersAll } = useSelector((state) => state.rootReducer.ordersAll);
    const doneStatus = ordersAll.filter((i) => i.status === "done")
    const pendingStatus = ordersAll.filter((i) => i.status === "pending")

    return (ordersAll.length !== 0 &&
        <div className={styles.box}>
            <div className={styles.orders_status_boxes}>
                <div className={styles.orders_status_box}>
                    <p className={'text text_type_main-medium text_color_primary'}>Готовы:</p>
                    <div className={styles.orders_numbers}>
                        {doneStatus && doneStatus.map((i, key) => {
                            return <p className={`text text_type_digits-default ${styles.orders_numbers_complete}`} key={key}>{i.number}</p>
                        })}
                    </div>
                </div>
                <div className={styles.orders_status_box}>
                    <p className={'text text_type_main-medium text_color_primary'}>В работе:</p>
                    <div className={styles.orders_numbers}>
                        {pendingStatus && pendingStatus.map((i, key) => {
                            return <p className={`text text_type_digits-default`}>{i.number}</p>
                        })}
                    </div>
                </div>
            </div>
            <p className={`text text_type_main-medium ${styles.orders_counter_title}`}>Выполнено за все время:</p>
            <p className={`text text_type_digits-large ${styles.orders_counter}`} >{total}</p>
            <p className={`text text_type_main-medium ${styles.orders_counter_title}`}>Выполнено за сегодня:</p>
            <p className={`text text_type_digits-large ${styles.orders_counter}`} >{totalToday}</p>
        </div>
    );
}

export default OrdersStatus;