import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideUserIdleConfig } from 'angular-user-idle';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from '../environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

export const initializeKeycloak = (keycloak: KeycloakService) => async () => await keycloak.init({
  config: {
    url: environment.keycloak.authority,
    realm: environment.keycloak.realm,
    clientId: environment.keycloak.clientId,
  },
  loadUserProfileAtStartUp: true,
  initOptions: {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri:
      window.location.origin + '/assets/silent-check-sso.html',
    checkLoginIframe: false,
    redirectUri: environment.keycloak.redirectUri,
  },
});

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    KeycloakAngularModule,
    CommonModule,
    NavigationBarComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    provideUserIdleConfig({
      idle: environment.idleConfig.idle,
      ping: environment.idleConfig.ping,
      timeout: environment.idleConfig.timeout,
    }),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {
}
