import { Component, OnInit, Input } from '@angular/core';
import { Votation } from 'src/app/votation.model';
import { VoteCard } from 'src/app/vote-card.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-votazione',
  templateUrl: './form-votazione.component.html',
  styleUrls: ['./form-votazione.component.css'],
})
export class FormVotazioneComponent implements OnInit {
  @Input() selectedVotation!: Votation;
  // in realtà selectedCard è un VoteCard (oppure undefined) ma per colpa di sto undefined rompe i coglioni
  // quindi any e chi si è visto si è visto
  selectedCard: any;
  optionsObj!: Object;
  optionsArr: VoteCard[] = [];

  showRules = false;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.optionsObj = (({
      option1,
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      option8,
    }) => ({
      option1,
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      option8,
    }))(this.selectedVotation);

    this.optionsArr = Object.values(this.optionsObj).filter((el) => {
      return el !== undefined;
    });
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
}
