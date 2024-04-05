@login @regression
Feature: SauceDemo - Login Page

    Scenario: Successful Login
        Given I navigate to the SauceDemo login
        And I type a Username "standard_user"
        And I type a Password "secret_sauce"
        And I click on the login button

    Scenario Outline: Unsuccessful Login
        Given I again navigate to the SauceDemo login page
        And I type a username '<username>'
        And I type a password '<password>'
        And I click on the login button
        Then I should be presented with an error message '<expectedErrorMessage>'

            Scenarios:
            | username        | password     | expectedErrorMessage                                                      |
            | mukundi         | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | standard_user   | mukundi123   | Epic sadface: Username and password do not match any user in this service |
            # |                 |              | Epic sadface: Username is required                                        |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |