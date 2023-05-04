import styles from "./appheader.module.css";

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.navigation_content_left}>
                    <div className={'pl-5 pr-5 pb-4 pt-4'}>
                        <a href="#" className={styles.navigation_link}>
                            <BurgerIcon />
                            <p className={"text text_type_main-default"}>Конструктор</p>
                        </a>
                    </div>
                    <div className={'pl-5 pr-5 pb-4 pt-4'}>
                        <a href="#" className={styles.navigation_link}>
                            <ListIcon />
                            <p className={"text text_type_main-default"}>Лента заказов</p>
                        </a>
                    </div>
                </div>
                <Logo />
                <div className={'pl-5 pr-5 pb-4 pt-4'}>
                    <a href="#" className={styles.navigation_link}>
                        <ProfileIcon />
                        <p className={"text text_type_main-default"}>Личный кабинет</p>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
