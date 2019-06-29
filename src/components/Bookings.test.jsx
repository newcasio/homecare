import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import Tab from "@material-ui/core/Tab";

import Bookings from "./Bookings";
import data from "../public/minData.js";

function setup(specProps) {
  const defaultProps = {
    setMissionIdToDelete: () => {},
    setIsBookingDialogOpen: () => {}
  };

  const props = {
    ...defaultProps,
    ...specProps
  };
  const enzymeWrapper = shallow(<Bookings bookings={data} />);
  // const enzymeWrapper = shallow(<Bookings {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("Bookings", () => {
  it("should render self and have first div", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.first().is("div")).to.equal(true);
  });

  it("should show 3 tab labels", () => {
    const wrapper = shallow(<Bookings bookings={data} />);
    expect(wrapper.find(Tab)).to.have.lengthOf(3);
  });
});
