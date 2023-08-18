import styles from './order-info.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../types/hooks';
import { useEffect } from "react";
import { useParams, useLocation, Location } from 'react-router-dom';
import { getOrders } from '../../services/actions/order-actions'
import { TGetOrders } from '../types/order'
import { TIngredient } from '../types/ingredient'
import Spinner from '../../pages/spinner/spinner'

const OrderInfo = () => {

    const location: Location = useLocation();
    const dispatch = useDispatch();
    const { id } = useParams<string>();
    const { ingredients } = useSelector((state) => state.ingredients);

    useEffect(() => {
        if (location.pathname.startsWith('/profile')) {
            dispatch(getOrders(id))
        } else if ((location.pathname.startsWith('/feed'))) {
            dispatch(getOrders(id))
        }
    }, [location.pathname]);

    const { orders }: any = useSelector((state) => state.order.getOrders);
    const order = (orders && orders.length > 0) && orders[0];
    
    // Объект-счетчик для подсчета количества повторяющихся ингредиентов
    const countMap: { [key: string]: number } = order?.ingredients.reduce((acc: { [key: string]: number }, curr: string) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    // Подсчет суммы всех ингредиентов
    const totalPrice: number | undefined = order?.ingredients.reduce((sum: number, ingredientId: string) => {
        const ingredient: TIngredient | undefined = ingredients.find((item) => item._id === ingredientId);
        const count: number = countMap[ingredientId];
        const price: number = ingredient ? ingredient.price : 0;
        return sum + count * price;
    }, 0);
    return (!order ? <Spinner /> :
        <div>
            <div className={styles.container}>
                <p className={`text text_type_main-default text_color_primary ${styles.order_id}`}>
                    #{order.number}
                </p>
                <p className={`text text_type_main-medium text_color_primary mt-10 ${styles.order_text}`}>
                    {order.name}
                </p>
                <p className={`text text_type_main-small mt-3 text_color_primary ${styles.order_text}`}>
                    {order.status === 'done' ? 'Готов' : order.status === 'pending' ? 'В работе' : 'Создан'}
                </p>
                <p className={`text text_type_main-medium text_color_primary mt-15 ${styles.order_text}`}>Состав:</p>
                <div className={`${styles.ingredients} mt-6 pr-4 custom-scroll`}>
                    {order && order.length !== 0 &&
                        order.ingredients.filter((ingredientId: string, index: number, arr: string[]) => {
                            return arr.indexOf(ingredientId) === index;
                        }).map((ingredientId: string, key: number) => {
                            const ingredient: TIngredient | undefined = ingredients.find((item) => item._id === ingredientId);
                            const count: number = countMap[ingredientId];

                            return (
                                <div key={key}>
                                    <div className={styles.ingredient_item} >
                                        <img
                                            src={`${ingredient !== undefined && ingredient.image}`}
                                            className={styles.ingredient_item_image}
                                            alt="ингредиент"
                                        />
                                        <p className={`text text_type_main-small text_color_primary ml-4 ${styles.ingredient_item_title}`}>
                                            {`${ingredient !== undefined && ingredient.name}`}
                                        </p>
                                        <p className={`text text_type_main-small text_color_primary ml-4 ${styles.ingredient_item_price}`}>
                                            {count} X {`${ingredient !== undefined && (count * ingredient.price)}`}
                                        </p>
                                        <CurrencyIcon type="primary" />
                                    </div>

                                </div>
                            );
                        })}
                </div>
                <div className={`${styles.info} mt-10`}>
                    <FormattedDate
                        date={new Date(order.updatedAt)}
                        className="text text_type_main-default text_color_inactive"
                    />
                    <div className={styles.price}>
                        <p className="text text_type_digits-default text_color_primary">{totalPrice}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;