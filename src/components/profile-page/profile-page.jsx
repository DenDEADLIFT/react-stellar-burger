import styles from './profile-page.module.css'
import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

const setActiveLink = ({ isActive }) => isActive ? `${styles.link} text_color_primary` : `${styles.link} text_color_inactive`;

const ProfilePage = () => {

    const location = useLocation()

    return (
            <div className={`text text_color_primary text_type_main-medium ${styles.links_box}`}>
                <NavLink
                    className={location.pathname === '/profile' ? setActiveLink : styles.link}
                    to="/profile"
                    replace={true}
                >Профиль</NavLink>
                <NavLink
                    className={location.pathname === '/profile/orders' ? setActiveLink : styles.link}
                    to="/profile/orders"
                    replace={true}
                >История заказов</NavLink>
                <NavLink
                    className={styles.link}
                    to="/"
                >Выход</NavLink>
                <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>
                    В этом разделе вы можетеизменить свои персональные данные
                </p>
            </div>
    )
}

export default ProfilePage