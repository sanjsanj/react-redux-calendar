import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { getDaysForMonth } from "../../helpers";

import { Calendar } from ".";

describe("Calendar", () => {
  const props = {
    daysOfTheMonth: getDaysForMonth(2019, 3),
    selectedYear: 2019,
    monthName: "April",
  };

  const wrapper = shallow(<Calendar {...props} />);

  it("should display the selected month and year", () => {
    expect(wrapper.text().includes("April 2019")).toEqual(true);
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
