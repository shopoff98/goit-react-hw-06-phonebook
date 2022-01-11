import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filter = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
