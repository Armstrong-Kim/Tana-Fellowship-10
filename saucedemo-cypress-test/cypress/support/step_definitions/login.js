import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to the SauceDemo login', () => {
	cy.visit('https://www.saucedemo.com/');
});

When('I type a Username {string}', (username) => {
	cy.get('input[name="user-name"]').type(username);
});

When('I type a Password {string}', (password) => {
	cy.get('input[name="password"]').type(password);
});

Given('I again navigate to the SauceDemo login page', () => {
	cy.visit('https://www.saucedemo.com/');
});

When('I type a username {string}', (username) => {
	cy.get('input[name="user-name"]').type(username);
});

When('I type a password {string}', (password) => {
	cy.get('input[name="password"]').type(password);
});

When('I click on the login button', () => {
	cy.get('input[name="login-button"]').click();
});

Then(
	`I should be presented with an error message {string}`,
	(expectedErrorMessage) => {
		cy.get(`h3[data-test="error"]`).should('have.text', expectedErrorMessage);
	}
);
