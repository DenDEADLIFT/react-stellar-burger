import styles from './orders.module.css'
import ProfilePage from '../../components/profile-page/profile-page'
import OrdersForm from '../../components/orders-form/orders-form'
import { connect as connectOrders, disconnect as disconnectOrders } from "../../services/actions/orders";
import { useSelector, useDispatch } from "../../components/types/hooks";
import { useEffect } from "react";
import { useLocation, Location } from 'react-router-dom';
import { TOrder } from '../../components/types/order'
import Spinner from '../../pages/spinner/spinner'

export const WSS_URL = `wss://norma.nomoreparties.space/`;

const Orders = () => {

    const location: Location = useLocation();
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const accessTokenWithoutBearer = accessToken?.replace("Bearer ", "");
    const data = useSelector((state) => state.orders.data);
    const orders: readonly TOrder[] | undefined = Array.isArray(data) ? undefined : data.orders;
    
    useEffect(() => {
        if (location.pathname.startsWith('/profile/orders')) {
            dispatch(connectOrders(`${WSS_URL}orders?token=${accessTokenWithoutBearer}`))
        } else {
            dispatch(disconnectOrders())
        }
    }, [dispatch, location, accessTokenWithoutBearer]);
    
    return (!data ? <Spinner /> :
        <div className={styles.content_box}>
            <div className={styles.links}>
                <ProfilePage />
            </div>
            {orders && <OrdersForm data={orders} />}
        </div>
    );
}

export default Orders;