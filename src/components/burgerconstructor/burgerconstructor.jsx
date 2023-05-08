import styles from "./burgerconstructor.module.css";
import { data } from "../../utils/data.js";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types.js'

function BurgerConstructor() {
    return (
        <div className={`${styles.burger_constructor}`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className={styles.item_box}>
                    {data.map((i) => {
                        if (i._id === "60666c42cc7b410027a1a9b1") {
                            return (
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text="Краторная булка N-200i (верх)"
                                    price={i.price}
                                    thumbnail={i.image}
                                />
                            )
                        }
                    })}
                </div>
                <div className={`${styles.constructor_box} custom-scroll`}>
                    {data.map((i) => {
                        if (i.type !== 'bun') {
                            return (
                                <div className={`${styles.items}`}>
                                    <DragIcon />
                                    <ConstructorElement
                                        text={i.name}
                                        price={i.price}
                                        thumbnail={i.image}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
                <div className={styles.item_box}>
                    {data.map((i) => {
                        if (i._id === "60666c42cc7b410027a1a9b1") {
                            return (
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text="Краторная булка N-200i (низ)"
                                    price={i.price}
                                    thumbnail={i.image}
                                />
                            )
                        }
                    })}
                </div>
            </div>
            <ul className={styles.constructor_bottom}>
                <li className={styles.constructor_price}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </li>
                <li>
                    <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
                </li>
            </ul>
        </div>
    );
}

BurgerConstructor.propTypes = {
    dataBurger: PropTypes.arrayOf(ingredientPropType),
  };

export default BurgerConstructor;