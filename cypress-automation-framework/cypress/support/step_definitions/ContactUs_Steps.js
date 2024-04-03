import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type a first name', () => {
  cy.get('[name="first_name"]').type("John")
})

When('I type a last name', () => {
  cy.get('[name="last_name"]').type("Doe")
})

When('I enter an email address', () => {
  cy.get('[name="email"]').type("johndoe@email.com")
})

When('I type a comment', () => {
  cy.get('textarea[name="message"]').type("Hello world!")
})

When('I click on the submit button', () => {
  cy.get('[type="submit"]').click();
})

Then('I should be presented with a successful contact us submission message.', () => {
  cy.get('h1').should('have.text', 'Thank You for your Message!')
})