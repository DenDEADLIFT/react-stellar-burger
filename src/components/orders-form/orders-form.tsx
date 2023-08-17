import styles from './orders-form.module.css'
import CardOrder from '../card-order/card-order'
import { TOrder } from "../types/order";


const OrdersForm = ({ data }: { data: ReadonlyArray<TOrder> | undefined }) => {

  if (!data || data.length === 0) {
    return null; // or any other fallback JSX element or nothing
  }
  
  
  return (
    <div className={`${styles.content} custom-scroll`}>
      {data.map((i: TOrder, key: number) => <CardOrder data={i} key={key} />)
      }
    </div>
  )
}

export default OrdersForm