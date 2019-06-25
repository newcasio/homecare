import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Bookings from './Bookings';

function setup(specProps) {
  const defaultProps = {
    setMissionIdToDelete: () => {},
    setIsBookingDialogOpen: () => {},
  };

  const props = {
    ...defaultProps,
    ...specProps,
  };
  const enzymeWrapper = shallow(<Bookings {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Bookings', () => {
  it('should render self and have first div', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.first().is('div')).to.equal(true);
  });
});
