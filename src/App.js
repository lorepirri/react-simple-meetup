import React, { Component } from 'react';
import './App.css';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents } from './api';

class App extends Component {
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      events: [],
      lat: null,
      lon: null,
      page: null      
    };
  }  
  


  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    // We use state to store value of lat, lon, page if user has changed it.
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
