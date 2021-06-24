import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css'],
})
export class AdminContentComponent implements OnInit, DoCheck {
  staticAlertClosed = false;

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;

  ngOnInit(): void {
    setTimeout(() => {
      this.staticAlertClosed = true;
      return this.staticAlert.close();
    }, 4000);
  }

  ngDoCheck() {}
}
