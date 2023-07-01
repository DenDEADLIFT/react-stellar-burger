import styles from './orders.module.css'
import ProfilePage from '../../components/profile-page/profile-page'
import OrdersForm from '../../components/orders-form/orders-form'

function Orders() {

    return (
        <div className={styles.content_box}>
            <div className={styles.links}>
            <ProfilePage />
            </div>
            <OrdersForm />
        </div>
    );
}

export default Orders;