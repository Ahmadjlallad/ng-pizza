import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public auth: AuthService) {}
  logout() {
    this.auth.isAuthenticated = false;
    this.auth.user = null;
  }
  ngOnInit(): void {}
}
