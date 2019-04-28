import { v4 } from "uuid";

import { ADD_REMINDER } from "../../constants";

import { updateArray } from "../../helpers";

/** Reducer functions */
const addReminder = (state, { reminder }) =>
  updateArray(state, {
    dateTime: reminder.dateTime,
    color: reminder.color,
    text: reminder.text,
    id: v4(),
  });

/** initialState setup */
export const remindersInitialState = [];

/** Reducer */
export const reminders = (state = remindersInitialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return addReminder(state, action);

    default:
      return state;
  }
};
