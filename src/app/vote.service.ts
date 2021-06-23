import { Injectable, EventEmitter } from '@angular/core';
import { Votation } from './votation.model';
import { VoteCard } from './vote-card.model';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  /* votationSelected = new EventEmitter<Votation>(); */

  // temporaneo!
  today = new Date();
  tomorrow = new Date(this.today.setDate(this.today.getDate() + 1));
  votations: Votation[] = [
    new Votation(
      'Comunali',
      'bellissima votazione',
      this.today,
      this.tomorrow,
      true,
      'partito democristiano',
      new VoteCard('ciao', 'patito democratico'),
      new VoteCard('ciaone', 'patito democristiano')
    ),
    new Votation(
      'Comunali',
      'bruttissima votazione',
      this.today,
      this.tomorrow,
      false,
      '',
      new VoteCard('assets/images/lega.jpg', 'Lega Nord'),
      new VoteCard('assets/images/berla.jpg', 'Forza Italia'),
      new VoteCard('assets/images/movimento5stelle.jpg', 'Movimento 5 stelle'),
      new VoteCard('assets/images/noi_per_il_futuro.jpg', 'Noi per il futuro'),
      new VoteCard('assets/images/potere_al_popolo.jpg', 'Potere al popolo'),
      new VoteCard(
        'assets/images/giovani_democratici.png',
        'Giovani democratici'
      )
    ),
    new Votation(
      'Comunali',
      'che schifo di votazione',
      this.today,
      this.tomorrow,
      true,
      '5 stelle',
      new VoteCard('ciao', '5 stelle'),
      new VoteCard('ciaone', 'forza italia')
    ),
    new Votation(
      'Comunali',
      'eccezionale votazione',
      this.today,
      this.tomorrow,
      false,
      '',
      new VoteCard('ciao', 'potere al popolo'),
      new VoteCard('ciaone', 'più europa')
    ),
  ];

  constructor() {}

  getVotations() {
    return this.votations.slice();
  }

  uncompletedVotations() {
    return this.votations.filter((votation) => {
      return votation.voted === false;
    });
  }

  completedVotations() {
    return this.votations.filter((votation) => {
      return votation.voted !== false;
    });
  }
}
