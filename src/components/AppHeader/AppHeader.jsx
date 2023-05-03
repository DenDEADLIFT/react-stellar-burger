import styles from "./appheader.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <header className={styles.header}>
            <content className={styles.content}>
                <navigation_content_left className={styles.navigation_content_left}>
                    <navigation_content className={'pl-5 pr-5 pb-4 pt-4'}>
                        <a href="#" className={styles.navigation_link}>
                            <BurgerIcon />
                            <p className={"text text_type_main-default"}>Конструктор</p>
                        </a>
                    </navigation_content>
                    <navigation_content className={'pl-5 pr-5 pb-4 pt-4'}>
                        <a href="#" className={styles.navigation_link}>
                            <ListIcon />
                            <p className={"text text_type_main-default"}>Лента заказов</p>
                        </a>
                    </navigation_content>
                </navigation_content_left>
                <Logo />
                <navigation_content className={'pl-5 pr-5 pb-4 pt-4'}>
                    <a href="#" className={styles.navigation_link}>
                        <ProfileIcon />
                        <p className={"text text_type_main-default"}>Личный кабинет</p>
                    </a>
                </navigation_content>
            </content>
        </header>
    );
}

export default AppHeader;
