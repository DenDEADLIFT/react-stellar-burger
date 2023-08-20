import styles from './not-found.module.css'
import { NavLink } from 'react-router-dom'

const NotFound404 = () => {

    return (
        <>
            <p>
                NotFound404
                <NavLink to='/' className={styles.not_found_link}>Перейти на главную страницу</NavLink>
            </p>
        </>
    );
}

export default NotFound404;