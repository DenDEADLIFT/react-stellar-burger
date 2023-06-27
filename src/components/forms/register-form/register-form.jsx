import styles from './register-form.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const [name, setName] = React.useState('')
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
                className={styles.form}
            >
                <h2 className={'text text_type_main-medium'}>Регистрация</h2>
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name={'name'}
                    type={'text'}
                    onIconClick={onIconClick}
                    placeholder={'Имя'}
                />
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
                    Зарегистрироваться
                </Button>
                <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>Уже зарегистрированы?
                    <Link className={styles.link} to="/login">&nbsp;Войти</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm