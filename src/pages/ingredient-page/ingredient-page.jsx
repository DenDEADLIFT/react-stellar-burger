import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import PropTypes from "prop-types";

function IngredientPage({ data }) {

    return (
        <IngredientDetails data={data} />
    )

}

IngredientPage.propTypes = {
    data: PropTypes.array.isRequired,
};

export default IngredientPage;