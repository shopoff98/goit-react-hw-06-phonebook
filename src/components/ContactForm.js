import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, Label } from "./styled/Common.styled";
import { Form } from "./styled/ContactForm.styled";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "tel":
        setTel(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, tel });
    setName("");
    setTel("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>

      <Label>
        Telephone
        <Input
          type="tel"
          name="tel"
          value={tel}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button mb={1} type="submit">
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
