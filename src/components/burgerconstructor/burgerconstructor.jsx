import styles from "./burgerconstructor.module.css";

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
    return (
        <burger_constructor className={styles.burger_constructor} />
    );
}

export default BurgerConstructor;