import styles from './orders.module.css'
import ProfilePage from '../../components/profile-page/profile-page'
import OrdersForm from '../../components/orders-form/orders-form'
import { connect as connectOrders, disconnect as disconnectOrders } from "../../services/actions/orders";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export const WSS_URL = `wss://norma.nomoreparties.space/`;

function Orders() {

    const location = useLocation();
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const accessTokenWithoutBearer = accessToken ? accessToken.replace("Bearer ", "") : "";
    const orders = useSelector((state) => state.rootReducer.orders.data.orders);

    useEffect(() => {
        if (location.pathname.startsWith('/profile/orders')) {
            dispatch(connectOrders(`${WSS_URL}orders?token=${accessTokenWithoutBearer}`))
        } else {
            dispatch(disconnectOrders())
        }
    }, [dispatch, location, accessTokenWithoutBearer]);

    return (
        <div className={styles.content_box}>
            <div className={styles.links}>
                <ProfilePage />
            </div>
            {orders && orders.length > 0 ? <OrdersForm data={orders} /> : null}
        </div>
    );
}

export default Orders;