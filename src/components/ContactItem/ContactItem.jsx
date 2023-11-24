import React from 'react';
import { ListItem, Button, Span } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <ListItem>
      <Span>{contact.name}: </Span>
      {contact.number}
      <Button onClick={handleDelete}>Delete</Button>
    </ListItem>
  );
};



