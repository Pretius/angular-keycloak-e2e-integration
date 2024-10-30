/// <reference types="cypress" />
import '../../support/commands.js';
import DashboardPage from '../PageObject/DashboardPage.js';


const dashboardPage = new DashboardPage();
describe('Login using correct data', () => {
  it('Login with correct data', () => {
    cy.KeycloakLoginCorrect();
    cy.url().should('include', `/${Cypress.env('localUrl').replace('http://', '/')}`);
    //verify logged in:
    const expectedMessage = `You are currently logged in as "${Cypress.env(
      'correctUser',
    )}"`;
    dashboardPage.loggedInText().should('be.visible');
    dashboardPage.loggedInText().should('have.text', expectedMessage);
  });
});
