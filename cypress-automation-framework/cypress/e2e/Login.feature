@login @regression
Feature: Sauce Demo - Login Page

  Background: Navigate to the website
    Given I navigate to the sauce demo homepage


  Scenario: Validate Valid login credentials
    And I type a username "standard_user"
    And I type the password "secret_sauce"
    And I click on the login button

  Scenario: Login with an incorrect username
    Given I navigate to the sauce demo homepage
    And I type a username "prospects"
    And I type the password "secret_sauce"
    And I click on the login button
    Then I should be presented with an error message "Username and password do not match any user in this service"

  Scenario: Login with an incorrect password
    Given I navigate to the sauce demo homepage
    And I type a username "standard_user"
    And I type the password "prospects123"
    And I click on the login button
    Then I should be presented with an error message "Username and password do not match any user in this service"


  Scenario: locked_out_user
    Given I navigate to the sauce demo homepage
    And I type a username "locked_out_user"
    And I type the password "secret_sauce"
    And I click on the login button
    Then I should be presented with an error message "Sorry, this user has been locked out."

  Scenario: Login with empty fields
    And I click on the login button
    Then I should be presented with an error message "Username is required"