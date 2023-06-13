import Style from "./item.module.css";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import React from "react";
import { SORTING_INGREDIENTS } from "../../../services/actions/constructor-actions";
import { SELECTED_INGREDIENT, REMOVE_SELECTED_INGREDIENT } from "../../../services/actions/ingredients-actions";

const IngredientItem = ({ item, index, handleClose }) => {

  const { DragIcon, ConstructorElement } = library;
  const dispatch = useDispatch();

  const others = useSelector((s) => s.burgerConstructor.ingredients);

  const [, dragRef] = useDrag({
    type: "sort",
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    drop(item) {
      const sort = [...others];
      const movable = sort.splice(item.index, 1)[0];
      sort.splice(index, 0, movable);
      dispatch({
        type: SORTING_INGREDIENTS,
        ingredients: sort,
      });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const dndRef = React.useRef(null);
  dragRef(dndRef);
  dropRef(dndRef);

  const [modalOpened, setModalOpened] = React.useState(false);

  const openModal = () => {

    setModalOpened(true);
    dispatch({ type: SELECTED_INGREDIENT, data: item });
  };

  const closeModal = () => {
    setModalOpened(false);
    dispatch({ type: REMOVE_SELECTED_INGREDIENT });
  };

  return (
    <li ref={dndRef} className={Style.item} onClick={openModal}>
      <div className={Style.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={Style.element}>
        <ConstructorElement
          isLocked={false}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={handleClose}
        />
      </div>

    </li>
  );
};

IngredientItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default IngredientItem;
