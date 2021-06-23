import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Votation } from 'src/app/votation.model';
import { VoteService } from '../../vote.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.css'],
})
export class GenericContentComponent implements OnInit, DoCheck {
  startVotation = false;
  staticAlertClosed = false;
  selectedVotation!: Votation;
  completedVotations!: Votation[];
  uncompletedVotations!: Votation[];
  constructor(
    private voteService: VoteService,
    private modalService: NgbModal
  ) {}

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;

  ngDoCheck() {
    this.completedVotations = this.voteService.completedVotations();
    this.uncompletedVotations = this.voteService.uncompletedVotations();
    setTimeout(() => this.staticAlert.close(), 4000);
  }

  ngOnInit(): void {
    /*     this.completedVotations = this.voteService.completedVotations();
    this.uncompletedVotations = this.voteService.uncompletedVotations();
    console.log('ciao'); */
  }

  openModal(content: any, votation: Votation) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.selectedVotation = votation;
  }

  openVotation() {
    this.startVotation = true;
  }
}
