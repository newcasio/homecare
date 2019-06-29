import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Bookings from './components/Bookings';
import App from './App';

function setup(specProps) {
  const defaultProps = {
  };

  const props = {
    ...defaultProps,
    ...specProps,
  };
  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('App', () => {
  it('should render self and has first Bookings', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.first().is(Bookings)).to.equal(true);
  });
});
