import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../ingredients/ingredients.module.css";
import PropTypes from "prop-types";
import React from "react";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../../utils/prop-types.js";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

function Ingridients({ item }) {
  
  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);

  const itemToConstructor = React.useMemo(() => {
    return ingredients.filter((i) => i._id === item._id);
  }, [ingredients]);

  const ingredientCounter = React.useMemo(() => {
    if (bun !== null && item._id === bun._id) {
      return 2;
    } else if (ingredients !== []) {
      return itemToConstructor.length;
    }
  }, [bun, item._id, ingredients, itemToConstructor]);

  const [, dragRef] = useDrag({
    type: "create",
    item: { item },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [modalState, setModalState] = React.useState(false);

  const open = () => {
    setModalState(true);
  };
  const close = () => {
    setModalState(false);
  };

  return (
    <ul
      className={style.ingridients_container}
      draggable="true"
      ref={dragRef}
    >
      <li className={style.ingridients_box} key={item._id} onClick={open}>
        <img
          className={style.ingridients_image}
          src={item.image}
          alt={item.name}
        />
        <div className={style.ingridients_prise_box}>
          <p className="text text_type_digits-default">{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="mb-1 pb-5 text text_type_main-default">{item.name}</p>
        {((bun && item._id === bun._id) || itemToConstructor.length !== 0) && (
          <Counter count={ingredientCounter} size="default" extraClass="m-1" />
        )}
      </li>
      {modalState && (
        <Modal onClose={close}>
          <IngredientDetails data={item}>
            {<CloseIcon onClick={close} />}
          </IngredientDetails>
        </Modal>
      )}
    </ul>
  );
}

Ingridients.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Ingridients;
