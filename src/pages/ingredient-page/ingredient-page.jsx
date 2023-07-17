import style from './ingredient-page.module.css';
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getServerdata } from "../../services/actions/data-actions";

function IngredientPage({ data }) {

    const dispatch = useDispatch();
    const { id } = useParams()
    const ingredient = data.find((i) => i._id === id)

    useEffect(() => {
        dispatch(getServerdata());
    }, [dispatch]);

    return (
        ingredient &&
        <div className={style.ingridientdetails_container}>
            <div className={style.ingridientdetails_header_container}>
                <h2 className={`${style.ingridientdetails_header} text text_type_main-large`}>
                    Детали ингридиента
                </h2>
            </div>
            <img src={ingredient.image_large} alt="ингридиент" />
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
export default IngredientPage;