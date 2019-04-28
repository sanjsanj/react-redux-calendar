import { TOGGLE_REMINDER_MODAL } from "../constants";

import { toggleReminderModal } from ".";

describe("actions", () => {
  it("should create an action to toggle the reminder modal", () => {
    const expectedAction = { type: TOGGLE_REMINDER_MODAL };

    expect(toggleReminderModal()).toEqual(expectedAction);
  });
});
