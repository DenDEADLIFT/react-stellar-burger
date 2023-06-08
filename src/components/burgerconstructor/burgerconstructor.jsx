import styles from "./burgerconstructor.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
    REMOVE_INGREDIENTS_FROM_CONSTRUCTOR,
    SAUCE_TO_CONSTRUCTOR,
    BUN_TO_CONSTRUCTOR,
} from '../../services/actions/actions'
import React from 'react';
import Modal from '../modal/modal.jsx';
import OrderDetails from '../orderdetails/orderDetails.jsx';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";


function BurgerConstructor() {

    const newId = new Date();

    const dispatch = useDispatch();

    const { bun, ingredients } = useSelector(state => state.burgerConstructor);

    const bulka = "bun";

    const filling = React.useMemo(
        () => ingredients.filter(item => item.type !== bulka),
        [ingredients])


    const price = React.useMemo(() => {
        const fillingPrice = filling.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
        return bun ? fillingPrice + bun.price * 2 
        : fillingPrice ? fillingPrice 
        : 0
    }, [bun, filling]);

    const [modalOpen, setModalOpen] = React.useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const itemDelete = (i) => {
        return dispatch({
            type: REMOVE_INGREDIENTS_FROM_CONSTRUCTOR,
            id: i._id
        })
    }

    function onDropHandler(item) {

        if (item.type === bulka) {

            return dispatch({
                type: BUN_TO_CONSTRUCTOR,
                bun: item,
                key: newId,
            });
        } else if (item.type !== bulka) {
            return dispatch({
                type: SAUCE_TO_CONSTRUCTOR,
                ingredients: item,
                key: newId,
            });
        }
    }

    const [{ isActive }, drop] = useDrop({
        accept: "ingredient", drop(ingredients) { onDropHandler(ingredients) },
        collect: (monitor) => ({ isActive: monitor.canDrop() && monitor.isOver() }),
    });

    return (
        <div className={`${styles.burger_constructor}`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} ref={drop}>
                <div className={styles.item_box}>
                    {isActive && "123"}
                    {bun && <ConstructorElement
                        key={bun._id}
                        type="top"
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />}
                </div>
                <div className={`${styles.constructor_box} custom-scroll`}>
                    {filling.length && filling.map((i) => {
                        return (
                            <div className={`${styles.items}`} key={i._id}>
                                <DragIcon />
                                {filling.length && <ConstructorElement
                                    text={i.name}
                                    price={i.price}
                                    thumbnail={i.image}
                                    handleClose={() => itemDelete(i)}
                                />}
                            </div>
                        )
                        return null;
                    })}
                </div>
                <div className={styles.item_box}>
                    {bun && <ConstructorElement
                        key={bun._id}
                        type="bottom"
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />}
                </div>
            </div>
            <ul className={styles.constructor_bottom}>
                <li className={styles.constructor_price}>
                    <p className="text text_type_digits-medium">{price}</p>
                    <CurrencyIcon type="primary" />
                </li>
                <li>
                    <Button onClick={openModal} htmlType="button" type="primary" size="large">Оформить заказ</Button>
                </li>
                {modalOpen &&
                    (<Modal onClose={closeModal}>
                        <OrderDetails>{<CloseIcon onClick={closeModal} />}</OrderDetails>
                    </Modal>)
                }
            </ul>
        </div>
    );
}

export default BurgerConstructor; 