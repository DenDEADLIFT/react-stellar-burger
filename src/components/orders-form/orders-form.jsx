import styles from './orders-form.module.css'
import CardOrder from '../card-order/card-order'
import PropTypes from "prop-types";


const OrdersForm = ({ data }) => {

  return (data.length !== 0 &&
    <div className={`${styles.content} custom-scroll`}>
      {data.map((i, key) => <CardOrder data={i} key={key} />)
      }
    </div>
  )
}

OrdersForm.propTypes = {
  data: PropTypes.array.isRequired,
};

export default OrdersForm