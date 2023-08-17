import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import { TIngredient } from "../../components/types/ingredient";

function IngredientPage({ data }: {data: TIngredient[]}) {
    
    return (
        <IngredientDetails data={data} />
    )

}

export default IngredientPage;