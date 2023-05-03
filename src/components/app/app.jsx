import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { data } from "../../utils/data";

function App() {
  return (
    <div className={styles.app}>
          <AppHeader />
    </div>
  );
}

export default App;
