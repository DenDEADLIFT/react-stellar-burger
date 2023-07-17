import styles from './card-order.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from "react-redux";
import { useLocation, Link } from 'react-router-dom';

const CardOrder = ({ data }) => {

    const location = useLocation();
    const { ingredients } = useSelector((state) => state.rootReducer.ingredients);
    const toLocation = location.pathname === '/profile/orders' ? `/profile/orders/${data._id}` : `/feed/${data._id}`;

    return (
        <Link
            key={data._id}
            to={toLocation}
            state={{ background: location }}
            className={styles.link}
        >
            <div className={location.pathname === '/profile/orders' ? styles.content : styles.content_mini}>
                <div className={styles.order_id}>
                    <p className={`text text_type_digits-default`}>{`#${data.number}`}</p>
                    <p className={`text text_type_main-default text_color_inactive`}>{data.createdAt}</p>
                </div>
                <div className={styles.info}>
                    <p className={`text text_type_main-medium ${styles.title}`}>{data.name}</p>
                    {location.pathname === '/profile/orders' && <p className={`text text_type_main-small`}>
                        {data.status === 'done' ? 'Готов' : data.status === 'pending' ? 'В работе' : 'Создан'}
                    </p>}
                </div>
                <div className={styles.ingridients_box}>
                    <div className={styles.ingredients}>
                        {data && data.ingredients.map((i, key) =>
                            <div className={styles.ingredient_item}
                                key={key}
                            >
                                <img
                                    src={ingredients.find((item) => item._id === i).image}
                                    className={styles.ingredient_item_image} alt={"ингредиент"}
                                /></div>
                        )
                        }
                    </div>
                    <div className={styles.ingridients_prise_box}>
                        <p className="text text_type_digits-default">{
                            data && data.ingredients.map((i) => (ingredients.find((item) => item._id === i).price)).reduce((partialSum, a) => partialSum + a, 0)
                        }</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardOrder