import { TOGGLE_REMINDER_MODAL, ADD_REMINDER } from "../constants";

import { toggleReminderModal, addReminder } from ".";

describe("actions", () => {
  it("should create an action to toggle the reminder modal", () => {
    const expectedAction = { type: TOGGLE_REMINDER_MODAL };

    expect(toggleReminderModal()).toEqual(expectedAction);
  });

  it("should create an action to add a reminder", () => {
    const reminder = {
      text: "Reminder text.",
      dateTime: Date.now(),
      color: "green",
    };
    const expectedAction = { type: ADD_REMINDER, reminder };

    expect(addReminder(reminder)).toEqual(expectedAction);
  });
});
