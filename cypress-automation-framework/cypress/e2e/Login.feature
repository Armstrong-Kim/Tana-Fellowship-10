@login @regression
Feature: webdriveruniversity - Login Page

  Background: Preconditions
    Given I navigate to the webdriveruniversity homepage
    When I click on the login portal button

  Scenario Outline: Validate valid and invalid login credentials
    And I type a username <username>
    And I type a password <password>
    And I click on the login button
    Then I should be presented with an alert box which contains text '<expectedAlertText>'

    Examples:
      | username  | password     | expectedAlertText    |
      | webdriver | webdriver123 | validation succeeded |
      | prospects | prospects123 | validation failed    |