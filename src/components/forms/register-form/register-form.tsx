import styles from './register-form.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from '../../types/hooks';
import { onRegister } from '../../../services/actions/user-actions'

const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const register = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(onRegister({ email, password, name }))
        navigate('/login', { replace: true });
    }

    return (
        <div>
            <form
                onSubmit={register}
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
                    placeholder={'Имя'}
                />
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    type={'email'}
                    placeholder={'E-mail'}
                />
                <PasswordInput
                    onClick={e => setPassword('')}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name={'password'}
                    placeholder={'Пароль'}
                    extraClass="mb-2"
                />

                <Button
                    type="primary"
                    size="large"
                    extraClass={`mb-20`}
                    htmlType="submit"
                >
                    Зарегистрироваться
                </Button>
            </form>
            <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>Уже зарегистрированы?
                <Link className={styles.link} to="/login">&nbsp;Войти</Link>
            </p>
        </div>
    )
}

export default RegisterForm