import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";
// require('cypress-xpath');

const loginPage = new Login_PO()

Given('I navigate to the sauce demo homepage', () => {
  // loginPage.navigateToHomepage()
  cy.visit("https://www.saucedemo.com")
})

When(`I type a username {string}`, (username) => {
  loginPage.type_Username(username)
})

When(`I type the password {string}`, (password) => {
  loginPage.type_Password(password);
})


When('I click on the login button', () => {
  loginPage.clickOn_Login_Button();
})

Then('I should be presented with an error message {string}', (expectedAlertText) => {
  loginPage.validate_Error(expectedAlertText)
})