import Ingredients from "../ingredients/ingredients.jsx";
import style from "../ingredient-type/ingredient-type.module.css";
import PropTypes from "prop-types";

function IngridientType({ type, data }) {

  return (
    <section>
      <p className={"text text_type_main-medium"}>{type}</p>
      <div className={style.ingridienttype_box}>
        {data.map((item, index) => {
          return <Ingredients key={item._id} item={item} index={index} />;
        })}
      </div>
    </section>
  );
}

IngridientType.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngridientType;
