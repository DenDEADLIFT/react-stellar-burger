import style from '../ingredient-details/ingredient-details.module.css';
import { useParams } from "react-router-dom";
import { TIngredient } from '../types/ingredient'

const IngredientDetails = ({ data }: {data: TIngredient[]}) => {

    const { id } = useParams<string>()
    const ingredient: TIngredient = data.find((i) => i._id === id) as TIngredient

    return (
        <div className={style.ingridientdetails_container}>
            <div className={style.ingridientdetails_header_container}>
                <h2 className={`${style.ingridientdetails_header} text text_type_main-large`}>
                    Детали ингредиента
                </h2>
            </div>
            <img src={ingredient.image_large} alt="ингредиент" />
            <p className={`${style.ingridientdetails_name} text text_type_main-medium pt-4`}>{ingredient.name}</p>
            <ul className={style.ingridientdetails_details}>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{ingredient.calories}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{ingredient.proteins}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{ingredient.fat}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{ingredient.carbohydrates}</p>
                </li>
            </ul>

        </div>
    )
}

export default IngredientDetails; 