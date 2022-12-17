import { useDispatch } from 'react-redux'
import { deleteContacts } from 'redux/operations'
import css from './PhoneBook.module.css'

export const ContactItems = ({ text = 0, name, number, id }) => {
    const dispatch = useDispatch()
    return (
        <li key={id} className={css.item}>
            <div className={css.div}>{text.name || name}:</div> <div className={css.div}>{text.number || number}</div> <button className={css.btnDelete} onClick={() => dispatch(deleteContacts(id))}>delete</button>
        </li>
    )
}
