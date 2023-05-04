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
        <div className={`${styles.burger_ingredients} custom-scroll pt-5`}>
            <h1 className={`${styles.burger_ingredients_title} text text_type_main-large pt-5 pb-5`}>Соберите бургер</h1>
            <div className={`${styles.tabs_box} pb-5`}>{Tabs()}</div>
            <div>
            <IngridientType className={'pt-5 pb-5 pb-1'} type={"Булки"} data={data.filter(item => item.type === "bun")} />
			<IngridientType className={'pt-5 pb-5 pb-1'} type={"Соусы"} data={data.filter(item => item.type === "sauce")} />
            <IngridientType className={'pt-5 pb-5 pb-1'} type={"Начинка"} data={data.filter(item => item.type === "main")} />

            </div>
        </div>
    );
}

export default BurgerIngredients;
