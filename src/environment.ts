export const environment = {
  production: false,
  keycloak: {
    authority: 'http://localhost:8080',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    realm: 'Pretius-angular-keycloak-e2e-integration',
    clientId: 'keycloak-angular-integration-tutorial',
  },
  idleConfig: { idle: 10, timeout: 10, ping: 10 },
};
