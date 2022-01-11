import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Container } from "./components/styled/Container.styled";

import { useSelector, useDispatch } from "react-redux";
import actions from "./redux/contacts/contacts-actions";

export default function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  function formSubmit({ name, tel }) {
    if (contacts.find((item) => item.name === name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    } else {
      dispatch(actions.addContact(name, tel));
    }
  }

  return (
    <Container>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter
      // value={filter} onChange={onFilterContacts}
      />

      <ContactList
        contacts={contacts}
        // onDeleteContact={onDeleteContact}
      />
    </Container>
  );
}
