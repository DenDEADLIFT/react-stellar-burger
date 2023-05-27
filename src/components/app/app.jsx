import styles from "./app.module.css";
import AppHeader from "../appheader/appheader";
import BurgerIngredients from "../burgeringredients/burgeringredients";
import BurgerConstructor from "../burgerconstructor/burgerconstructor";
import { Serverdata } from '../../utils/datafromserver.js';
import React from "react";
import { BurgersContext } from '../../services/burgersContext.js'

function App() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    
    const getData = async () => {
      await Serverdata()
      .then((resolve) => {
        setData(resolve.data)
      })
      .catch((reject) => {
        console.log(`Ошбика ${reject.status}`)
      })
    }
    getData();
  }, [])

  //console.log(data)

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.content}>
      <BurgersContext.Provider value={data}>
        <BurgerIngredients />
        <BurgerConstructor />
      </BurgersContext.Provider>
      </div>
    </div>
  );
}

export default App;