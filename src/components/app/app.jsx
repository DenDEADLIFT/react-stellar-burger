import styles from "./app.module.css";
import AppHeader from "../appheader/appHeader.jsx";
import BurgerIngredients from "../burgeringredients/burgerIngredients.jsx";
import BurgerConstructor from "../burgerconstructor/burgerConstructor.jsx";

function App() {

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;