import { useDispatch, useSelector } from 'react-redux'
import { filterContacts } from 'redux/filterSlice'
import { getFilter } from 'redux/selectort'
import css from '../Phonebook/PhoneBook.module.css'

const Filter = () => {
    const dispatch = useDispatch()
    const contactFilter = useSelector(getFilter)

    return <input className={css.input}
        type="text" name="filter"
        value={contactFilter}
        onChange={(e) => dispatch(filterContacts(e.target.value))} 
        />
}
export default Filter