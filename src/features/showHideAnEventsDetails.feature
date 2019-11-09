Feature: Show/hide an event details

Scenario: An event element is collapsed by default.
  Given that the user has selected a city
  When is presented with a list of events
  Then the events have the details panel collapsed

Scenario: User can expand an event to see its details.
  Given that the user is presented with a list of events
  When the user click on an event, or on a expand button
  Then the event's details panel expands

Scenario: User can collapse an event to hide its details
  Given that the event's details panel is expanded
  When the user click outside of the event's details panel, or on a collapse button
  Then the event's details panel collapses
