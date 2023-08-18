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
  REMOVE_INGREDIENTS,
} from "../../services/actions/constructor-actions";
import {
  SET_USER,
} from "../../services/actions/user-actions";
import { useState, useMemo, FC, useEffect } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from "../types/hooks";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import IngredientItem from "./ingredients-item/ingredientItem";
import { isAuth } from '../../services/actions/user-actions'
import { TIngredient } from '../types/ingredient'
import Spinner from '../../pages/spinner/spinner'

const BurgerConstructor: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(isAuth());
  }, [dispatch]);

  const bulka: string = "bun";
  const filling: TIngredient[] = useMemo(
    () => ingredients.filter((item) => item.type !== "bun"),
    [ingredients]
  );

  const price: number = useMemo(() => {
    const fillingPrice: number = filling.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    return bun ? fillingPrice + bun.price * 2 : fillingPrice ? fillingPrice : 0;
  }, [bun, filling]);

  const closeModal = () => {
    setModalOpen(false);
    dispatch({ type: SET_USER, user: user });
    dispatch({ type: REMOVE_BUN });
    dispatch({ type: REMOVE_INGREDIENTS });
  };

  const openModal = () => {
    if (user) {
      setModalOpen(true)
    } else {
      navigate('/login');
    }
  };
  
  const itemDelete = (i: TIngredient) => {
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
    drop({ item }: { item: TIngredient }) {
      const element = { ...item };
      element.key = uuidv4();
      item.type !== "bun"
        ? dispatch({ type: SAUCE_TO_CONSTRUCTOR, ingredients: element })
        : dispatch({ type: BUN_TO_CONSTRUCTOR, bun: element });
    },
  });

  return (!ingredients.length ? <Spinner /> :
    <div className={`${styles.burger_constructor}`}>
      <div
        className={styles.burger_constructor_container}
        ref={dropRef}
      >
        <div className={styles.item_box}>
          {bun && (
            <ConstructorElement
              type="top"
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
              isLocked={true}
            />
          )}
        </div>
        <div className={`${styles.constructor_box} custom-scroll`}>
          {ingredients.map((item, index) => {
            return (
              <IngredientItem
                key={item.key}
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
              isLocked={true}
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
          {(ingredients.length && bun.type !== 'initial')
            ?
            (<Button onClick={openModal} type="primary" htmlType="button" size="large">Оформить заказ</Button>)
            :
            (<Button type="primary" disabled htmlType="button" size="large">Оформить заказ</Button>)}
        </li>
        {modalOpen && (
          <Modal onClose={closeModal} closeButton={closeModal}>
            <OrderDetails />
          </Modal>
        )}
      </ul>
    </div>
  );
}

export default BurgerConstructor;
