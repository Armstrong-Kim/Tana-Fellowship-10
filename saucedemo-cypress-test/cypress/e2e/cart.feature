@cart @regression
Feature: SauceDemo - Login Page

    Background: Pre-condition - Successful Login
        Given I navigate to the SauceDemo login
        And I type a Username "standard_user"
        And I type a Password "secret_sauce"
        And I click on the login button

Scenario: Adding a product to cart
        And I click on the Add to cart button on the Sauce Labs Backpack
