import { calendarInitialState, calendar } from ".";

import { TOGGLE_REMINDER_MODAL } from "../../constants";

describe("calendar reducer", () => {
  it("should return the initial state when instantiated", () => {
    expect(calendar(undefined, {})).toEqual(calendarInitialState);
  });

  it("should handle the toggle reminder modal action", () => {
    const expectedState = {
      ...calendarInitialState,
      showReminderModal: !calendarInitialState.showReminderModal,
    };

    expect(calendar(undefined, { type: TOGGLE_REMINDER_MODAL })).toEqual(
      expectedState
    );
  });
});
