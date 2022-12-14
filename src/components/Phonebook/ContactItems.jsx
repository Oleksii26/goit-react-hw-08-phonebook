import { useDispatch } from 'react-redux'
import css from './PhoneBook.module.css'
import { onRemove } from 'redux/contactSlice'

export const ContactItems = ({ name, number, id }) => {
    const dispatch = useDispatch()
    return (
        <li key={id} className={css.item}>
            {name}: {number} <button className={css.btnDelete} onClick={() => dispatch(onRemove({ id }))}>delete</button>
        </li>
    )
}
