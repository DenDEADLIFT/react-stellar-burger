import styles from './orders-form.module.css'
import CardOrder from '../card-order/card-order'

const OrdersForm = () => {

  return (
    <div className={`${styles.content} custom-scroll`}>
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
      <CardOrder />
    </div>
  )
}

export default OrdersForm