import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import ShowTasks from "./ShowTasks";
import TaskTitle from "./TaskTitle";

const testData = [{ name: "Test data for ShowTasks test" }];

describe("Individual Tasks test", () => {
  it("should call TaskTitle component", () => {
    const wrapper = shallow(<ShowTasks data={testData} />);
    expect(wrapper.find(TaskTitle)).to.have.lengthOf(1);
  });
});
