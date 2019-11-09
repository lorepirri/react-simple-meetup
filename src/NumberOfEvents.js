import React, { Component } from 'react';

const DEFAULT_NUMBER_OF_EVENTS = 32
class NumberOfEvents  extends Component {
  
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      numberOfEvents: DEFAULT_NUMBER_OF_EVENTS
    }
  }

  handleNumberOfEventsChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  }

  render() {
    const { numberOfEvents } = this.state;
    if (!numberOfEvents) {
      numberOfEvents = DEFAULT_NUMBER_OF_EVENTS;
    }
    return (
      <div>
        <input type="text"
          className="numberOfEvents"
          value={numberOfEvents}
          onChange={this.handleNumberOfEventsChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
