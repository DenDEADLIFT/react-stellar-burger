import styles from "./burgeringredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import IngridientType from '../burgeringredients/ingridienttype/ingridienttype.jsx'
import PropTypes from 'prop-types';

function BurgerIngredients({data}) {
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
            <IngridientType className={'pt-5 pb-5 pb-1'} type={"Булки"} data={data.filter(item => item.type === "bun")} />
			<IngridientType className={'pt-5 pb-5 pb-1'} type={"Соусы"} data={data.filter(item => item.type === "sauce")} />
            <IngridientType className={'pt-5 pb-5 pb-1'} type={"Начинка"} data={data.filter(item => item.type === "main")} />
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string,
  };

export default BurgerIngredients;
