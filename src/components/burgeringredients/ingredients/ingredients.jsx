import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../ingredients/ingredients.module.css';
import PropTypes from "prop-types";
import React from 'react';
import IngredientDetails from '../../ingredientdetails/ingredientDetails.jsx';
import Modal from '../../modal/modal.jsx';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from '../../../utils/prop-types.js';
import { useDrag } from "react-dnd";
import { SELECTED_INGREDIENT, REMOVE_SELECTED_INGREDIENT } from '../../../services/actions/actions'
import { useDispatch } from 'react-redux';

function Ingridients(data) {

  const dispatch = useDispatch();
  
  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  const [modalOpened, setModalOpened] = React.useState(false);

  const openModal = () => {
    setModalOpened(true);
    dispatch({type: SELECTED_INGREDIENT, data: data});
  };

  const closeModal = () => {
    setModalOpened(false);
    dispatch({type: REMOVE_SELECTED_INGREDIENT});
  };

  return (
    <ul className={style.ingridients_container}>
      <li className={style.ingridients_box} key={data._id} onClick={openModal} ref={drag} style={{ opacity }}>
        <img className={style.ingridients_image} src={data.src} alt={data.name} />
        <div className={style.ingridients_prise_box}>
          <p className="text text_type_digits-default">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className='mb-1 pb-5 text text_type_main-default'>{data.name}</p>
        <Counter count={data.count} size="default" extraClass="m-1" />
      </li>
      {modalOpened &&
        (<Modal onClose={closeModal}>
          <IngredientDetails data={data}>{<CloseIcon onClick={closeModal} />}</IngredientDetails>
        </Modal>)
      }
    </ul>
  );
}

Ingridients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired),
};

export default Ingridients; 