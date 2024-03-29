import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from '../../types/hooks';
import { Link } from 'react-router-dom';
import { passwordReset } from '../../../services/actions/password-actions'

const ResetPasswordForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const resetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(passwordReset({ password, token }))
        navigate('/login', { replace: true });
    }

    return (
        <div>
            <form
                onSubmit={resetPassword}
                name='login'
                className={`${styles.form}`}
            >
                <h3 className={`mb-6 text text_type_main-medium ${styles.text}`} >Восстановление пароля</h3>
                <PasswordInput
                    onClick={e => setPassword('')}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    placeholder={'Пароль'}
                    extraClass="mb-2"
                />
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setToken(e.target.value)}
                    value={token}
                    name={'code'}
                    type={'text'}
                    placeholder={'Введите код из письма'}
                />
                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
                    htmlType="submit"
                >
                    Сохранить
                </Button>
                <p className={`text text_color_inactive text_type_main-default ${styles.text}`}>Вспомнили пароль? &nbsp;
                    <span>
                        <Link className={styles.link} to="/login">&nbsp;Войти</Link>
                    </span>
                </p>
            </form >
        </div>
    )
}

export default ResetPasswordForm