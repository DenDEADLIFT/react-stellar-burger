import styles from './orders-form.module.css'
import CardOrder from '../card-order/card-order'


const OrdersForm = ({ data }) => {

  return (data.length !== 0 &&
    <div className={`${styles.content} custom-scroll`}>
      {data.map((i, key) => <CardOrder data={i} key={key} />)
      }
    </div>
  )
}

export default OrdersForm