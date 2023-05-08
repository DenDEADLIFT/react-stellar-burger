import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  //укажите здесь prop-types для ингридиента
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['bun', 'main', 'sauce']),
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
  count: PropTypes.number
});
