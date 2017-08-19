import React from 'react';
import { shallow } from 'enzyme';

import { App } from './index.js'

describe('<App />', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />, document.getElementById('app'));
    expect(component).toHaveLength(1);
  });
});
