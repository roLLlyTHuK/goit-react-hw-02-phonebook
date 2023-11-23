import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css'
// Компонент форми додавання контактів
export const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameExists = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (isNameExists) {
      alert(`Contact with name "${name}" already exists. Please choose a different name.`);
    } else {
      addContact({ id: nanoid(), name, number });
      setName('');
      setNumber('');
    }
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>Name
               <input className={ styles.input} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required  />
          </label>
         
          <label className={styles.label}>Number
              <input className={styles.input} type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required  /></label>
          <button className={ styles.button} type="submit">Add Contact</button>
    </form>
  );
};