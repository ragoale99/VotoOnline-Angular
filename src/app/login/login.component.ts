import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm;
  user = {
    email: '',
    password: '',
  };
  submitted = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.loginForm.reset();
  }
}
