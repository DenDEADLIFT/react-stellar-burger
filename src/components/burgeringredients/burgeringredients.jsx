import styles from "./burgeringredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import IngridientType from '../burgeringredients/ingridienttype/ingridienttype.jsx'
import { data } from "../../utils/data.js";

function BurgerIngredients() {
    const Tabs = () => {
        const [current, setCurrent] = React.useState('one')
        return (
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
        )
    }

    return (
        <div className={`${styles.burger_ingredients} custom-scroll`}>
            <h1 className={styles.burger_ingredients_title}>Соберите бургер</h1>
            <div className={styles.tabs_box}>{Tabs()}</div>
            <div>
            <IngridientType type={"Булки"} data={data.filter(item => item.type === "bun")} />
			<IngridientType type={"Соусы"} data={data.filter(item => item.type === "sauce")} />
            <IngridientType type={"Начинка"} data={data.filter(item => item.type === "main")} />

            </div>
        </div>
    );
}

export default BurgerIngredients;
