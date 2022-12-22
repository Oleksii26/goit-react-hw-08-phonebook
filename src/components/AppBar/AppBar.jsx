import { AuthNav } from 'components/AuthNav/AuthNav'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getIsLoggedIn } from 'redux/auth/authSelectors'
import css from './AppBar.module.css'


export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    return (<>
        <header className={css.nav}>
            <NavLink className={css.link} to='/phonebook'>Phone Book</NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
        <hr />
    </>
    )
}
