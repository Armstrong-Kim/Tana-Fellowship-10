import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO()

When('I click on the Add to cart button on the {string} card', (product_name) => {
  cy.get(`#add-to-cart-${product_name.toLowerCase().replaceAll(" ", "-")}`).click()
})

Then('The Add to cart button on the {string} turns to Remove button', (product_name) => {

})

Then('I click on the cart icon', () => {
  cy.get('.shopping_cart_link').click()
})

Then('I wait for 20 seconds', () => {
  cy.wait(20 * 1000)
})