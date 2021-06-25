import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Votation } from '../../votation.model';
import { VoteService } from '../../vote.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.css'],
})
export class GenericContentComponent implements OnInit {
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

  ngOnInit(): void {
    this.completedVotations = this.voteService.completedVotations();
    this.uncompletedVotations = this.voteService.uncompletedVotations();
    setTimeout(() => {
      this.staticAlertClosed = true;
      this.staticAlert.close();
    }, 4000);
  }

  openModal(content: any, votation: Votation) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.selectedVotation = votation;
  }

  openVotation() {
    this.startVotation = true;
  }
}
