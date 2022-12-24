import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { Loyout } from "./Loyout/Loyout";
import { FormRegistration } from "./FormRegistration/FormRegistration";
import { AppBar } from './AppBar/AppBar';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "redux/auth/authOperation";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return (<>
    <AppBar />
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/phonebook" element={<Loyout />} />
      <Route path="/register" element={<FormRegistration />} />
      <Route path="/LogIn" element={<LoginPage />} />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  </>

  )
}
