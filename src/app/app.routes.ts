import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LogoutRouteGuard } from './guards/logout-route.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LogoutScreenComponent } from './pages/logout-screen/logout-screen.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProtectedRouteComponent } from './pages/protected-route/protected-route.component';
import { UnprotectedRouteComponent } from './pages/unprotected-route/unprotected-route.component';

export enum AppRoutes {
  Main = '',
  Protected = 'protected',
  Unprotected = 'unprotected',
  Logout = 'logout',
  NotFound = '404',
}

export const routes: Routes = [
  {
    path: AppRoutes.Main,
    pathMatch: 'full',
    component: MainPageComponent,
  },
  {
    path: AppRoutes.Protected,
    canActivate: [AuthGuard],
    component: ProtectedRouteComponent,
  },
  {
    path: AppRoutes.Unprotected,
    component: UnprotectedRouteComponent,
  },
  {
    path: AppRoutes.Logout,
    canActivate: [LogoutRouteGuard],
    component: LogoutScreenComponent,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: AppRoutes.NotFound,
  },
];
