import styles from './orders-form.module.css'
import CardOrder from '../card-order/card-order'

const OrdersForm = () => {

  return (
    <div className={`${styles.content} custom-scroll`}>
      <CardOrder id={123} />
      <CardOrder id={124} />
      <CardOrder id={125} />
      <CardOrder id={126} />
      <CardOrder id={127} />
      <CardOrder id={128} />
      <CardOrder id={129} />
      <CardOrder id={131} />
      <CardOrder id={162} />
      <CardOrder id={184} />
    </div>
  )
}

export default OrdersForm