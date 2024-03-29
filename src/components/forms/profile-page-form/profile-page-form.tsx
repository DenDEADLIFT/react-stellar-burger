import styles from './profile_page_form.module.css'
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, FormEvent, MouseEvent } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from "../../types/hooks";
import { userUpdate } from '../../../services/actions/user-actions'
import { TUser } from '../../types/user'

const ProfilePageForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name, email } = useSelector((state) => state.user.user || {})
    const [userName, setUserName] = useState<string | undefined>(name)
    const [userEmail, setUserEmail] = useState<string | undefined>(email)
    const [password, setPassword] = useState<string>('')

    const userData: TUser = {
        email: userEmail,
        name: userName,
        password: password,
    }

    const isChanged =
        userName !== '' ||
        userEmail !== '' ||
        password;

    const userSave = (e: FormEvent<HTMLFormElement>) => {
        dispatch(userUpdate(userData))
        e.preventDefault();
        navigate('/profile', { replace: true });
    }

    const Cancel = (e: MouseEvent) => {
        e.preventDefault();
        setUserName('')
        setUserEmail('')
    }

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
                    value={userName || ''}
                    name={'name'}
                    type={'text'}
                    placeholder={'Имя'}
                    icon="EditIcon"
                />
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setUserEmail(e.target.value)}
                    value={userEmail || ''}
                    name={'email'}
                    placeholder={'Логин'}
                    icon="EditIcon"
                />
                <PasswordInput
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    placeholder={'Пароль'}
                    extraClass="mb-2"
                />

                {isChanged && <div className={styles.buttons_container}>
                    <NavLink
                        to='/register'
                        className={`text text_type_main-default ${styles.link}`}
                        type="secondary"
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