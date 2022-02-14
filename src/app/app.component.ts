import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './component/auth/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  title = 'ng-pizza';
  constructor(private ck: CookieService, private auth: AuthService) {}
  ngOnInit(): void {
    const token = this.ck.get('token');
    if (token) {
      this.auth.isAuthenticated = true;
      this.auth.user = this.getDecodedAccessToken(token);
    }
  }
}
