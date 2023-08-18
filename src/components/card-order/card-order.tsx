import styles from './card-order.module.css'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from "../types/hooks";
import { useLocation, Link, Location } from 'react-router-dom';
import { TIngredient } from '../types/ingredient'
import { TOrder } from '../types/order'
import Spinner from '../../pages/spinner/spinner'

const CardOrder = ({ data }: {data: TOrder}) => {

    const location: Location = useLocation();
    const { ingredients } = useSelector((state) => state.ingredients);
    const toLocation: string = location.pathname === '/profile/orders' ? `/profile/orders/${data.number}` : `/feed/${data.number}`;
    
    return (!ingredients.length ? <Spinner /> :
        <Link
            key={data._id}
            to={toLocation}
            state={{ background: location }}
            className={styles.link}
        >
            <div className={location.pathname === '/profile/orders' ? styles.content : styles.content_mini}>
                <div className={styles.order_id}>
                    <p className={`text text_type_digits-default`}>{`#${data.number}`}</p>
                    <FormattedDate
                        date={new Date(data.createdAt)}
                        className="text text_type_main-default text_color_inactive"
                    />
                </div>
                <div className={styles.info}>
                    <p className={`text text_type_main-medium ${styles.title}`}>{data.name}</p>
                    {location.pathname === '/profile/orders' && <p className={`text text_type_main-small`}>
                        {data.status === 'done' ? 'Готов' : data.status === 'pending' ? 'В работе' : 'Создан'}
                    </p>}
                </div>
                <div className={styles.ingridients_box}>
                    <div className={styles.ingredients}>
                        {data && data.ingredients && data.ingredients.map((i: string, key: number) => {
                            const ingredient: TIngredient | undefined = ingredients.find((item) => item._id === i);
                            return (
                                <div className={styles.ingredient_item} key={key}>
                                    {ingredient && <img src={ingredient.image} className={styles.ingredient_item_image} alt={"ингредиент"} />}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.ingridients_prise_box}>
                        <p className="text text_type_digits-default">{
                            data && data.ingredients && data.ingredients.map((i: string) => {
                                const ingredient: TIngredient | undefined = ingredients.find((item) => item._id === i);
                                return ingredient ? ingredient.price : 0;
                            }).reduce((partialSum: number, a: number) => partialSum + a, 0)
                        }</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardOrder