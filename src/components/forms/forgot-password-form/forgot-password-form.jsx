import styles from './forgot-password-form.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { passwordForgot } from '../../../services/actions/password-actions'

const ForgotPasswordForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('')

    const forgotPassword = (e) => {
        e.preventDefault();
        navigate('/reset-password', { state: 'forgot' });
        dispatch(passwordForgot(email))
    }

    return (
        <div
        >
            <form
                onSubmit={forgotPassword}
                className={styles.form}
            >
                <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                <EmailInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    type={'email'}
                    size={'default'}
                    extraClass="ml-1"
                    placeholder={'Укажите e-mail'}
                />
                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
                    htmlType="submit"
                >
                    Восстановить
                </Button>
                <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>Вспомнили пароль?
                    <Link className={styles.link} to="/login">&nbsp;Войти</Link>
                </p>
            </form>
        </div>
    );
}

export default ForgotPasswordForm