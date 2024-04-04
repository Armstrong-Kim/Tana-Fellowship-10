import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page_objects/ContactUs_PO";
require('cypress-xpath');


const contactUs_Page = new ContactUs_PO();

When('I type a first name', () => {
  contactUs_Page.type_FirstName("John")
})

When('I type a last name', () => {
  contactUs_Page.type_LastName("Doe")
})

When('I enter an email address', () => {
  contactUs_Page.type_EmailAddress("johndoe@email.com")
})

When('I type a comment', () => {
  contactUs_Page.type_Comment("Hello world!")
})

When('I click on the submit button', () => {
  contactUs_Page.clickOn_Submit_Button()
})

Then('I should be presented with a successful contact us submission message.', () => {
  contactUs_Page.validate_Submission_Header('Thank You for your Message!')
})

Then('I should be presented with a unsuccessful contact us submission message.', () => {
  contactUs_Page.validate_Submission_Header('Error: Invalid email address')
})

When('I type a specific first name {string}', (firstName) => {
  contactUs_Page.type_FirstName(firstName)
})

When('I type a specific last name {string}', (lastName) => {
  contactUs_Page.type_LastName(lastName)
})

When('I type a specific email address {string}', (email) => {
  contactUs_Page.type_EmailAddress(email)
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
  contactUs_Page.type_Comment(word + number)
})

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
  contactUs_Page.type_FirstName(firstName)
  contactUs_Page.type_LastName(lastName)
})

When('I enter an email address {string} and a comment {string}', (email, comment) => {
  contactUs_Page.type_EmailAddress(email)
  contactUs_Page.type_Comment(comment)
})

When('I should be presented with a header text {string}', (message) => {
  contactUs_Page.validate_Submission_Header(message)
})