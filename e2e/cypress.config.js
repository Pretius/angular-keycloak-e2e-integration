const { defineConfig } = require('cypress');

module.exports = defineConfig({

  viewportWidth: 2100,
  viewportHeight: 1500,
  pageLoadTimeout: 50000,
  defaultCommandTimeout: 6000,
  requestTimeout: 50000,
  responseTimeout: 7000,
  videoCompression: false,
  videoUploadOnPasses: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    'charts': true,
    'reportPageTitle': 'Test report',
  },

  e2e: {
    experimentalWebKitSupport: true,
    failOnStatusCode: false,
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies: true,
    chromeWebSecurity: true,
    experimentalSkipDomainInjection: null,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser, launchOptions) => {

          if (browser.family === 'firefox') {
            launchOptions.preferences['intl.locale.requested'] = 'pl';
            return launchOptions;
          }

        },
      );
    },
    env: {
      localUrl: 'http://localhost:4200',
      keycloakUrl: 'http://localhost:8080/',
      adminUrl: 'http://localhost:8080/realms/Pretius-angular-keycloak-e2e-integration/protocol/openid-connect/auth?client_id=keycloak-angular-integration-tutorial&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauthorize&state=ee2766a1-637d-4787-9372-ce6086ac8407&response_mode=fragment&response_type=code&scope=openid&nonce=5ede6201-44ab-4d15-80e1-f72abb391ed4',
      correctPassword: 'sIjKqg73MTf9uTU',
      correctUser: 'test',
      incorrectUser: 'nonExistingUserTest',
      incorrectPassword: 'kPwuMD7cimIWdPR',
      existingEmail: 'test@test.test',
      existingUsername: 'test',
    },
  },
});
