import React, { Component } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

class Event extends Component {
  
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      showDetails: false
    }
  }

  getData = (event) => {
    if (!event) {
      return [];
    }

    let reservations = event.yes_rsvp_count;
  //   let freeSlots = 200;
    let freeSlots = event.rsvp_limit - event.yes_rsvp_count;
    console.log('reservations', reservations);    
    console.log('freeSlots', freeSlots);    
    const data = [
      {name: 'Reservations', value: reservations }, 
      {name: 'Free slots', value: freeSlots}
    ];
    if (event.waitlist_count && event.waitlist_count > 0) {
      data.push({name: 'Waiting list', value: event.waitlist_count})
    }
    return data;
  }

  handleDetailsButtonClicked = () => {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const { event } = this.props;
    if (!event) {
      return (<div className="Event">loading...</div>);
    }
    const eventData = this.getData(event);
    return (
      <div className="Event">
        <div className="time">{event.local_time}</div>
        <div className="date">{event.local_date}</div>
        <div className="title">{event.name}</div>
        
        {event.group && event.group.name && <div className="group-name">{event.group.name}</div>}
        <div className="attendance-count">
          {event.rsvp_limit ?
          <ResponsiveContainer height={200}>
            <PieChart width={100} height={200}>
              <Pie isAnimationActive={false} data={eventData}  dataKey="value" cx={200} cy={100} outerRadius={40} fill="#8884d8" label>
                {
                  eventData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#907213', '#e5671a', '#ff7300'][index]}/>
                  ))
                }                
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          :
            <span>Reservations: {event.yes_rsvp_count}</span>
          }
        </div>
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
