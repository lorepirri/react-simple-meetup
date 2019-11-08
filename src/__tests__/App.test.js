import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render number of events textbox', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
});