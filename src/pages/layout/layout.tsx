import AppHeader from "../../components/app-header/app-header";
import styles from './layout.module.css'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className={styles.app}>
            <AppHeader />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout