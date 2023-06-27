import styles from './card-order.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const CardOrder = () => {

    return (
        <div className={styles.content}>
            <div className={styles.order_id}>
                <p className={`text text_type_digits-default`}>#034535</p>
                <p className={`text text_type_main-default text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
            </div>
            <div className={styles.info}>
                <p className={`text text_type_main-medium`}>Death Star Starship Main бургер</p>
                <p className={`text text_type_main-small`}>Создан</p>
            </div>
            <div  className={styles.ingridients_box}>
                <div className={styles.ingridients}>

                </div>
                <div className={styles.ingridients_prise_box}>
                    <p className="text text_type_digits-default">{'480'}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}

export default CardOrder