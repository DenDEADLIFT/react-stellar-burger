import styles from './profile-page.module.css'
import { NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) => ({ color: isActive ? '#F2F2F3' : '#8585AD' });

const ProfilePage = () => {

    return (
        <nav className={`text text_color_primary text_type_main-medium ${styles.links_box}`}>
            <NavLink
                style={activeLink}
                exact={true}
                className={styles.link}
                to="/profile"
            >Профиль</NavLink>
            <NavLink
                style={activeLink}
                className={styles.link}
                to="/profile/orders"
            >История заказов</NavLink>
            <NavLink
                style={activeLink}
                className={styles.link}
                to="/"
            >Выход</NavLink>
            <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>
                В этом разделе вы можетеизменить свои персональные данные
            </p>
        </nav>
    )
}

export default ProfilePage