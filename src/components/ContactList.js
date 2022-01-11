import { Button, ButtonWrapper } from "./styled/Common.styled";
import { ListContact } from "./styled/ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/contacts/contacts-actions";
import { getVisibleContacts } from "../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ListContact>
      {contacts.map(({ id, name, tel }) => {
        return (
          <li key={id}>
            {name}:{tel}
            <ButtonWrapper>
              <Button
                ml={3}
                type="button"
                onClick={() => dispatch(actions.deleteContact(id))}
              >
                Delete
              </Button>
            </ButtonWrapper>
          </li>
        );
      })}
    </ListContact>
  );
};

export default ContactList;
