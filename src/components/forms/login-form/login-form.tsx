import styles from './login-form.module.css'
import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from '../../types/hooks';
import { onLogin } from '../../../services/actions/user-actions'

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(onLogin({ email, password }))
        navigate(-1);
    }

    return (
        <div>
            <form
                onSubmit={login}
                name='login'
                className={`${styles.form}`}
            >
                <h3 className={`mb-6 text text_type_main-medium ${styles.text}`} >Вход</h3>
                <EmailInput
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
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