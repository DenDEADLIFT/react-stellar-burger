import styles from "./app.module.css";
import AppHeader from "../appheader/appheader";
import BurgerIngredients from "../burgeringredients/burgeringredients";
import BurgerConstructor from "../burgerconstructor/burgerconstructor";
import { serverdata } from '../../utils/datafromserver.js';
import React from "react";
import { BurgersContext } from '../../services/burgersContext.js'

function App() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      await serverdata()
      .then((resolve) => {
        setData(resolve.data)
      })
      .catch((reject) => {
        console.log(`Ошбика ${reject.status}`)
      })
    }
    getData();
  }, [])

  return (
    
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.content}>
      <BurgersContext.Provider value={data}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </BurgersContext.Provider>
      </div>
    </div>
  );
}

export default App;