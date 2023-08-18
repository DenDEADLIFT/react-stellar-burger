import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import { TIngredient } from "../../components/types/ingredient";
import Spinner from '../../pages/spinner/spinner'

const IngredientPage = ({ data }: {data: readonly TIngredient[]}) => {
    
    return (!data ? <Spinner /> :
        <IngredientDetails data={data} />
    )

}

export default IngredientPage;