import styles from './forgot-password-form.module.css'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
    const [email, setEmail] = React.useState('')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div
        >
            <form
                className={styles.form}
            >
                <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                <Input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    type={'email'}
                    onIconClick={onIconClick}
                    size={'default'}
                    extraClass="ml-1"
                    placeholder={'Укажите e-mail'}
                />
                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
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