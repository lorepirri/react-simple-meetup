import React, { Component } from 'react';
import { getSuggestions } from './api';

class CitySearch extends Component {
  constructor() {
    // super class constructor
    super();

    // init state
    this.state = {
      query: '',
      suggestions: []
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then(suggestions => {
      this.setState({ suggestions });
    });    
  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  }
    
  render() {
    return (
      <div className="CitySearch">
        <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            placeholder="Your city here"
        />
        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li 
              key={item.name_string} 
              onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}
            >
              {item.name_string}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;