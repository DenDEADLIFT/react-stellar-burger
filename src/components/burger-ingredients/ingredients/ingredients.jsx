import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../ingredients/ingredients.module.css";
import { useLocation, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

function Ingridients({ item }) {

  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);
  const location = useLocation();

  const itemToConstructor = useMemo(() => {
    return ingredients.filter((i) => i._id === item._id);
  }, [ingredients]);

  const ingredientCounter = useMemo(() => {
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

  return (
    <>
      <Link
        key={item._id}
        to={`/ingredients/${item._id}`}
        state={{ background: location }}
        className={style.link}
      >
        <ul
          className={style.ingridients_container}
          draggable="true"
          ref={dragRef}
        >
          <li
            className={style.ingridients_box}
            key={item._id}
          >
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
        </ul>
      </Link>
    </>
  );
}

Ingridients.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Ingridients;
