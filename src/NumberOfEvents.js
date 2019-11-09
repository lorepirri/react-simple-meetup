import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

const DEFAULT_NUMBER_OF_EVENTS = 32
class NumberOfEvents  extends Component {
  
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      numberOfEvents: DEFAULT_NUMBER_OF_EVENTS,
      errorText: ''
    }
  }

  handleNumberOfEventsChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
    console.log(parseInt(value));
    let intValue = parseInt(value);
    if (isNaN(intValue) || intValue < 1) {
      this.setState({ errorText: 'Number should be at least 1' });
    } else {
      this.setState({ errorText: '' });
    }    
  }

  render() {
    let { numberOfEvents } = this.state;
    if (numberOfEvents === undefined) {
      numberOfEvents = DEFAULT_NUMBER_OF_EVENTS;
    }
    return (
      <div>
        <ErrorAlert text={this.state.errorText} />
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
