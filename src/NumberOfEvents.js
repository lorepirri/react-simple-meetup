import React, { Component } from 'react';

class NumberOfEvents  extends Component {
  
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      numberOfEvents: 32
    }
  }

  handleNumberOfEventsChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  }

  render() {
    const { numberOfEvents } = this.state;
    if (!numberOfEvents) {
      return (<></>);
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
