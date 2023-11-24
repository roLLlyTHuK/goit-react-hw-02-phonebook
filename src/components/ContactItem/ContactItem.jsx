import { ListItem, Button, Span } from './ContactItem.styled';

export const ContactItem = (props) =>{
  handleDelete = () => {
    const { contact, onDelete } = this.props;
    onDelete(contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <ListItem >
        <Span>{contact.name}: </Span>{contact.number}<Button onClick={this.handleDelete}>Delete</Button>
      </ListItem>
    );
  }
}


