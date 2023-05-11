import style from '../ingredientdetails/ingredientdetails.module.css';

function IngredientDetails(props) {
 
    return (
        <div className={style.ingridientdetails_container}>
            <div className={style.ingridientdetails_header_container}>
                <h2 className={`${style.ingridientdetails_header} text text_type_main-large`}>
                    Детали ингридиента
                </h2>
                <div>{props.children}</div>
            </div>
                <img src={props.data.image_large} alt="ингридиент"/>
                <p className={`${style.ingridientdetails_name} text text_type_main-medium pt-4`}>{props.data.name}</p>
            <ul className={style.ingridientdetails_details}>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default'>{props.data.calories}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default'>{props.data.proteins}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default'>{props.data.fat}</p>
                </li>
                <li className={style.ingridientdetails_detail}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default'>{props.data.carbohydrates}</p>
                </li>
            </ul>

        </div>
    )
}

export default IngredientDetails;