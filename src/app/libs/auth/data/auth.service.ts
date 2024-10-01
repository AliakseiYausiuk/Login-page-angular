import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail: string | null = null;
  userPassword: string | null = null;

  get isAuth() {
    // if (!this.userEmail) {
    //   this.userEmail = localStorage.getItem('email');
    //   this.userPassword = localStorage.getItem('password');
    // }
    return !!this.userEmail;
  }

  login(payload: {email: string, password: string}) {
    localStorage.setItem('email', payload.email);
    localStorage.setItem('password', payload.password);
    this.userEmail = payload.email;
    this.userPassword = payload.password;
  }
}
