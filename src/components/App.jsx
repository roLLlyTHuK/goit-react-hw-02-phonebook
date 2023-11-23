import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [state, setState] = useState({ contacts: initialContacts, filter: '' });

  const addContact = (contact) => {
    setState((prevState) => ({ ...prevState, contacts: [...prevState.contacts, contact] }));
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setState((prevState) => ({ ...prevState, filter: value }));
  };

  const deleteContact = (id) => {
    setState((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  const filteredContacts = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={state.contacts} addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={state.filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};


