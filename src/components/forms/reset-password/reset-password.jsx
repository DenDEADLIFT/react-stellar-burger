import styles from './reset-password.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { Link } from 'react-router-dom';

const ResetPasswordForm = () => {

    const [code, setCode] = React.useState('')
    const [password, setPassword] = React.useState('')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div>
            <form
                name='login'
                className={`${styles.form}`}
            >
                <h3 className={`mb-6 text text_type_main-medium ${styles.text}`} >Вход</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <PasswordInput
                        onClick={e => setPassword('')}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        placeholder={'Пароль'}
                        extraClass="mb-2"
                    />
                </div>
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setCode(e.target.value)}
                    value={code}
                    name={'code'}
                    type={'text'}
                    onIconClick={onIconClick}
                    placeholder={'Введите код из письма'}
                />
                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
                    htmlType="button"
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