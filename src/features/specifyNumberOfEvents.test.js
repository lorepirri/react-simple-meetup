import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
    let NumberOfEventsWrapper;
    given('that the user is selecting a city', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
    });

    when('the user has not specified a number of events', () => {
      expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    then('the default number of events shown in the results is thirtytwo', () => {
      expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('that the user is selecting a city', () => {
      AppWrapper = mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Munich' } });
    });

    when('the user specifies a number of events', () => {
      const eventObject = { target: { value: '10' }};
      AppWrapper.find('.numberOfEvents').simulate('change', eventObject);
    });

    then('the specified number is the number of events shown in the results', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(10);
    });
  });
});