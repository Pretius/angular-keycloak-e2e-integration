class SignInPage {
  registerBtn() {
    return cy.get('a').contains('Register');
  }

  pageTitle() {
    return cy.get('#kc-page-title');
  }

  backToLoginBtn() {
    cy.get('a').contains('Register');
  }
}

export default SignInPage;
