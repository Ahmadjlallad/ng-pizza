import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserInterface } from './User.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signIn = true;
  error = false;
  errorMsg = '';
  isLoading = false;
  authSub!: Observable<UserInterface>;
  authForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService) {}
  toggleSignIn() {
    this.signIn = !this.signIn;
  }
  ngOnInit(): void {}
  submit() {
    this.isLoading = true;

    const { username, password } = this.authForm.value;
    if (this.signIn) {
      this.authSub = this.auth.signIn(username, password);
    } else this.authSub = this.auth.signup(username, password);
    this.authSub.subscribe({
      next: (data) => {
        console.log(data);
        this.isLoading = false;
      },
      error: (errorMsg) => {
        this.errorMsg = errorMsg.message;
        this.error = true;
        this.isLoading = false;
      },
    });
  }
}
