import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Votation } from '../../votation.model';
import { VoteService } from '../../vote.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css'],
})
export class AdminContentComponent implements OnInit {
  creaVotation = false;
  staticAlertClosed = false;
  selectedVotation!: Votation;
  votations!: Votation[];
  constructor(
    private voteService: VoteService,
    private modalService: NgbModal
  ) {}

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;

  ngOnInit(): void {
    this.votations = this.voteService.getVotations();
    setTimeout(() => {
      this.staticAlertClosed = true;
      this.staticAlert.close();
    }, 4000);
  }

  openModal(content: any, votation: Votation) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.selectedVotation = votation;
  }

  createVotation() {
    this.creaVotation = true;
  }

  deleteVotation() {
    this.voteService.deleteVotation(this.selectedVotation);
    this.votations = this.voteService.getVotations();
  }

  checkDataStart(data: Date) {
    const today = new Date();
    const date = new Date(data);
    return date.getTime() <= today.getTime();
  }
}
