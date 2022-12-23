import css from './PhoneBook.module.css'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
// import { addContactsInBack/* , fetchContacts */ } from 'redux/operations';
import { authOperations } from 'redux/auth/authOperation';

const PhoneBook = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch()
    const addTask = (e) => {
        e.preventDefault()
        // dispatch(addContactsInBack({ name, number }))
        dispatch(authOperations.addContact({ name, number }))
        setName('')
        setNumber('')     
     
    }

    const nameInputId = shortid.generate()
    const numberInputId = shortid.generate()

    const handleInputChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                setName(value)
                break

            case 'number':
                setNumber(value)
                break

            default:
                return
        }
    }

    return <>
    <h3>My Contacts</h3>
        <form className={css.form} onSubmit={addTask}>
            <label className={css.label} htmlFor={nameInputId}>
                Name
                <input type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required id={nameInputId}
                    value={name}
                    onChange={handleInputChange}
                />
            </label>
            <label className={css.label} htmlFor={numberInputId}>
                Number
                <input type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required id={numberInputId}
                    value={number}
                    onChange={handleInputChange}
                />
            </label>
            <button className={css.btn} type="submit">Add contact</button>
        </form>
    </>
}
export default PhoneBook
