import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/add", (name, tel) => {
  return {
    payload: {
      name,
      tel,
      id: nanoid(),
    },
  };
});
const deleteContact = createAction("contacts/delete");
const filter = createAction("contacts/filter");

const contactsActions = { addContact, deleteContact, filter };
export default contactsActions;
