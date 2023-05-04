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
                        <a href="#" className={`${styles.navigation_link} ${styles.navigation_link_active} pl-5 pr-5 pb-5 pt-5`}>
                            <BurgerIcon type="primary" />
                            <p className={"text text_type_main-default"}>Конструктор</p>
                        </a>
                    </div>
                    <div className={'pl-5 pr-5 pb-4 pt-4'}>
                        <a href="#" className={`${styles.navigation_link} pl-5 pr-5 pb-5 pt-5`}>
                            <ListIcon type="secondary" />
                            <p className={"text text_type_main-default"}>Лента заказов</p>
                        </a>
                    </div>
                </div>
                <Logo />
                <div className={'pl-5 pr-5 pb-4 pt-4'}>
                    <a href="#" className={`${styles.navigation_link} pl-5 pr-5 pb-5 pt-5`}>
                        <ProfileIcon type="secondary" />
                        <p className={"text text_type_main-default"}>Личный кабинет</p>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
