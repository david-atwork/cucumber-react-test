Feature: Main Page Counter

    Scenario: Increment counter
    Given I am in the main Page with a counter value of 0
    When I click on the "Increment" button
    Then the counter should increment by 1