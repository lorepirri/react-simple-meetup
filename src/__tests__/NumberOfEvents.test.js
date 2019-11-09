import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });    
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(numberOfEvents);
  });
  test('change state when text input changes', () => {
    const eventObject = { target: { value: '10' }};
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10');
  });
});