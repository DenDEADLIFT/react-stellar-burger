import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../ingridients/ingridients.module.css';
import PropTypes from "prop-types";
import React from 'react';
import IngredientDetails from '../../ingredientdetails/ingredientdetails.jsx';
import Modal from '../../modal/modal.jsx';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Ingridients({ _id, src, name, price, count, calories, proteins, fat, carbohydrates, image_large }) {

  const [modalOpened, setModalOpened] = React.useState(false);

    const openModal = () => {
      setModalOpened(true);
    };

    const closeModal = () => {
      setModalOpened(false);
    };

  return (
    <ul className={style.ingridients_container}>
      <li className={style.ingridients_box} key={_id} onClick={openModal}>
        <img className={style.ingridients_image} src={src} alt={name} />
        <div className={style.ingridients_prise_box}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className='mb-1 pb-5 text text_type_main-default'>{name}</p>
        <Counter count={count} size="default" extraClass="m-1" />
      </li>
      {modalOpened &&
        (<Modal onClose={closeModal}>
          <IngredientDetails data={ {name, calories, proteins, fat, carbohydrates, image_large} }>{<CloseIcon onClick={closeModal} />}</IngredientDetails>
        </Modal>)
      }
    </ul>
  );
}

Ingridients.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  image_large: PropTypes.string.isRequired,
};

export default Ingridients; 