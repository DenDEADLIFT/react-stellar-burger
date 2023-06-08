import Ingridients from '../ingredients/ingredients.jsx';
import style from '../ingredienttype/ingredienttype.module.css';

function IngridientType({ type, data }) {
    
    return (
        <section>
            <p className={'text text_type_main-medium'}>{type}</p>
            <div className={style.ingridienttype_box}>
                {data?.map((item) => (
                    <Ingridients
                        name={item.name}
                        _id={item._id}
                        key={item._id}
                        src={item.image}
                        price={item.price}
                        count={item.__v}
                        calories={item.calories}
                        proteins={item.proteins}
                        fat={item.fat}
                        carbohydrates={item.carbohydrates}
                        image_large={item.image_large}
                        type={item.type}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default IngridientType; 