import style from '../ingredientdetails/ingredientdetails.module.css';

function IngredientDetails(props) {

    return (
        <div className={style.ingridientdetails_container}>
            <div className={style.ingridientdetails_header_container}>
                <h2 className={`${style.ingridientdetails_header}`}>
                    Детали ингридиента
                </h2>
                <div>{props.children}</div>
            </div>
            <figure className='pb-4'>
                <img src={props.data.image_large} alt="картинка ингредиента" />
                <figcaption className='text text_type_main-medium pt-4'>{props.data.name}</figcaption>
            </figure>
            <ul>
                <li>
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{props.data.calories}</p>
                </li>
                <li>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{props.data.proteins}</p>
                </li>
                <li>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{props.data.fat}</p>
                </li>
                <li>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{props.data.carbohydrates}</p>
                </li>
            </ul>

        </div>
    )
}

export default IngredientDetails;