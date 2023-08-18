import styles from './profile-page.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from '../types/hooks';
import { useNavigate } from "react-router-dom";
import { onLogout } from '../../services/actions/user-actions'

const activeLink = ({ isActive }: {isActive: boolean}) => ({ color: isActive ? '#F2F2F3' : '#8585AD' });

const ProfilePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = (): void => {
        dispatch(onLogout());
        navigate("/login", { replace: true });
    }

    return (
        <nav className={`text text_color_primary text_type_main-medium ${styles.links_box}`}>
            <NavLink
                style={activeLink}
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
                onClick={logout}
                to="/"
            >Выход</NavLink>
            <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>
                В этом разделе вы можетеизменить свои персональные данные
            </p>
        </nav>
    )
}

export default ProfilePage