
import css from '../Phonebook/PhoneBook.module.css'


export const AppBar = () => {
    return (
        <form className={css.form} action="">
            <label className={css.label} htmlFor="">Your Name
                <input type="text" />
            </label>
            <label className={css.label} htmlFor="">Your Email
                <input type="text" />
            </label>
            <button className={css.btn}>Send</button>
        </form>
    )
}
