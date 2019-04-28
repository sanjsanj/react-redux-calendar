import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { App } from ".";

describe("App", () => {
  it("should match snapshot", () => {
    const props = { showReminderModal: false };
    const wrapper = shallow(<App {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
