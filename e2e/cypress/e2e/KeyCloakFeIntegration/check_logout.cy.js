/// <reference types="cypress" />
import '../../support/commands.js';
import DashboardPage from '../PageObject/DashboardPage.js';


const dashboardPage = new DashboardPage();
describe('Check logout', () => {
  beforeEach(() => {
    cy.KeycloakLoginCorrect();
  });
  it('Manual logout', () => {

    dashboardPage.logoutBtn().should('be.visible').click();
    cy.url().should('include', '/logout');
    dashboardPage.protectedLink().should('not.exist');
    dashboardPage
      .loggedOutText()
      .should('be.visible')
      .and('have.text', 'You have been logged out!');
  });
  it('Automatic logout', () => {
    cy.wait(21000);
    dashboardPage
      .loggedOutText({ timeout: 10000 })
      .should('exist')
      .and('have.text', 'You have been logged out!');
  });
});
