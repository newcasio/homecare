import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import Status from "./Status";
import Button from "@material-ui/core/Button";
import { invoke } from "q";

const testData = { status: "pending" };
const testData1 = { status: "cancelled" };
const testData2 = { id: 4, status: "complete" };
const testFunction = () => {
  clickRegister = true;
};

let clickRegister = false;

describe("Status test", () => {
  it("should show button if status not cancelled", () => {
    const wrapper = shallow(
      <Status event={testData} getIdToRemove={testFunction} />
    );
    expect(wrapper.find(Button)).to.have.lengthOf(1);
  });

  it("should show text if status cancelled", () => {
    const wrapper = shallow(
      <Status event={testData1} getIdToRemove={testFunction} />
    );
    expect(wrapper.text()).to.equal("Cancelled by member");
  });

  it("should call getIdToRemove props when remove button is pressed", () => {
    const wrapper = shallow(
      <Status event={testData2} getIdToRemove={testFunction} />
    );
    wrapper.find(Button).simulate("click");
    expect(clickRegister).to.equal(true);
  });
});
