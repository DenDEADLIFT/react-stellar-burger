import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect, useMemo, FC } from "react";
import IngridientType from "./ingredient-type/ingredient-type";
import { useSelector } from "../types/hooks";
import { useInView } from "react-intersection-observer";
import Spinner from '../../pages/spinner/spinner'

const BurgerIngredients: FC = () => {
  const { ingredients } = useSelector((state) => state.ingredients);
  const [bunRef, bunHighlight] = useInView({ threshold: 0.2 });
  const [sauceRef, sauceHighlight] = useInView({ threshold: 0.2 });
  const [maineRef, mainHighlight] = useInView({ threshold: 0.2 });
  const [current, setCurrent] = useState("bun");
  const bun: string = "bun";
  const sauce: string = "sauce";
  const main: string = "main";

  interface IItemsToScroll {
    [key: string]: HTMLElement | null;
    bun: HTMLElement | null;
    sauce: HTMLElement | null;
    main: HTMLElement | null;
  }

  const itemsToScroll: IItemsToScroll = {
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

  const selectTabs = (tab: string) => {
    setCurrent(tab);
    tab && itemsToScroll[tab]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollIngredients();
  }, [bunHighlight, sauceHighlight, mainHighlight]);

  const Tabs = () => {
    return (
      <div className={styles.burger_ingredients_menu}>
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

  const ings = useMemo(() => {
    return {
      buns: ingredients.filter((item) => item.type === bun),
      sauces: ingredients.filter((item) => item.type === sauce),
      mains: ingredients.filter((item) => item.type === main)
    }
  }, [])

  return (!ingredients.length ? <Spinner /> :
    <div className={`${styles.burger_ingredients} pt-5`}>
      <h1
        className={`${styles.burger_ingredients_title} text text_type_main-large pt-5 pb-5`}
      >
        Соберите бургер
      </h1>
      <div className={`${styles.tabs_box} pb-5`}>{Tabs()}</div>
      <div className={`${styles.ingredients_box} custom-scroll`}>
        <div ref={bunRef} id="bun" className={"pt-5 pb-5 pb-1"}>
          <IngridientType
            type={"Булки"}
            data={ings.buns}
          />
        </div>
        <div ref={sauceRef} id="sauce" className={"pt-5 pb-5 pb-1"}>
          <IngridientType
            type={"Соусы"}
            data={ings.sauces}
          />
        </div>
        <div ref={maineRef} id="main" className={"pt-5 pb-5 pb-1"}>
          <IngridientType
            type={"Начинки"}
            data={ings.mains}
          />
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
