import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  
  test('An event element is collapsed by default.', ({ given, when, then }) => {      
    let EventListWrapper;    
    given('that the user has selected a city', () => {
      EventListWrapper = mount(<EventList events={mockEvents.events}/>);
    });

    when('is presented with a list of events', () => {
      // EventListWrapper.update();
      expect(EventListWrapper.find(Event)).toHaveLength(mockEvents.events.length);
    });

    then('the events have the details panel collapsed', () => {
      // EventListWrapper.update();
      expect(EventListWrapper.find('.Event .details-panel')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {   
    let EventListWrapper;    
    given('that the user is presented with a list of events', () => {
      EventListWrapper = mount(<EventList events={mockEvents.events}/>);
      expect(EventListWrapper.find(Event)).toHaveLength(mockEvents.events.length);
    });

    when('the user click on an event, or on a expand button', () => {
      // click on the first Details button
      EventListWrapper.find('.Event .details').at(0).simulate('click');
    });

    then('the event\'s details panel expands', () => {
      // EventListWrapper.update();
      expect(EventListWrapper.find('.Event .details-panel')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => { 
    let EventListWrapper;    
    given('that the event\'s details panel is expanded', () => {
      EventListWrapper = mount(<EventList events={mockEvents.events}/>);
      expect(EventListWrapper.find(Event)).toHaveLength(mockEvents.events.length);
      // // click on the first Details button
      EventListWrapper.update();
      EventListWrapper.find('.Event .details').at(0).simulate('click');
    });

    when('the user click outside of the event\'s details panel, or on a collapse button', () => {
      // click on the first Details button
      EventListWrapper.find('.Event .details').at(0).simulate('click');
    });

    then('the event\'s details panel collapses', () => {
      expect(EventListWrapper.find('.Event .details-panel')).toHaveLength(0);
    });
  });
});