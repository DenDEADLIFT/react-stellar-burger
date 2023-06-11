import Ingredients from "../ingredients/ingredients.jsx";
import style from "../ingredient-type/ingredient-type.module.css";
import { v4 as uuidv4 } from "uuid";

function IngridientType({ type, data }) {

  return (
    <section>
      <p className={"text text_type_main-medium"}>{type}</p>
      <div className={style.ingridienttype_box}>
        {data.map((item, index) => {
          return <Ingredients key={uuidv4()} item={item} index={index} />;
        })}
      </div>
    </section>
  );
}

export default IngridientType;
