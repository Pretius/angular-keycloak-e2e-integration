import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();

  get statusText() {
    if (!this.authenticationService.isLoggedIn()) {
      return 'You are currently NOT logged in.';
    } else {
      return `You are currently logged in as "${this.authenticationService.userName}"`;
    }
  }

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userIdleService: UserIdleService,
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.userIdleService.startWatching();
      this.subscription.add(this.userIdleService.onTimerStart().subscribe());
      this.subscription.add(
        this.userIdleService.onTimeout().subscribe(() => {
          this.authenticationService.logout();
          this.userIdleService.resetTimer();
        }),
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
