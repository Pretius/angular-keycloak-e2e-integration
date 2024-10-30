/// <reference types="cypress" />
import '../../support/commands.js';
import RegisterPage from '../PageObject/RegisterPage.js';
import { generateRandomString } from '../../../helpers.js';
import DashboardPage from '../PageObject/DashboardPage.js';
import SignInPage from '../PageObject/signInPage.js';


describe('Register', () => {
  it('Registration form - check validations', () => {
    const randomString = generateRandomString(6);
    const signInPage = new SignInPage();
    const registerPage = new RegisterPage();

    cy.visit(Cypress.env('adminUrl'));
    signInPage.registerBtn().should('be.visible').click();
    registerPage
      .registerForm()
      .as('form')
      .within(($form) => {
        registerPage.registerBtn().should('be.visible').click();
        registerPage
          .firstNameInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Please specify this field.');
          });
        registerPage
          .lastNameInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Please specify this field.');
          });
        registerPage
          .emailInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Please specify email.');
          });
        registerPage
          .usernameInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Please specify username.');
          });
        registerPage
          .passwordInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Please specify password.');
          });
        registerPage
          .firstNameInput()
          .type('Cypress test first name ' + randomString);
        registerPage
          .lastNameInput()
          .type('Cypress test last name ' + randomString);
        registerPage.emailInput().type('Cypress test email ' + randomString);
        registerPage
          .usernameInput()
          .type('Cypress test username ' + randomString);
        registerPage
          .passwordInput()
          .type('Cypress test password' + randomString);
        registerPage
          .confirmPasswordInput()
          .type('Cypress test password..' + randomString);
        registerPage.registerBtn().click();
        registerPage
          .passwordNotMatchError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Password confirmation doesn\'t match.');
          });
        registerPage
          .emailInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Invalid email address.');
          });

        registerPage.emailInput().clear().type(Cypress.env('existingEmail'));
        registerPage
          .usernameInput()
          .clear()
          .type(Cypress.env('existingUsername'));

        registerPage.registerBtn().click();
        registerPage
          .emailInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Email already exists.');
          });
        registerPage
          .usernameInputError()
          .should('be.visible')
          .then((el) => {
            assert.include(el.text(), 'Username already exists.');
          });
        registerPage.firstNameInputError().should('not.exist');
        registerPage.lastNameInputError().should('not.exist');
      });
    //verify back to login button:

    registerPage.backToLoginBtn().should('be.visible').click();
    signInPage
      .pageTitle()
      .should('be.visible')
      .then((el) => {
        assert.include(el.text(), 'Sign in to your account');
        // cy.reload();
        // cy.wait(2000);
      });
  });
  it('Successful registration', () => {
    const dashboardPage = new DashboardPage();
    cy.Register();
    dashboardPage
      .loggedInText()
      .should('be.visible')
      .then((el) => {
        assert.include(el.text(), 'You are currently logged in as');
      });
    dashboardPage.loggedInText().then((el) => {
      assert.include(el.text(), 'cypresstestusername');
    });
  });
});
