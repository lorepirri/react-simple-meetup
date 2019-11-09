import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import { mockEvents } from '../mock-events';

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

describe('<App /> integration', () => {
  let AppWrapper;
  afterAll(() => {
    AppWrapper.unmount();
  });

  test('get list of events after user selects a city', () => {
    AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
  });

  test('change state after get list of events', async () => {
    AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    AppWrapper = mount(<App />);
    AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    expect(AppWrapper.find('.Event')).toHaveLength(4);
  });
});