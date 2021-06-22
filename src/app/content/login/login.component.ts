import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../user.model';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  errorStatus = 200;
  errorTextStatus = '';
  role = '';
  data: any;
  user = {
    email: '',
    password: '',
  };

  submitted = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(userData: User) {
    this.submitted = true;

    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    if (this.loginForm.value.password === 'admin') {
      this.loginService
        .loginUser(
          userData.email,
          userData.password,
          'http://127.0.0.1:3100/login?__example=admin'
        )
        .subscribe(
          (responseData) => {
            this.data = responseData;
            this.role = this.data.role;
            this.loginService.setRole(this.role);
          },
          (error) => {
            this.errorStatus = error.status;
            this.errorTextStatus = error.statusText;
          }
        );
    } else {
      this.loginService
        .loginUser(
          userData.email,
          userData.password,
          'http://127.0.0.1:3100/login?__example=genericUser'
        )
        .subscribe(
          (responseData) => {
            this.data = responseData;
            this.role = this.data.role;
            this.loginService.setRole(this.role);
          },
          (error) => {
            this.errorStatus = error.status;
            this.errorTextStatus = error.statusText;
          }
        );
    }
    this.loginForm.reset();
  }

  setErrorDef() {
    this.errorStatus = 200;
    this.errorTextStatus = '';
  }
}
