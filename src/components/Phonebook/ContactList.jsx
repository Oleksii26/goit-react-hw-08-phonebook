import { ContactItems } from './ContactItems'
import css from './PhoneBook.module.css'
import { useMemo } from "react";
import { useSelector } from "react-redux";

const ContactList = () => {

    const contacts = useSelector(state => state.contacts.contacts)
    const filter = useSelector(state => state.contacts.filter)

    const getVisibleContacts = useMemo(() => {
        const normalizedContacts = filter.toLocaleLowerCase()
        return contacts.filter(({ name }) => name.toLocaleLowerCase().includes(normalizedContacts))
    }, [contacts, filter])

    if (contacts.length === 0) { return null }

    return (
        <ul className={css.list}> {getVisibleContacts.map(contact => <ContactItems key={contact.id} {...contact} />)}</ul>
    )

}
export default ContactList


