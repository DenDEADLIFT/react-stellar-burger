import styles from './login-form.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [email, setEmail] = React.useState('')
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
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    type={'email'}
                    onIconClick={onIconClick}
                    placeholder={'E-mail'}
                />
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
                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
                    htmlType="button"
                >
                    Войти
                </Button>
                <p className={`mb-4 text text_color_inactive text_type_main-default ${styles.text}`}>Вы — новый пользователь? &nbsp;
                    <span>
                        <Link to='/register' className={`text text_type_main-default ${styles.link}`}>
                            Зарегистрироваться
                        </Link>
                    </span>
                </p>
                <p className={`text text_color_inactive text_type_main-default ${styles.text}`}>Забыли пароль? &nbsp;
                    <span>
                        <Link to='/forgot-password' className={`text text_type_main-default ${styles.link}`}>
                            Восстановить пароль
                        </Link>
                    </span>
                </p>
            </form >
        </div>
    )
}

export default LoginForm