import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { Auth } from '../interfaces/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  http = inject(HttpClient);
  router = inject(Router);

  get authToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  constructor() {
    this.isLoggedIn = !!this.authToken?.length;
  }

  login(email: string, password: string): Observable<Auth | null> {
    if (!email || !password) {
      throw Error('Incorrect call');
    }

    const headers = new HttpHeaders({
      apiKey: environment.apiKey,
      'Content-Type': 'application/json',
    });

    return this.http
      .post<Auth>(
        environment.authUrl,
        {
          email: email,
          password: password,
        },
        { headers }
      )
      .pipe(take(1))
      .pipe(
        map((result: Auth) => {
          if (result.access_token) {
            localStorage.setItem('access_token', result.access_token);
            this.isLoggedIn = !!this.authToken?.length;
            return result;
          }
          return null;
        })
      );
  }
}
