import React, { Component } from 'react';

class Event extends Component {
  
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      showDetails: false
    }
  }

  handleDetailsButtonClicked = () => {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const { event } = this.props;
    if (!event) {
      return (<div className="Event">loading...</div>);
    }
    return (
      <div className="Event">
        <div className="time">{event.local_time}</div>
        <div className="date">{event.local_date}</div>
        <div className="title">{event.name}</div>
        
        {event.group && event.group.name && <div className="group-name">{event.group.name}</div>}
        <div className="attendance-count">{event.yes_rsvp_count}</div>

        <input id="details" type="button"
          className="details"
          onClick={() => this.handleDetailsButtonClicked()}
        />
        {this.state.showDetails &&
          (<div className="details-panel">
            <div className="address">{event.address_1}</div>
            <div className="description">{event.description}</div>
            <div className="link">{event.link}</div>
          </div>)}
      </div>
    );
  }
}

export default Event;
