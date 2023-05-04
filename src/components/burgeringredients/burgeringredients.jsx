import styles from "./burgeringredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function BurgerIngredients() {
    const tabs = () => {
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
        <burger_ingredients className={styles.burger_ingredients}>
            <h1 className={styles.burger_ingredients_title}>Соберите бургер</h1>
            <tabs_box className={styles.tabs_box}>{tabs()}</tabs_box>
        </burger_ingredients>
    );
}


export default BurgerIngredients;
