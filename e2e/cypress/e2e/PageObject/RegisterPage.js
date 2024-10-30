class RegisterPage {
  registerForm() {
    return cy.get('#kc-content');
  }

  firstNameInput() {
    return cy.get('#firstName');
  }

  lastNameInput() {
    return cy.get('#lastName');
  }

  emailInput() {
    return cy.get('#email');
  }

  usernameInput() {
    return cy.get('#username');
  }

  passwordInput() {
    return cy.get('#password');
  }

  confirmPasswordInput() {
    return cy.get('#password-confirm');
  }

  backToLoginBtn() {
    return cy.get('a').contains('« Back to Login');
  }

  registerBtn() {
    return cy.get('input[value="Register"]');
  }

  firstNameInputError() {
    return cy.get('#input-error-firstName');
  }

  lastNameInputError() {
    return cy.get('#input-error-lastName');
  }

  emailInputError() {
    return cy.get('#input-error-email');
  }

  usernameInputError() {
    return cy.get('#input-error-username');
  }

  passwordInputError() {
    return cy.get('#input-error-password');
  }

  invalidEmailError() {
    return cy.get('#input-error-email');
  }

  passwordNotMatchError() {
    return cy.get('#input-error-password-confirm');
  }
}

export default RegisterPage;
