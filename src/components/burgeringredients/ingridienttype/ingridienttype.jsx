import Ingridients from '../ingridients/ingridients.jsx';
import style from '../ingridienttype/ingridienttype.module.css'

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

export default IngridientType;