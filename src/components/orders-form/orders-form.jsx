import styles from './orders-form.module.css'
import { useSelector, useDispatch } from "react-redux";
import CardOrder from '../card-order/card-order'
import { useLocation } from 'react-router-dom';


const OrdersForm = ({data}) => {

  return (data.length !== 0 &&
    <div className={`${styles.content} custom-scroll`}>
      {data.map((i, key) => <CardOrder data={i} key={key} />)
      }
    </div>
  )
} 

export default OrdersForm