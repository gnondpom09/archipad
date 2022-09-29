import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');

    return user !== null ? true : false;
  }

  singin(userAuth: any): void {
    localStorage.setItem('user', JSON.stringify(userAuth));
    this.router.navigate(['/']);
  }

  signout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
