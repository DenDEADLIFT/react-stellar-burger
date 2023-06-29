import styles from './profile_page_form.module.css'
import { PasswordInput, Input, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userUpdate } from '../../../services/actions/user-actions'

const ProfilePageForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState('')

    const userSave = (e) => {
        e.preventDefault();
        dispatch(userUpdate({ email, name, password }))
    }

    const Cancel = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
    }

    const isChanged =
        name !== '' ||
        email !== '' ||
        password;

    return (
        <div className={styles.form_container}>
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
                <EmailInput
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
                        type={'password'}
                    />
                </div>
            </form>
            {isChanged && <div className={styles.buttons_container}>
                <NavLink
                    to='/register'
                    className={`text text_type_main-default ${styles.link}`}
                    type="secondary"
                    size="medium"
                    onClick={Cancel}
                >
                    Отмена
                </NavLink>
                <Button
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={userSave}
                >
                    Сохранить
                </Button>
            </div>}
        </div>
    )
}

export default ProfilePageForm