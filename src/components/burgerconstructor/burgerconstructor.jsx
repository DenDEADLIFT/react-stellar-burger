import styles from "./burgerconstructor.module.css";
import {
    Button,
    ConstructorElement,
    CurrencyIcon,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
//import PropTypes from 'prop-types';
//import { ingredientPropType } from '../../utils/prop-types.js';
import React from 'react';
import Modal from '../modal/modal.jsx';
import OrderDetails from '../orderdetails/orderfetails.jsx';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgersContext } from '../../services/burgersContext.js';

function BurgerConstructor() {

    const [modalOpen, setModalOpen] = React.useState(false);

    const data = React.useContext(BurgersContext);

    const bun = React.useMemo(
        () => data.find((i) => i.type === "bun"),
        [data]
    );

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    console.log(bun)

    return (
        <div className={`${styles.burger_constructor}`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className={styles.item_box}>
                   <ConstructorElement
                        type="top"
                        isLocked="true"
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
    />
                </div>
                <div className={`${styles.constructor_box} custom-scroll`}>
                    {data.map((i) => {
                        if (i.type !== 'bun') {
                            return (
                                <div className={`${styles.items}`} key={i._id}>
                                    <DragIcon />
                                    <ConstructorElement
                                        text={i.name}
                                        price={i.price}
                                        thumbnail={i.image}
                                    />
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
                <div className={styles.item_box}>
                    {data.map((i) => {
                        if (i._id === "643d69a5c3f7b9001cfa093c") {
                            return (
                                <ConstructorElement
                                    key={i._id}
                                    type="bottom"
                                    isLocked={true}
                                    text="Краторная булка N-200i (низ)"
                                    price={i.price}
                                    thumbnail={i.image}
                                />
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
            <ul className={styles.constructor_bottom}>
                <li className={styles.constructor_price}>
                    <p className="text text_type_digits-medium">610</p>
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

//BurgerConstructor.propTypes = {
//    data: PropTypes.arrayOf(ingredientPropType.isRequired),
//};

export default BurgerConstructor; 