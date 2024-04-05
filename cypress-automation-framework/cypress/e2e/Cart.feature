@cart @regression
Feature: Cart - Adding and Removing Items

  Background: Navigate to the website
    Given I navigate to the sauce demo homepage
    And I type a username "standard_user"
    And I type the password "secret_sauce"
    And I click on the login button

  Scenario: Adding product to cart
    And I click on the Add to cart button on the "Sauce Labs Backpack" card
    Then The Add to cart button on the "Sauce Labs Backpack" turns to Remove button
    And I click on the Add to cart button on the "Sauce Labs Bike Light" card
    Then The Add to cart button on the "Sauce Labs Bike Light" turns to Remove button

  Scenario: Checking the change in the number of products
    And I click on the Add to cart button on the "Sauce Labs Backpack" card
    Then The Add to cart button on the "Sauce Labs Backpack" turns to Remove button
    And I click on the Add to cart button on the "Sauce Labs Bike Light" card
    Then The Add to cart button on the "Sauce Labs Bike Light" turns to Remove button
    And I click on the cart icon
    Then I wait for 20 seconds