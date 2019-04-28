import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { getDaysForMonth, styledComponentSelector } from "../../helpers";

import { Calendar } from ".";

describe("Calendar", () => {
  const props = {
    daysOfTheMonth: getDaysForMonth(2019, 3),
    toggleReminderModal: jest.fn(),
    selectedYear: 2019,
    monthName: "April",
  };

  const wrapper = shallow(<Calendar {...props} />);
  const button = wrapper.find(
    styledComponentSelector("btn-toggle-reminder-modal")
  );

  it("should display the selected month and year", () => {
    expect(wrapper.text().includes("April 2019")).toEqual(true);
  });

  it("should display the Add reminder button", () => {
    expect(button.text().includes("Add reminder")).toEqual(true);
  });

  it("should call the toggleReminderModal function when Add reminder button is clicked", () => {
    expect(props.toggleReminderModal.mock.calls.length).toEqual(0);
    button.simulate("click");
    expect(props.toggleReminderModal.mock.calls.length).toEqual(1);
  });

  it("should display correct number of calendar day boxes", () => {
    expect(wrapper.find("CalendarDayBox").length).toEqual(
      props.daysOfTheMonth.length
    );
  });

  it("should match snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
