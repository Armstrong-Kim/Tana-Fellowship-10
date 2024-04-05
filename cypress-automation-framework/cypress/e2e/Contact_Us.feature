# @contact-us @regression
# Feature: WebdriverUniversity - Contact Us Page

#   Background: Preconditions
#     Given I navigate to the webdriveruniversity homepage
#     When I click on the contact us button


#   Scenario: Valid Contact Us Form Submission
#     And I type a first name
#     And I type a last name
#     And I enter an email address
#     And I type a comment
#     And I click on the submit button
#     Then I should be presented with a successful contact us submission message.

#   Scenario:Invalid Contact Us Form Submission
#     And I type a first name
#     And I type a last name
#     And I type a comment
#     And I click on the submit button
#     Then I should be presented with a unsuccessful contact us submission message.

#   Scenario: Valid Contact Us Form SUbmission - Using specific data
#     And I type a specific first name "Sarah"
#     And I type a specific last name "Woods"
#     And I type a specific email address "sarah_woods101@mail.com"
#     And I type a specific word "hello123" and number 6788 within the comment input field
#     And I click on the submit button
#     Then I should be presented with a successful contact us submission message.

#   @smoke
#   Scenario Outline: Valid Contact Us Page
#     And I type a first name <firstName> and a last name '<lastName>'
#     And I enter an email address '<emailAddress>' and a comment '<comment>'
#     And I click on the submit button
#     Then I should be presented with a header text '<message>'

#     Examples:
#       | firstname | lastName | emailAddress      | comment                | message                      |
#       | John      | Doe      | johndoe@email.com | Hello, how are you?    | Thank You for your Message!  |
#       | Jane      | Yoh      | yohjane@prosp.com | Test123 Test321        | Thank You for your Message!  |
#       | Grace     | Hudson   | grace_hudson      | Do you create website? | Error: Invalid email address |