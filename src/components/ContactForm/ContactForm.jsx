import { Form, Input, Button , Label} from './ContactForm.styled'

export const ContactForm = ({ name, number, onChange, onChangeNumber, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input type="text" name="name" value={name} onChange={onChange} required />
      <Label>Number</Label>
      <Input type="tel" name="number" value={number} onChange={onChangeNumber} required />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}


