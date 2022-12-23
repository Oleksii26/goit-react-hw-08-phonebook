import { ContactItems } from './ContactItems'
import css from '../Phonebook/PhoneBook.module.css'
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectort';
// import { getContact } from 'redux/auth/authSelectors';
// import { authOperations } from 'redux/auth/authOperation';

const ContactList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)
    const contacts = useSelector(getContacts)
    // const contact = useSelector(getContact)


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    // useEffect(() => {
    //     dispatch(authOperations.fetchContact())
    // }, [dispatch])


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


