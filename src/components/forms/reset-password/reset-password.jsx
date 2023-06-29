import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {passwordReset} from '../../../services/actions/password-actions'

const ResetPasswordForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = React.useState('')
    const [password, setPassword] = React.useState('')

    const inputRef = React.useRef(null)

    const resetPassword = (e) => {
        e.preventDefault();
        dispatch(passwordReset({ password, token }))
        navigate('/login', { replace: true });
    }

    return (
        <div>
            <form
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
                    ref={inputRef}
                />
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setToken(e.target.value)}
                    value={token}
                    name={'code'}
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    ref={inputRef}
                />
                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
                    htmlType="button"
                    onClick={resetPassword}
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