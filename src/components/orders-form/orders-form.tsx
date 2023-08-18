import styles from './orders-form.module.css'
import CardOrder from '../card-order/card-order'
import { TOrder } from "../types/order";
import Spinner from '../../pages/spinner/spinner'


const OrdersForm = ({ data }: { data: ReadonlyArray<TOrder> | undefined }) => {
  
  return (!data ? <Spinner /> :
    <div className={`${styles.content} custom-scroll`}>
      {data.map((i: TOrder, key: number) => <CardOrder data={i} key={key} />)
      }
    </div>
  )
}

export default OrdersForm