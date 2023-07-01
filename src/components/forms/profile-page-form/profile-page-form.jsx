import styles from './profile_page_form.module.css'
import { PasswordInput, Input, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userUpdate } from '../../../services/actions/user-actions'

const ProfilePageForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name, email } = useSelector((state) => state.user.user)
    const [userName, setUserName] = useState(name)
    const [userEmail, setUserEmail] = useState(email)
    const [password, setPassword] = useState('')

    const userData = {
        email: userEmail,
        name: userName,
        password: password,
    }

    const isChanged =
        userName !== '' ||
        userEmail !== '' ||
        password;

    const userSave = (e) => {
        dispatch(userUpdate(userData))
        e.preventDefault();
        navigate('/profile', { replace: true });
    }

    const Cancel = (e) => {
        e.preventDefault();
        setUserName('')
        setUserEmail('')
    }
    console.log(userName)
    return (
        <div className={styles.form_container}>
            <form
                onSubmit={userSave}
                className={styles.form}
            >
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setUserName(e.target.value)}
                    value={userName}
                    name={'name'}
                    type={'text'}
                    placeholder={'Имя'}
                    icon="EditIcon"
                />
                <EmailInput
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setUserEmail(e.target.value)}
                    value={userEmail}
                    name={'email'}
                    type={'email'}
                    placeholder={'Логин'}
                    icon="EditIcon"
                />
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    placeholder={'Пароль'}
                    extraClass="mb-2"
                    type={'password'}
                />

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
                        htmlType="submit"
                        type="primary"
                        size="medium"
                    >
                        Сохранить
                    </Button>
                </div>}
            </form>
        </div>
    )
}

export default ProfilePageForm