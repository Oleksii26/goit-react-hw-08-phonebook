import { useDispatch } from 'react-redux'
import { deleteContacts } from 'redux/operations'
import css from '../Phonebook/PhoneBook.module.css'

export const ContactItems = ({ name, number, id }) => {
    const dispatch = useDispatch()
    return (
        <li key={id} className={css.item}>
            <div className={css.div}>{ name}:</div> <div className={css.div}>{ number}</div> <button className={css.btnDelete} onClick={() => dispatch(deleteContacts(id))}>delete</button>
        </li>
    )
}
