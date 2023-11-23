import styles from './ContactItem.module.css'
// Компонент елементу списку контактів
export const ContactItem = ({ contact, onDelete }) => (
    <li className={ styles.item} key={contact.id}>
        <div className={styles.name }>{contact.name}</div>
        <div>{contact.number}</div>
        <button className={ styles.button} onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);