import styles from './feed.module.css'
import OrdersForm from '../../components/orders-form/orders-form'
import OrdersStatus from '../../components/orders-status/orders-status'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { connect as connectOrdersAll, disconnect as disconnectOrdersAll } from "../../services/actions/orders-all";

export const WSS_URL = `wss://norma.nomoreparties.space/`;

const Feed = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.startsWith('/feed')) {
            dispatch(connectOrdersAll(`${WSS_URL}orders/all`))
        } else {
            dispatch(disconnectOrdersAll())
        }
    }, [dispatch, location]);

    const { total, totalToday } = useSelector(state => state.ordersAll.data);
    const { ordersAll } = useSelector((state) => state.ordersAll);

    return (
        <div className={styles.box}>
            <p className={`text text_type_main-large text_color_primary ${styles.title}`}>Лента заказов</p>
            <div className={styles.content}>
                <div className={styles.orders}>
                    <OrdersForm data={ordersAll} />
                </div>
                <div>
                    <OrdersStatus total={total} totalToday={totalToday} />
                </div>
            </div>
        </div>
    );
}

export default Feed;