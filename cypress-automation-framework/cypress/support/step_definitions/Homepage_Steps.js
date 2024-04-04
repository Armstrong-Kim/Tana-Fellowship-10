import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://webdriveruniversity.com/"

Given(`I navigate to the webdriveruniversity homepage`, () => {
  cy.visit(url);
})

When(`I click on the contact us button`, () => {
  cy.clickAndOpenLink_InSameTab("#contact-us");
})

When(`I click on the login portal button`, () => {
  cy.clickAndOpenLink_InSameTab("#login-portal");
})