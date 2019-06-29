import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import TaskTitle from "./TaskTitle";

const testData = "Ralph Wiggum";

describe("Task title test", () => {
  it("should return the correct name", () => {
    const wrapper = shallow(<TaskTitle titleContent={testData} />);
    expect(wrapper.text()).to.equal("Ralph Wiggum");
  });
});
