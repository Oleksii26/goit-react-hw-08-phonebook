import { ContactItems } from './ContactItems'
import css from './PhoneBook.module.css'
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.contacts.filter)
    const contacts = useSelector(getContacts)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const getVisibleContacts = useMemo(() => {
        const normalizedContacts = filter.toLocaleLowerCase()
        return contacts.items.filter(({ name }) => name.toLocaleLowerCase().includes(normalizedContacts))
    }, [contacts, filter])

    if (contacts.length === 0) { return null }

    return (<> <br />
        {contacts.isLoading && <b>Loading tasks...</b>}
        {contacts.error && <b>{contacts.error}</b>}
        <ul className={css.list}> {getVisibleContacts.map(contact => <ContactItems key={contact.id} {...contact} />)}</ul>
    </>
    )
}
export default ContactList


