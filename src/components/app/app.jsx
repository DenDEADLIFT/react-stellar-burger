import styles from "./app.module.css";
import AppHeader from "../appheader/appHeader.jsx";
import BurgerIngredients from "../burgeringredients/burgeringredients";
import BurgerConstructor from "../burgerconstructor/burgerconstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.content}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;