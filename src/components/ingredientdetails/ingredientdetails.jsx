import style from '../ingredientdetails/ingredientdetails.module.css';
import PropTypes from "prop-types";

function IngredientDetails({ children, data }) {
 
    return (
        <div className={style.ingridientdetails_container}>
            <div className={style.ingridientdetails_header_container}>
                <h2 className={`${style.ingridientdetails_header} text text_type_main-large`}>
                    Детали ингридиента
                </h2>
                <div>{children}</div>
            </div>
                <img src={data.image_large} alt="ингридиент"/>
                <p className={`${style.ingridientdetails_name} text text_type_main-medium pt-4`}>{data.name}</p>
            <ul className={style.ingridientdetails_details}>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{data.calories}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{data.proteins}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{data.fat}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{data.carbohydrates}</p>
                </li>
            </ul>

        </div>
    )
}

IngredientDetails.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
};

export default IngredientDetails; 