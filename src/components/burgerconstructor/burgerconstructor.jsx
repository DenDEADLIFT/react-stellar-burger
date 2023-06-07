import styles from "./burgerconstructor.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import Modal from '../modal/modal.jsx';
import OrderDetails from '../orderdetails/orderDetails.jsx';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";


function BurgerConstructor() {

    const { bun, ingredients } = useSelector(state => state.burgerConstructor);

    const bulka = "bun";

    const filling = React.useMemo(
        () => ingredients.filter(item => item.type !== bulka),
        [ingredients])

    const bun1 = React.useMemo(
        () => ingredients.find((i) => i.type === bulka),
        [ingredients])

    const price = React.useMemo(() => {
        const fillingPrice = filling.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
        return bun1 ? fillingPrice + bun1.price * 2 : 0;
    }, [bun1, filling]);

    const [modalOpen, setModalOpen] = React.useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={`${styles.burger_constructor}`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className={styles.item_box}>
                    {bun.length && <ConstructorElement
                        key={bun1._id}
                        type="top"
                        text={`${bun1.name} (верх)`}
                        price={bun1.price}
                        thumbnail={bun1.image}
                    />}
                </div>
                <div className={`${styles.constructor_box} custom-scroll`}>
                    {filling.map((i) => {
                        if (i.type !== 'bun') {
                            return (
                                <div className={`${styles.items}`} key={i._id}>
                                    <DragIcon />
                                    {bun.length && <ConstructorElement
                                        text={i.name}
                                        price={i.price}
                                        thumbnail={i.image}
                                    />}
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
                <div className={styles.item_box}>
                    {bun.length && <ConstructorElement
                        key={bun1._id}
                        type="top"
                        text={`${bun1.name} (низ)`}
                        price={bun1.price}
                        thumbnail={bun1.image}
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