import styles from './forgot-password-form.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { passwordFoggot } from '../../../services/actions/password-actions'

const ForgotPasswordForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('')

    const forgotPassword = (e) => {
        e.preventDefault();
        navigate('/reset-password', { replace: true });
        dispatch(passwordFoggot(email))
    }

    return (
        <div
        >
            <form
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
                    htmlType="button"
                    onClick={forgotPassword}
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