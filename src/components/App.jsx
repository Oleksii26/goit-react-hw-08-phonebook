import css from './App.module.css'
import { Routes, Route, NavLink } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Loyout } from "./Loyout/Loyout";
import { FormRegistration } from "./FormRegistration/FormRegistration";

export const App = () => {

  return (<>
    <header className={css.nav}>
      <nav >
        <NavLink className={css.link} style={{ marginRight: '20px' }} to='/'>Home</NavLink>
        <NavLink className={css.link} to='/phonebook'>Phone Book</NavLink>
      </nav>
      <div>
        <NavLink className={css.link} style={{ marginRight: '20px' }} to='/registration'>Registration</NavLink>
        <NavLink className={css.link} to='/LogIn'>LogIn</NavLink>
      </div>
    </header>
    <hr />
    <Routes>
      <Route index element={<AppBar />} />
      <Route path="/phonebook" element={<Loyout />} />
      <Route path="/registration" element={<FormRegistration />} />
      <Route path="/LogIn" element={<AppBar />} />
      {/* <PhoneBook />
        <Filter />
        <ContactList /> */}
    </Routes>
  </>

  )
}
