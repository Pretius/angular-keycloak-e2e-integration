import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-protected-route',
  standalone: true,
  templateUrl: './protected-route.component.html',
})
export class ProtectedRouteComponent {
  constructor(readonly authenticationService: AuthenticationService) {}
}
