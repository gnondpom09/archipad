import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.auth.isLoggedIn) {
        return resolve(true);
      } else {
        this.router.navigate(['login']);

        return resolve(false);
      }
    });
  }
}
