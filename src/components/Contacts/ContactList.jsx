import { ContactItems } from './ContactItems'
import css from '../Phonebook/PhoneBook.module.css'
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectort';

const ContactList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)
    const contacts = useSelector(getContacts)
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const getVisibleContacts = useMemo(() => {
        const normalizedContacts = filter.toLowerCase()
        return contacts.items.filter(({ name }) => name.toLowerCase().includes(normalizedContacts))
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


