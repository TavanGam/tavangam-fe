import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // if (this.authService.isAuthenticated()) {
    //   return true;
    // }
    // Check if token exists but auth state hasn't been initialized
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/landing']);
    this.authService.login();
    return false;
  }
}