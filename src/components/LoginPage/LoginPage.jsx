
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth/authOperation'
import css from '../Phonebook/PhoneBook.module.css'


export const LoginPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value)
            case 'password':
                return setPassword(value)
            default:
                return
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(authOperations.logIn({ email, password }))
        setEmail('')
        setPassword('')
    }

    return (<>
        <h3>Login Page</h3>
        <form onSubmit={handleSubmit} className={css.form} action="">
            <label className={css.label}
                htmlFor="">Your Email
                <input type="text"
                    onChange={handleChange}
                    name='email'
                    value={email} />
            </label>
            <label className={css.label}
                htmlFor="">Your Password
                <input type="password"
                    onChange={handleChange}
                    name='password'
                    value={password} />
            </label>
            <button type='submit' className={css.btn}>Send</button>
        </form>
    </>

    )
}
