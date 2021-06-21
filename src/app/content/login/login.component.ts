import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user.model';
import { LoginService } from '../../login.service';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  @Input()
  role!: string;
  /* error!: (string | number)[]; */
  //* fondamentale che l'output sia con il nome dell'input (role) + "Change" => twoWayDataBinding!
  @Output() roleChange = new EventEmitter<string>();

  user = {
    email: '',
    password: '',
  };
  data: any;

  submitted = false;
  constructor(private http: HttpClient, private loginService: LoginService) {}

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
            this.roleChange.emit(this.role);
          },
          (error) => {
            error.next(error.message);
          }
        );
    } else {
      this.loginService
        .loginUser(
          userData.email,
          userData.password,
          'http://127.0.0.1:3100/login?__example=genedricUser'
        )
        .subscribe(
          (responseData) => {
            this.data = responseData;
            this.role = this.data.role;
            this.roleChange.emit(this.role);
          },
          (error) => {
            /* this.error = [error.stauts, error.statusText]; */
          }
        );
    }
    this.loginForm.reset();
  }
}
