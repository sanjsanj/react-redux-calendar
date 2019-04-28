import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CalendarDayBox from ".";

describe("CalendarDayBox", () => {
  describe("when passed no day prop", () => {
    const wrapper = shallow(<CalendarDayBox day={undefined} />);

    it("should not have any content", () => {
      expect(wrapper.text()).toEqual("");
    });

    it("should match snapshot", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe("when passed a day prop", () => {
    const wrapper = shallow(
      <CalendarDayBox day={{ dayOfMonth: 28, reminders: [] }} />
    );

    it("should have day of month", () => {
      expect(wrapper.text()).toEqual("28");
    });

    it("should show reminders for that day", () => {});

    it("should match snapshot", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
