import { TOGGLE_REMINDER_MODAL, ADD_REMINDER } from "../constants";

export const toggleReminderModal = () => ({ type: TOGGLE_REMINDER_MODAL });

export const addReminder = reminder => ({ type: ADD_REMINDER, reminder });
