class DashboardPage {
  loggedInText() {
    return cy.get('.status-text');
  }

  logoutBtn() {
    return cy.get('.link-text').contains('Logout');
  }

  protectedLink() {
    return cy.get('.link-text').contains('Protected');
  }

  loggedOutText() {
    return cy.get('app-logout-screen');
  }
}

export default DashboardPage;
