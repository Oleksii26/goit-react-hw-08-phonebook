import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { Loyout } from "./Loyout/Loyout";
import { FormRegistration } from "./FormRegistration/FormRegistration";
import { AppBar } from './AppBar/AppBar';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "redux/auth/authOperation";
import { HomePage } from "./HomePage/HomePage";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RectrictedRoute } from "./RectrictedRoute/RectrictedRoute";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return (<>
    <AppBar />
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path="/phonebook" element={<PrivateRoute><Loyout /></PrivateRoute>} />
      <Route path="/register" element={<RectrictedRoute><FormRegistration /></RectrictedRoute>} />
      <Route path="/login" element={<RectrictedRoute><LoginPage /></RectrictedRoute>} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  </>

  )
}
