/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const url = 'https://www.saucedemo.com/';

Given(`I navigate to the SauceDemo login`, () => {
	cy.visit(url);
});

When(`I type a Username`, () => {
	;
});

When(`I type a Password`, () => {
	;
});

When(`I click on the submit button`, () => {
    ;
});

Then(`I should be logged in and redirected to the products page`, () => {
    ;
});