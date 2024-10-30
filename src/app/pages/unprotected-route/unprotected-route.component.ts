import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-unprotected-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unprotected-route.component.html',
})
export class UnprotectedRouteComponent {
  get username(): string {
    return this.authenticationService.isLoggedIn()
      ? this.authenticationService.userName
      : 'friend';
  }
  constructor(readonly authenticationService: AuthenticationService) {}
}
