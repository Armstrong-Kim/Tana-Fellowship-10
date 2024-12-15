import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I click on the Add to cart button on the Sauce Labs Backpack', () => {
	cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click();
});
