import Style from "./item.module.css";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import Spinner from '../../../pages/spinner/spinner'
import { useDispatch, useSelector } from "../../types/hooks";
import { useDrag, useDrop } from "react-dnd";
import { useRef, FC } from "react";
import { SORTING_INGREDIENTS } from "../../../services/actions/constructor-actions";
import { IBurgerIngredientProps } from '../../types/ingredient'

const IngredientItem: FC<IBurgerIngredientProps> = ({ item, index, handleClose }) => {

  const { DragIcon, ConstructorElement } = library;
  const dispatch = useDispatch();

  const others = useSelector((s) => s.burgerConstructor.ingredients);

  const [, dragRef] = useDrag({
    type: "sort",
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    drop(item: {index: number}) {
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

  const dndRef = useRef(null);
  dragRef(dndRef);
  dropRef(dndRef);

  return (!others.length ? <Spinner /> :
    <li ref={dndRef} className={Style.item}>
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

export default IngredientItem;
