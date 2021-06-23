import { Component, OnInit, Input } from '@angular/core';
import { Votation } from 'src/app/votation.model';
import { VoteCard } from 'src/app/vote-card.model';

@Component({
  selector: 'app-form-votazione',
  templateUrl: './form-votazione.component.html',
  styleUrls: ['./form-votazione.component.css'],
})
export class FormVotazioneComponent implements OnInit {
  selectedCard!: VoteCard;
  @Input() selectedVotation!: Votation;
  optionsObj!: Object;
  optionsArr: VoteCard[] = [];

  showRules = false;
  constructor() {}

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

  choisedCard() {
    console.log(this.optionsArr);
  }

  onShowRules() {
    this.showRules = !this.showRules;
  }
}
