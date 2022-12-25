import { NavLink } from "react-router-dom"
import css from '../AppBar/AppBar.module.css'

export const AuthNav = () => {
    return (<div>
        <NavLink className={css.link} style={{ marginRight: '20px' }} to='/register'>Registration</NavLink>
        <NavLink className={css.link} to='/login'>LogIn</NavLink>
    </div>
    )
}
