@login @regression
Feature: webdriveruniversity - Login Page

    Background: Pre-condition
        When I wait for 0 seconds

    Scenario Outline: Validate valid & invalid login credentials
        #Given I navigate to the webdriveruniversity homepage
        #When I click on the login portal button
        Given I navigate to the webdriveruniversity login page
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |
            | Mukundi   | pass12345    | validation failed    |