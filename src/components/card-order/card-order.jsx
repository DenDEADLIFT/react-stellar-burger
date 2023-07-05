import styles from './card-order.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from 'react-router-dom';

const CardOrder = ({ id }) => {

    const location = useLocation();

    const { ingredients } = useSelector((state) => state.ingredients);

    return (
        <Link
            key={id}
            to={`/profile/orders/${id}`}
            state={{ background: location }}
            className={styles.link}
        >
            <div className={styles.content}>
                <div className={styles.order_id}>
                    <p className={`text text_type_digits-default`}>#034535</p>
                    <p className={`text text_type_main-default text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
                </div>
                <div className={styles.info}>
                    <p className={`text text_type_main-medium`}>Death Star Starship Main бургер</p>
                    <p className={`text text_type_main-small`}>Создан</p>
                </div>
                <div className={styles.ingridients_box}>
                    <div className={styles.ingredients}>
                        {ingredients.slice(0, 6).map((i, index) =>
                                <div className={styles.ingredient_item}
                                    key={index}
                                >
                                    <img
                                        src={i.image}
                                        className={styles.ingredient_item_image} alt={"ингредиент"}
                                    /></div>)}
                    </div>
                    <div className={styles.ingridients_prise_box}>
                        <p className="text text_type_digits-default">{'480'}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardOrder