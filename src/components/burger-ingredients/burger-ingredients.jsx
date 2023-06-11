import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import IngridientType from "./ingredient-type/ingredient-type.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getServerdata } from "../../services/actions/actions";
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
  const { ingredients } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  const [bunRef, bunHighlight] = useInView({ threshold: 0.2 });
  const [sauceRef, sauceHighlight] = useInView({ threshold: 0.2 });
  const [maineRef, mainHighlight] = useInView({ threshold: 0.2 });
  const [current, setCurrent] = React.useState("bun");
  const bun = "bun";
  const sauce = "sauce";
  const main = "main";

  const itemsToScroll = {
    bun: document.querySelector("#bun"),
    sauce: document.querySelector("#sauce"),
    main: document.querySelector("#main"),
  };

  const scrollIngredients = () => {
    bunHighlight
      ? setCurrent(bun)
      : sauceHighlight
        ? setCurrent(sauce)
        : setCurrent(main);
  };

  const selectTabs = (tab) => {
    setCurrent(tab);
    tab && itemsToScroll[tab].scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollIngredients();
  }, [bunHighlight, sauceHighlight, mainHighlight]);

  React.useEffect(() => {
    dispatch(getServerdata());
  }, [dispatch]);

  const Tabs = () => {
    return (
      <div style={{ display: "flex" }}>
        <Tab value="bun" active={current === bun} onClick={selectTabs}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === sauce} onClick={selectTabs}>
          Соусы
        </Tab>
        <Tab value="main" active={current === main} onClick={selectTabs}>
          Начинки
        </Tab>
      </div>
    );
  };

  const ings = React.useMemo(() => {
    return {
      buns: ingredients.filter((item) => item.type === bun),
      sauces: ingredients.filter((item) => item.type === sauce),
      mains: ingredients.filter((item) => item.type === main)
    }
  })

  return (
    <div className={`${styles.burger_ingredients} pt-5`}>
      <h1
        className={`${styles.burger_ingredients_title} text text_type_main-large pt-5 pb-5`}
      >
        Соберите бургер
      </h1>
      <div className={`${styles.tabs_box} pb-5`}>{Tabs()}</div>
      <div className={`${styles.ingredients_box} custom-scroll`}>
        <div ref={bunRef} id="bun">
          <IngridientType
            className={"pt-5 pb-5 pb-1"}
            type={"Булки"}
            data={ings.buns}
          />
        </div>
        <div ref={sauceRef} id="sauce">
          <IngridientType
            className={"pt-5 pb-5 pb-1"}
            type={"Соусы"}
            data={ings.sauces}
          />
        </div>
        <div ref={maineRef} id="main">
          <IngridientType
            className={"pt-5 pb-5 pb-1"}
            type={"Начинки"}
            data={ings.mains}
          />
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
