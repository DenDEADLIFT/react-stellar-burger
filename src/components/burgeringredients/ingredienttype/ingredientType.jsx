import Ingridients from '../ingredients/ingredients.jsx';
import style from '../ingredienttype/ingredienttype.module.css';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../../utils/prop-types.js';
 
function IngridientType( { type, data } ) {

    return (
        <section>
            <p className={'text text_type_main-medium'}>{type}</p>
            <div className={style.ingridienttype_box}>
                {data?.map((item) =>  (
                    <Ingridients
                        name={item.name}
                        key={item._id}
                        src={item.image}
                        price={item.price}
                        count={item.__v}
                        calories={item.calories}
                        proteins={item.proteins}
                        fat={item.fat}
                        carbohydrates={item.carbohydrates}
                        image_large={item.image_large}
                    />
                ))}
            </div>
        </section>
    );
}

IngridientType.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired),
    type: PropTypes.string,
};

export default IngridientType; 