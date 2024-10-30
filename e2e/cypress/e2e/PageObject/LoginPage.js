class LoginPage {
  loginBtn() {
    return cy.get('.button').contains('Log In');
  }
}

export default LoginPage;
