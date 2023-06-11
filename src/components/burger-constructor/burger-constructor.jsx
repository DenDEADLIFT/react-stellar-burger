import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  SAUCE_TO_CONSTRUCTOR,
  BUN_TO_CONSTRUCTOR,
  REMOVE_BUN,
  DELETE_ORDER,
  REMOVE_INGREDIENTS,
} from "../../services/actions/actions";
import React from "react";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import IngredientItem from "./item/ingredientItem";

function BurgerConstructor() {
  const dispatch = useDispatch();

  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);
  const [modalOpen, setModalOpen] = React.useState(false);
  const bulka = "bun";

  const filling = React.useMemo(
    () => ingredients.filter((item) => item.type !== "bun"),
    [ingredients]
  );

  const price = React.useMemo(() => {
    const fillingPrice = filling.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    return bun ? fillingPrice + bun.price * 2 : fillingPrice ? fillingPrice : 0;
  }, [bun, filling]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    dispatch({ type: DELETE_ORDER });
    dispatch({ type: REMOVE_BUN });
    dispatch({ type: REMOVE_INGREDIENTS });
  };

  const itemDelete = (i) => {
    if (i.type !== bulka) {
      return dispatch({
        type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
        key: i.key,
      });
    } else {
      return dispatch({
        type: REMOVE_BUN,
      });
    }
  };

  const [, dropRef] = useDrop({
    accept: "create",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ item }) {
      const element = { ...item };

      element.key = uuidv4();

      item.type !== "bun"
        ? dispatch({ type: SAUCE_TO_CONSTRUCTOR, ingredients: element })
        : dispatch({ type: BUN_TO_CONSTRUCTOR, bun: element });
    },
  });

  return (
    <div className={`${styles.burger_constructor}`}>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        ref={dropRef}
      >
        <div className={styles.item_box}>
          {bun && (
            <ConstructorElement
              type="top"
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
              handleClose={() => itemDelete(bun)}
            />
          )}
        </div>
        <div className={`${styles.constructor_box} custom-scroll`}>
          {ingredients.map((item, index) => {
            return (
              <IngredientItem
                key={uuidv4()}
                item={item}
                index={index}
                handleClose={() => itemDelete(item)}
              />
            );
          })}
        </div>
        <div className={styles.item_box}>
          {bun && (
            <ConstructorElement
              type="bottom"
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
              handleClose={() => itemDelete(bun)}
            />
          )}
        </div>
      </div>
      <ul className={styles.constructor_bottom}>
        <li className={styles.constructor_price}>
          <p className="text text_type_digits-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </li>
        <li>
          {ingredients.length || bun ? (<Button onClick={openModal} htmlType="button" type="primary" size="large">Оформить заказ</Button>)
            : (<Button onClick={openModal} htmlType="button" type="primary" disabled size="large">Оформить заказ</Button>)}
        </li>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <OrderDetails>{<CloseIcon onClick={closeModal} />}</OrderDetails>
          </Modal>
        )}
      </ul>
    </div>
  );
}

export default BurgerConstructor;
