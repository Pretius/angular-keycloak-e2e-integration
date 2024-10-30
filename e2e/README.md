# angular-keycloak-e2e-integration-cypress

Automatic tests for keycloak integration app

Tests have been written in Cypress, a framework based on JavaScript.

Next, follow instructions in README in Keycloak integration app repository.

## Setting application to meet tests prerequisites

# Setting idleConfig 

To run tests sucesfully, it is neccessary to decrease idleConfig in local app (otherwise, tetst would run very long). In order to to that, please go to `environment.ts` and find idleConfig. By default it is: `idleConfig: { idle: 10, timeout: 60, ping: 10 }` it should be changed locally to `idleConfig: { idle: 1, timeout: 6, ping: 10 },`

# Setting registration possibility

So set the possibility to register new users, go to Keycloak Admin console, select your realm, and in 'Realm settings', in 'Login' tab, enable 'User registration' option

## Tests structure (page object, cross-domain testing etc)

When Cypress has been installed, clone tests repository and open in code editor. The tests are in `e2e` directory - there is a `PageObject` for Pages used in tests, and `KeycloakFeIntegration` for test specs.
Environmental variables as well as test settings are all defined in `cypress.config.js`
Custom commands that are defined in test specs are defined in `support/commands.js`

## Launching tests

To launch tests, Cypress must be installed locally. [**Here**](https://docs.cypress.io/guides/getting-started/installing-cypress) is the instruction how to do this (npm package and node.js are required to do this) ()

## How to change local environment variables

To change environment that tests are run, go to `cypress.config.js` and change URL's in `env` section
To test login successfully, replace `correctPassword` and `correctUser` parameters to values set during Keycloak admin console.

## Run tests in headless and non-headless mode

To open Cypress dialog window in order to run tests in non-headless mode, run `npx cypress open` in terminal, then select `e2e` testing and select browser. Next, You will be able to choose whether to run single spec, or run all specs.
To run tests in a headless mode type `npx cypress run --headless`

## Generating report

There is `cypress-mochawesome-reporter` added as a dev dependency. After each tests run in a headless mode, report is generated in `cypress/reports/html/index.html`




