import styles from './order-info.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OrderInfo = ({ children }) => {

    const { id } = useParams();
    const { ingredients } = useSelector((state) => state.rootReducer.ingredients);
    const { ordersAll } = useSelector((state) => state.rootReducer.ordersAll);
    const order = ordersAll.find((i) => i._id === id);

    // Объект-счетчик для подсчета количества повторяющихся ингредиентов
    const countMap = order?.ingredients.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    // Подсчет суммы всех ингредиентов
    const totalPrice = order?.ingredients.reduce((sum, ingredientId) => {
        const ingredient = ingredients.find((item) => item._id === ingredientId);
        const count = countMap[ingredientId];
        const price = ingredient ? ingredient.price : 0;
        return sum + count * price;
    }, 0);

    return (ordersAll.length !== 0 &&
        <>
            <div className={styles.close_icon}>{children}</div>
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
                    {order &&
                        order.ingredients.filter((ingredientId, index, arr) => {
                            return arr.indexOf(ingredientId) === index;
                        }).map((ingredientId, key) => {
                            const ingredient = ingredients.find((item) => item._id === ingredientId);
                            const count = countMap[ingredientId];
                            return (
                                <div key={key}>
                                    <div className={styles.ingredient_item} >
                                        <img
                                            src={ingredient.image}
                                            className={styles.ingredient_item_image}
                                            alt="ингредиент"
                                        />
                                        <p className={`text text_type_main-small text_color_primary ml-4 ${styles.ingredient_item_title}`}>
                                            {ingredient.name}
                                        </p>
                                        <p className={`text text_type_main-small text_color_primary ml-4 ${styles.ingredient_item_price}`}>
                                            {count} X {count * ingredient.price}
                                        </p>
                                        <CurrencyIcon type="primary" />
                                    </div>

                                </div>
                            );
                        })}
                </div>
                <div className={`${styles.info} mt-10`}>
                    <p className="text text_type_main-small text_color_inactive">Вчера, 13:50 i-GMT+3</p>
                    <div className={styles.price}>
                        <p className="text text_type_digits-default text_color_primary">{totalPrice}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div >
        </>
    );
};

export default OrderInfo;