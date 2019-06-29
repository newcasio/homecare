import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import App from "./App";

import Bookings from "./components/Bookings";
import data from "./public/data.js";

function setup(specProps) {
  const defaultProps = {};

  const props = {
    ...defaultProps,
    ...specProps
  };
  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("App tests", () => {
  it("should render self and has first is a div element", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.first().is("div")).to.equal(true);
  });

  it("should contain the bookings component", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.contains(<Bookings bookings={data} />)).to.equal(true);
  });
});
