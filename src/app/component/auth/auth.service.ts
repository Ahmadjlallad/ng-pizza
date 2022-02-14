import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap, throwError } from 'rxjs';
import { User, UserInterface } from './User.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public cookies: CookieService) {}
  myCookie: any;
  isAuthenticated = false;
  user!: User | null;
  signIn(username: string, password: string) {
    this.myCookie = this.cookies;
    return this.http
      .post<UserInterface>(
        'https://jallad-auth-api.herokuapp.com/signin',
        {},
        {
          headers: new HttpHeaders().set(
            'Authorization',
            ' Basic ' + btoa(`${username}:${password}`)
          ),
        }
      )
      .pipe(
        tap((user) => {
          this.handleSuccessfulReg(user);
        }),
        catchError(this.handleError)
      );
  }
  signup(username: string, password: string) {
    return this.http
      .post<UserInterface>('https://jallad-auth-api.herokuapp.com/signup', {
        username,
        password,
      })
      .pipe(
        tap((user) => {
          this.handleSuccessfulReg(user);
        }),
        catchError(this.handleError)
      )
      .pipe();
  }

  private handleSuccessfulReg(user: UserInterface) {
    console.log();
    this.cookies.set('token', user.token);
    this.isAuthenticated = true;
    this.user = new User(user.user.username, user.token, user.user.id);
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An  unknown error occurred!';

    if (errorRes.error === 'Invalid Login')
      errorMessage = 'incorrect username or password ' + errorRes.error;
    if (errorRes.error.message === 'Validation error')
      errorMessage = 'Name already exist ' + errorRes.error.message;
    return throwError(() => new Error(errorMessage));
  }
  logeOut() {
    this.isAuthenticated = false;
    this.user = null;
  }
}
