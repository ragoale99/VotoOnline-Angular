import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, DoCheck {
  ruolo = '';
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.ruolo = this.loginService.getRole();
  }
}
