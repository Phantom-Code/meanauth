import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  signUp(userName: String, email: String, password: string) {
    const authData = { name: userName, email: email, password: password };
    this.http.post('/api/user/sign-up', authData).subscribe(
      (response) => {
        this.router.navigate(['/sign-in']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  signIn(email: String, password: String) {
    const authData = { email: email, password: password };
    this.http.post<any>('/api/user/sign-in', authData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getToken() {
    let token = localStorage.getItem('token');
    if (token == null) {
      console.log('null token');
      return 'null';
    }
    return localStorage.getItem('token');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
