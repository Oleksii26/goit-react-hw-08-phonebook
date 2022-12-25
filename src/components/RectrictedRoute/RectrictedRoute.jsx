import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsLoggedIn } from "redux/auth/authSelectors"

export const RectrictedRoute = ({ children }) => {
    const isLoggedin = useSelector(getIsLoggedIn)
    if (isLoggedin) {
        return <Navigate to='/phonebook' />
    }
    return children
}
