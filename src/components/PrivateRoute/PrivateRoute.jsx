import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsLoggedIn } from 'redux/auth/authSelectors'


export const PrivateRoute = ({ children }) => {

    const isLoggedin = useSelector(getIsLoggedIn)
    if (!isLoggedin) {
        return <Navigate to='/LogIn' />
    }
    return children
}
