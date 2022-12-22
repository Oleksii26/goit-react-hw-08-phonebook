import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from 'redux/auth/authOperation'
import css from './FormRegistration.module.css'

export const FormRegistration = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value)
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
        dispatch(authOperations.register({ name, email, password }))
        setName('')
        setEmail('')
        setPassword('')
    }

    return (<>
        <h3>Registrtation page</h3>
        <form className={css.form} action="" onSubmit={handleSubmit}>
            <label className={css.label} htmlFor="">Name
                <input className={css.input} type="text"
                    name='name'
                    value={name}
                    onChange={handleChange} />
            </label>
            <label className={css.label} htmlFor="">Email
                <input className={css.input} type="email"
                    name='email'
                    value={email}
                    onChange={handleChange} />
            </label>
            <label className={css.label} htmlFor="">Password
                <input className={css.input} type="password"
                    name='password'
                    value={password}
                    onChange={handleChange} />
            </label>
            <button className={css.button}>Submit</button>
        </form>
    </>



    )
}
