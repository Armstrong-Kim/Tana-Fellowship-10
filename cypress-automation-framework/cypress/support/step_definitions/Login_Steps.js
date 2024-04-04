import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";
require('cypress-xpath');

let stub;
const loginPage = new Login_PO()

When(`I type a username {}`, (username) => {
  loginPage.type_Username(username)
})

When(`I type a password {}`, (password) => {
  loginPage.type_Password(password);
})


When('I click on the login button', () => {
  stub = cy.stub();
  cy.on('window:alert', stub);
  loginPage.clickOn_Login_Button();
})

Then('I should be presented with an alert box which contains text {string}', (expectedAlertText)=>{
  expect(stub).to.have.been.calledWith(expectedAlertText)
})