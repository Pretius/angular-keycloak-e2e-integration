import LoginPage from '../e2e/PageObject/LoginPage.js';
import { generateRandomString } from '../../helpers';


const loginPage = new LoginPage();

Cypress.Commands.add('KeycloakLoginCorrect', () => {

  const viewerUserData = {
    correcUsername: Cypress.env('correctUser'),
    correctPassword: Cypress.env('correctPassword'),
  };
  cy.visit(Cypress.env('localUrl'), { timeout: 50000 });
  loginPage.loginBtn().should('be.visible').click();
  cy.origin(
    Cypress.env('keycloakUrl'),
    { args: viewerUserData },
    ({ correcUsername, correctPassword }) => {
      cy.get('#username').type(correcUsername);
      cy.wait(50);
      cy.get('#password').type(correctPassword);
      cy.get('.pf-c-button.pf-m-control').should('have.attr', 'aria-label', 'Show password').click();
      cy.get('.pf-c-button.pf-m-control').should('have.attr', 'aria-label', 'Hide password');
      cy.wait(50);
      cy.get('#kc-login').click();
    },
  );
});
Cypress.Commands.add('KeycloakLoginIncorrect', () => {
  const viewerUserData = {
    incorrecUsername: Cypress.env('incorrectUser'),
    incorrectPassword: Cypress.env('incorrectPassword'),
  };
  cy.visit(Cypress.env('localUrl'), { timeout: 50000 });
  loginPage.loginBtn().should('be.visible').click();
  cy.origin(
    Cypress.env('keycloakUrl'),
    { args: viewerUserData },
    ({ incorrecUsername, incorrectPassword }) => {
      cy.get('#kc-login').click();
      cy.get('#input-error')
        .should('be.visible')
        .then((el) => {
          assert.include(el.text(), 'Invalid username or password.');
        });
      cy.get('#username').type(incorrecUsername);
      cy.wait(50);
      cy.get('#password').type(incorrectPassword);
      cy.wait(50);
      cy.get('#kc-login').click();
      cy.get('#input-error')
        .should('be.visible')
        .then((el) => {
          assert.include(el.text(), 'Invalid username or password.');
        });
    },
  );
});

Cypress.Commands.add('Register', () => {
  const randomString = generateRandomString(6);
  const userData = { email: 'testMail' + randomString + '@gmail.com', username: 'Cypresstestusername' + randomString };

  cy.visit(Cypress.env('localUrl'), { timeout: 50000 });
  loginPage.loginBtn().should('be.visible').click();
  cy.origin(
    Cypress.env('keycloakUrl'), { args: userData }, ({ email, username }) => {
      cy.get('a').contains('Register').click({ force: true });
      cy.get('#firstName').type('Cypress test first name');
      cy.get('#lastName').type('Cypress test last name');
      cy.get('#email').type(email);
      cy.get('#username').type(username);
      cy.get('#password').type('testPassword');
      cy.get('#password-confirm').type('testPassword');
      cy.get('input[value="Register"]').click();
    },
  );
});
