import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../ingridients/ingridients.module.css';
import PropTypes from "prop-types";

function Ingridients({ _id, src, name, price, count }) {
  return (
    <li className={style.ingridients_box} key={_id}>
      <img className={style.ingridients_image} src={src} alt={name} />
      <div className={style.ingridients_prise_box}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className='mb-1 pb-5 text text_type_main-default'>{name}</p>
      <Counter count={count} size="default" extraClass="m-1" />
    </li>
  );
}

Ingridients.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Ingridients;