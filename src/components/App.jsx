import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./LoginPage/LoginPage";
import { Loyout } from "./Loyout/Loyout";
import { FormRegistration } from "./FormRegistration/FormRegistration";
import { AppBar } from './AppBar/AppBar';

export const App = () => {

  return (<>
    <AppBar />
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path="/phonebook" element={<Loyout />} />
      <Route path="/register" element={<FormRegistration />} />
      <Route path="/LogIn" element={<LoginPage />} />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  </>

  )
}
