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
            <div>
                <NavLink className={css.link} to='/'>Home</NavLink>
                <NavLink className={css.link} to='/phonebook'>Phone Book</NavLink>
            </div>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
        <hr />
    </>
    )
}
