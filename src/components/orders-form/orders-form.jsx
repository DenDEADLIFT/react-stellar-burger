import styles from './orders-form.module.css'
import { useSelector } from "react-redux";
import CardOrder from '../card-order/card-order'

const OrdersForm = () => {

  const { ordersAll } = useSelector((state) => state.rootReducer.ordersAll);

  return (ordersAll.length !== 0 &&
    <div className={`${styles.content} custom-scroll`}>
      {ordersAll.map((i, key) => <CardOrder data={i} key={key} />)
      }
    </div>
  )
}

export default OrdersForm