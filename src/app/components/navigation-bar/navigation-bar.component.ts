import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  imports: [RouterLink, NgOptimizedImage, NgIf],
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  get isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  constructor(readonly authenticationService: AuthenticationService) {}
}
