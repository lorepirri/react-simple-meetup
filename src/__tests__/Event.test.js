import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.setProps({
      event: {
        created: 1545395196000,
        duration: 7200000,
        id: "kpcqnqyzpbqb",
        name: "APX Pitch Tuesdays",
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1573574400000,
        local_date: "2019-11-12",
        local_time: "17:00",
        rsvp_close_offset: "PT24H",
        updated: 1545395196000,
        utc_offset: 3600000,
        waitlist_count: 0,
        yes_rsvp_count: 35,
        venue: {
          id: 25900732,
          name: "APX Axel Springer Porsche GmbH & Co. KG",
          lat: 52.505592346191406,
          lon: 13.394889831542969,
          repinned: true,
          address_1: "Markgrafenstraße 12-14",
          city: "Berlin",
          country: "de",
          localized_country_name: "Germany"
        },
        group: {
          created: 1542565400000,
          name: "APX Axel Springer and Porsche - Berlin",
          id: 30551789,
          join_mode: "open",
          lat: 52.52000045776367,
          lon: 13.380000114440918,
          urlname: "APX-Axel-Springer-and-Porsche-Berlin",
          who: "Members",
          localized_location: "Berlin, Germany",
          state: "",
          country: "de",
          region: "en_US",
          timezone: "Europe/Berlin"
        },
        link: "https://www.meetup.com/APX-Axel-Springer-and-Porsche-Berlin/events/kpcqnqyzpbqb/",
        description: "<p>Pitch Tuesdays is our weekly startup showcase, where APX portfolio founders will pitch for their ideas and the companies’ current status. This is an opportunity for them to excel in their public speaking skills and receive feedback from a public audience as part of the 100 days investor ready program.</p> <p>We often have visits from Master’s students, partners, investors, and employees from our shareholders: Axel Springer and Porsche. The best part? You can take part in it! This is valuable training for the APX portfolio founders, opportunities for our portfolio companies to gather insightful feedback, and also a great networking opportunity for you!</p> <p>Swing by our offices for a drink, see the pitches, and vote for your favourite.</p> ",
        visibility: "public",
        member_pay_fee: false
      }
    });
  });
  
  test('render event with all elements', () => {
    expect(EventWrapper.find('.time')).toHaveLength(1);
    expect(EventWrapper.find('.date')).toHaveLength(1);
    expect(EventWrapper.find('.title')).toHaveLength(1);
    expect(EventWrapper.find('.groupName')).toHaveLength(1);
    expect(EventWrapper.find('.attendanceCount')).toHaveLength(1);
    // Details button and its panel
    expect(EventWrapper.find('.details')).toHaveLength(1);

  });

  test('details panel should be hidden by default', () => {

    expect(EventWrapper.state().showDetails).toBe(false);
    // the following elements should not exist
    expect(EventWrapper.find('.detailsPanel')).toHaveLength(0);
    expect(EventWrapper.find('.address')).toHaveLength(0);
    expect(EventWrapper.find('.description')).toHaveLength(0);
    expect(EventWrapper.find('.link')).toHaveLength(0);
  });

  test('click on Details button should show details', () => {
    EventWrapper.find('#details').at(0).simulate('click');
    // check if the hidden elements are now visible
    expect(EventWrapper.state().showDetails).toBe(true);
    // the following elements should exist
    expect(EventWrapper.find('.detailsPanel')).toHaveLength(1);
    expect(EventWrapper.find('.address')).toHaveLength(1);
    expect(EventWrapper.find('.description')).toHaveLength(1);
    expect(EventWrapper.find('.link')).toHaveLength(1);
  });
  test('click on Details button a second time should hide details', () => {
    // simulate a first click
    EventWrapper.setState({
      showDetails: true
    });
    EventWrapper.find('#details').at(0).simulate('click');
    expect(EventWrapper.state().showDetails).toBe(false);
    // check if the hidden elements are not existing
    expect(EventWrapper.find('.detailsPanel')).toHaveLength(0);
    expect(EventWrapper.find('.address')).toHaveLength(0);
    expect(EventWrapper.find('.description')).toHaveLength(0);
    expect(EventWrapper.find('.link')).toHaveLength(0);
  });
});
