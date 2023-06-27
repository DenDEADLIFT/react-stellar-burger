import styles from './profile_page_form.module.css'
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";

const ProfilePageForm = () => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
            <form
                className={styles.form}
            >
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name={'name'}
                    type={'text'}
                    placeholder={'Имя'}
                    icon="EditIcon"
                />
                <Input
                    size={'default'}
                    extraClass="ml-1"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'email'}
                    type={'email'}
                    placeholder={'Логин'}
                    icon="EditIcon"
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <PasswordInput
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name={'password'}
                        placeholder={'Пароль'}
                        extraClass="mb-2"
                        icon="EditIcon"
                    />
                </div>
            </form>
    )
}

export default ProfilePageForm