import { TOGGLE_REMINDER_MODAL } from "../../constants";

import { updateObject } from "../../helpers";

/** Reducer functions */
const toggleReminderModal = state =>
  updateObject(state, { showReminderModal: !state.showReminderModal });

/** initialState setup */
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

export const calendarInitialState = {
  selectedMonth: currentMonth,
  selectedYear: currentYear,
  showReminderModal: false,
};

/** Reducer */
export const calendar = (state = calendarInitialState, action) => {
  switch (action.type) {
    case TOGGLE_REMINDER_MODAL:
      return toggleReminderModal(state);

    default:
      return state;
  }
};
