import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import { TIngredient } from "../../components/types/ingredient";

const IngredientPage = ({ data }: {data: readonly TIngredient[]}) => {
    
    return (
        <IngredientDetails data={data} />
    )

}

export default IngredientPage;