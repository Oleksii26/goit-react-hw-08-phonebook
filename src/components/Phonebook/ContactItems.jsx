import { useDispatch } from 'react-redux'
import css from './PhoneBook.module.css'
import { onRemove } from 'redux/contactSlice'

export const ContactItems = ({ name, phone, id }) => {
    const dispatch = useDispatch()

    return (
        <li key={id} className={css.item}>
            <div className={css.div}>{name}:</div> <div className={css.div}>{phone}</div> <button className={css.btnDelete} onClick={() => dispatch(onRemove({ id }))}>delete</button>
        </li>
    )
}
