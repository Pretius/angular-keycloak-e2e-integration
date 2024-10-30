/// <reference types="cypress" />
import '../../support/commands.js';
import DashboardPage from '../PageObject/DashboardPage.js';


const dashboardPage = new DashboardPage();
describe('Login using incorrect data', () => {
  it('Login with incorrect username and password', () => {
    cy.KeycloakLoginIncorrect();
  });
});
