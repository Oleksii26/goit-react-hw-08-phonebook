import { useDispatch, useSelector } from 'react-redux'
import { authOperations } from 'redux/auth/authOperation'
import { getIsLoggedIn, getUserName } from 'redux/auth/authSelectors'
import css from './UserMenu.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(getUserName)
    const log = useSelector(getIsLoggedIn)

    return (
        <div>
            <p className={css.text}>Welcome, <span className={css.name}>{user}</span></p>
            <button onClick={() => dispatch(authOperations.logOut())}>Logout</button>
        </div>
    )
}
