import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  elements = {
    error_message: () => cy.get(".error:nth-of-type(3)")
  }

  navigateToHomepage() {
    super.navigate("")
  }

  getPageTitle() {
    return cy.title();
  }


  type_Username(username) {
    cy.get("#user-name").type(username)
  }

  type_Password(password) {
    cy.get("#password").type(password)
  }

  clickOn_Login_Button() {
    cy.get('#login-button').click()
  }

  validate_Error(expectedError) {
    this.elements.error_message().contains(expectedError)
  }
}
export default Login_PO;