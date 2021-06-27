import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Votation } from 'src/app/votation.model';
import { VoteCard } from 'src/app/vote-card.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VoteService } from 'src/app/vote.service';

@Component({
  selector: 'app-form-votazione',
  templateUrl: './form-votazione.component.html',
  styleUrls: ['./form-votazione.component.css'],
})
export class FormVotazioneComponent implements OnInit {
  @Input() selectedVotation!: Votation;
  @Input() startVotation!: boolean;
  @Input() completedVotations!: Votation[];
  @Input() uncompletedVotations!: Votation[];
  @Output() completedVotationsChange = new EventEmitter<Votation[]>();
  @Output() uncompletedVotationsChange = new EventEmitter<Votation[]>();
  @Output() startVotationChange = new EventEmitter<boolean>();
  // in realtà selectedCard è un VoteCard (oppure undefined) ma per colpa di sto undefined rompe i coglioni
  // quindi any e chi si è visto si è visto
  selectedCard: any;
  optionsObj!: Object;
  optionsArr!: any;

  showRules = false;
  constructor(
    private voteService: VoteService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.optionsObj = (({ option1, option2 }) => ({
      option1,
      option2,
    }))(this.selectedVotation);

    this.optionsArr = Object.values(this.optionsObj);

    this.optionsArr = this.optionsArr.concat(
      this.selectedVotation.otherOptions
    );
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  choisedCard(option: VoteCard) {
    if (this.selectedCard === undefined) {
      this.selectedCard = option;
    } else {
      this.selectedCard = undefined;
    }
  }

  onShowRules() {
    this.showRules = !this.showRules;
  }

  classesCardSelector(option: VoteCard) {
    if (this.selectedCard !== undefined) {
      if (this.selectedCard === option) {
        return 'hover-behaviour selected';
      } else {
        return 'not-selected';
      }
    }
    return 'hover-behaviour';
  }

  successVotation() {
    this.voteService.changeStatusVotation(
      this.selectedCard,
      this.selectedVotation
    );
    this.startVotationChange.emit(false);
    this.completedVotationsChange.emit(this.voteService.completedVotations());
    this.uncompletedVotationsChange.emit(
      this.voteService.uncompletedVotations()
    );
  }
}
