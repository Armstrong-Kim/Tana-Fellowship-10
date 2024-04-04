import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

// const basePage = new Base_PO();
const homePage = new Homepage_PO();

Given(`I navigate to the webdriveruniversity homepage`, () => {
  homePage.navigateToHomePage("");
})

When(`I click on the contact us button`, () => {
  homePage.clickOn_ContactUs_Button()
})

When(`I click on the login portal button`, () => {
  homePage.clickOn_Login_Button()
})