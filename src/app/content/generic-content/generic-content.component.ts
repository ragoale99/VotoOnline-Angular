import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Votation } from 'src/app/votation.model';
import { VoteService } from '../../vote.service';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.css'],
})
export class GenericContentComponent implements OnInit {
  staticAlertClosed = false;
  completedVotations!: Votation[];
  uncompletedVotations!: Votation[];
  constructor(private voteService: VoteService) {}

  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert;

  ngOnInit(): void {
    this.completedVotations = this.voteService.completedVotations();
    this.uncompletedVotations = this.voteService.uncompletedVotations();
    setTimeout(() => this.staticAlert.close(), 4000);
  }
}
