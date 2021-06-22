import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from '../login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, DoCheck {
  ruolo!: string;
  constructor(
    private loginService: LoginService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}
  ngDoCheck(): void {
    this.ruolo = this.loginService.getRole();
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  roleChange() {
    this.loginService.setRole('');
  }
}
