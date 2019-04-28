import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import App from ".";

describe("App", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
