import Ingridients from '../ingridients/ingridients.jsx';
import style from '../ingridienttype/ingridienttype.module.css';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../../utils/prop-types.js';

function IngridientType({ type, data }) {
    return (
        <section>
            <p className={'text text_type_main-medium'}>{type}</p>
            <div className={style.ingridienttype_box}>
                {data?.map((item) => (
                    <Ingridients
                        name={item.name}
                        key={item._id}
                        src={item.image}
                        price={item.price}
                        count={item.count}
                    />
                ))}
            </div>
        </section>
    );
}

IngridientType.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType),
    name: ingredientPropType.name,
    key: ingredientPropType._id,
    src: ingredientPropType.image,
    price: ingredientPropType.price,
    count: ingredientPropType.count,
};

export default IngridientType;