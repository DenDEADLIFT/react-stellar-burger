import styles from "./burgeringredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import IngridientType from './ingredienttype/ingredientType.jsx';
import { useSelector, useDispatch } from "react-redux";
import { getServerdata } from '../../services/actions/actions'

function BurgerIngredients() {

    const {
        ingredients,
    } = useSelector((state) => state.ingredients);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getServerdata());
    }, [dispatch]);
    
    const Tabs = () => {
        const [current, setCurrent] = React.useState('bun')
        return (
            <div style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
        )
    }

    return (
        <div className={`${styles.burger_ingredients} pt-5`}>
            <h1 className={`${styles.burger_ingredients_title} text text_type_main-large pt-5 pb-5`}>Соберите бургер</h1>
            <div className={`${styles.tabs_box} pb-5`}>{Tabs()}</div>
            <div className={`${styles.ingredients_box} custom-scroll`}>
            <IngridientType className={'pt-5 pb-5 pb-1'} type={"Булки"} data={ingredients.filter(item => item.type === "bun")} />
			<IngridientType className={'pt-5 pb-5 pb-1'} type={"Соусы"} data={ingredients.filter(item => item.type === "sauce")} />
            <IngridientType className={'pt-5 pb-5 pb-1'} type={"Начинка"} data={ingredients.filter(item => item.type === "main")} />
            </div>
        </div>
    );
}

export default BurgerIngredients; 
