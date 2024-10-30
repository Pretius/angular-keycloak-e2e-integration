import { inject, Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  readonly #keycloakService = inject(KeycloakService);

  get userName(): string {
    return this.#keycloakService.isLoggedIn() && this.#keycloakService.getKeycloakInstance().profile
      ? this.#keycloakService.getUsername()
      : '';
  }

  isLoggedIn(): boolean {
    return this.#keycloakService.isLoggedIn();
  }

  logout(): void {
    this.#keycloakService.logout(environment.keycloak.postLogoutRedirectUri);
  }

  redirectToLoginPage(): void {
    this.#keycloakService.login();
  }
}
