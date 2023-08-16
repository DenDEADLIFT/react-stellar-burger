import Ingredients from "../ingredients/ingredients";
import style from "../ingredient-type/ingredient-type.module.css";
import { FC } from 'react'
import { TIngredient } from '../../types/ingredient'

interface IIngridientType {
  type: string,
  data: TIngredient[],
}

const IngridientType: FC<IIngridientType> = ({ type, data }) => {

  return (
    <section>
      <p className={"text text_type_main-medium"}>{type}</p>
      <div className={style.ingridienttype_box}>
        {data.map((item: TIngredient) => {
          return <Ingredients key={item._id} item={item}/>;
        })}
      </div>
    </section>
  );
}

export default IngridientType;
