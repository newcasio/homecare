import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import Bookings from "./Bookings";

// function setup(specProps) {
//   const defaultProps = {
//     setMissionIdToDelete: () => {},
//     setIsBookingDialogOpen: () => {}
//   };

//   const props = {
//     ...defaultProps,
//     ...specProps
//   };
//   const enzymeWrapper = shallow(<Bookings {...props} />);

//   return {
//     props,
//     enzymeWrapper
//   };
// }

// describe("Bookings", () => {
//   it("should render self and have first div", () => {
//     const { enzymeWrapper } = setup();
//     expect(enzymeWrapper.first().is("div")).to.equal(true);
//   });
// });

let data = {
  upcoming: [
    {
      id: "1",
      name: "Sherry Websites Illustration Types",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "cancelled"
    }
  ],
  requests: [
    {
      id: "7",
      name: "Kent Brockman",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "pending"
    }
  ],
  complete: [
    {
      id: "9",
      name: "Hans Moleman",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "complete"
    }
  ]
};

describe("Bookings", () => {
  it("should do what i want", () => {
    const wrapper = shallow(<Bookings bookings={data} />);
    expect(wrapper.contains(<h1>hello</h1>)).to.equal(true);
  });
});
