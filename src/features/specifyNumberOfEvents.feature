

Feature: Specify number of events

Scenario: When user has not specified a number, 32 is the default number.
  Given that the user is selecting a city
  When the user has not specified a number of events
  Then the default number of events shown in the results is thirtytwo

Scenario: User can change the number of events they want to see.
  Given that the user is selecting a city
  When the user specifies a number of events
  Then the specified number is the number of events shown in the results