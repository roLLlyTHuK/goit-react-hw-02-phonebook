import { ContactItem } from '../ContactItem/ContactItem.jsx'
import styles from './ContactList.module.css'

export const ContactList = ({ contacts, onDelete }) => (
    <ul className={ styles.list}>
    {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ul>
);