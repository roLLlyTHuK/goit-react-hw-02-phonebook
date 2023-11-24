import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Label } from './ContactForm.styled'

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit({ id: nanoid(), name, number });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input type="text" name="name" value={name} onChange={(e) => this.setState({ name: e.target.value })} required />
        <Label>Number</Label>
        <Input type="tel" name="number" value={number} onChange={(e) => this.setState({ number: e.target.value })} required />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}


