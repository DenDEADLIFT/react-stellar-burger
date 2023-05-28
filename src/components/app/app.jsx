import styles from "./app.module.css";
import AppHeader from "../appheader/appHeader.jsx";
import BurgerIngredients from "../burgeringredients/burgerIngredients.jsx";
import BurgerConstructor from "../burgerconstructor/burgerConstructor.jsx";
import { Serverdata } from '../../utils/datafromserver.js';
import React from "react";
import { BurgersContext } from '../../services/burgersContext.js'

function App() {

  const [data, setData] = React.useState([]);

  const [errApp, setErrApp] = React.useState(false)

  React.useEffect(() => {

    const getData = async () => {
      await Serverdata()
        .then((resolve) => {
          setData(resolve.data)
        })
        .catch((reject) => {
          console.log(`Ошбика ${reject}`)
          setErrApp(true)
        })
    }
    getData();
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.content}>
        {errApp && 'Ошибка'}
        {data.length && <BurgersContext.Provider value={data}>
          <BurgerIngredients />
          <BurgerConstructor />
        </BurgersContext.Provider>}
      </div>
    </div>
  );
}

export default App;