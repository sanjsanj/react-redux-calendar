import { remindersInitialState, reminders } from ".";

import { ADD_REMINDER } from "../../constants";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "00000000-0000-0000-0000-000000000000"),
}));

describe("reminders reducer", () => {
  it("should return the initial state when instantiated", () => {
    expect(reminders(undefined, {})).toEqual(remindersInitialState);
  });

  it("should handle the add reminder action", () => {
    const mockUuid = "00000000-0000-0000-0000-000000000000";

    const reminder = {
      dateTime: Date.now(),
      text: "Buy milk.",
      color: "red",
    };

    const action = { type: ADD_REMINDER, reminder };

    const expectedState = [
      ...remindersInitialState,
      { ...reminder, id: mockUuid },
    ];

    expect(reminders(undefined, action)).toEqual(expectedState);
  });
});
