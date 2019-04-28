import { calendarInitialState, calendar } from ".";

describe("calendar reducer", () => {
  it("should return the initial state when instantiated", () => {
    expect(calendar(undefined, {})).toEqual(calendarInitialState);
  });
});
