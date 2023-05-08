import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../ingridients/ingridients.module.css';
import { ingredientPropType } from '../../../utils/prop-types.js';

function Ingridients(props) {
    return (
      <li className={style.ingridients_box} key={props._id}>
        <img className={style.ingridients_image} src={props.src} alt={props.name} />
        <div className={style.ingridients_prise_box}>
          <p className="text text_type_digits-default">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className='mb-1 pb-5 text text_type_main-default'>{props.name}</p>
        <Counter count={props.count} size="default" extraClass="m-1" />
      </li>
    );
  }

  Ingridients.propTypes = {
    name: ingredientPropType.name,
    price: ingredientPropType.price,
    src: ingredientPropType.src,
    _id: ingredientPropType._id,
  };

  export default Ingridients;