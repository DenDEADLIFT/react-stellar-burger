import styles from './profile-page.module.css'
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

const setActiveLink = ({ isActive }) => isActive ? `${styles.link} text_color_primary` : `${styles.link} text_color_inactive`;

const ProfilePage = () => {

    const location = useLocation()

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div className={styles.content_box}>
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
            <form
                className={styles.form}
            >
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name={'name'}
                    type={'text'}
                    placeholder={'Имя'}
                    icon="EditIcon"
                />
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    type={'email'}
                    placeholder={'Логин'}
                    icon="EditIcon"
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <PasswordInput
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        placeholder={'Пароль'}
                        extraClass="mb-2"
                        icon="EditIcon"
                    />
                </div>
            </form>
        </div>
    )
}

export default ProfilePage