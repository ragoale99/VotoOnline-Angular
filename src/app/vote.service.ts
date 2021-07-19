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
      'Frameworks	',
      'Votazione per la scelta del miglior framework per lo sviluppo front-end di applicazioni web',
      new Date('2020, 04, 10'),
      this.tomorrow,
      false,
      '',
      new VoteCard('assets/images/vue.png', 'Vue.js'),
      new VoteCard('assets/images/angular.png', 'Angular'),
      [new VoteCard('assets/images/react.png', 'React')]
    ),
    new Votation(
      'Cani',
      'Votazione per la scelta del cane più bello',
      new Date('2020, 04, 10'),
      this.tomorrow,
      false,
      '',
      new VoteCard('assets/images/pastore_tedesco.jpg', 'Pastore tedesco'),
      new VoteCard('assets/images/doberman.jpg', 'Doberman'),
      [
        new VoteCard('assets/images/labrador.jpg', 'Labrador'),
        new VoteCard('assets/images/golden_retriver.jpg', 'Golden retriever'),
        new VoteCard('assets/images/beagle.jpg', 'Beagle'),
        new VoteCard('assets/images/pitbull.jpg', 'Pitbull'),
        new VoteCard('assets/images/bassotto.jpg', 'Bassotto'),
        new VoteCard('assets/images/rottweiler.jpg', 'Rottweiler'),
      ]
    ),
    new Votation(
      'Europee',
      'che schifo di votazione',
      this.today,
      this.tomorrow,
      true,
      '5 stelle',
      new VoteCard('ciao', '5 stelle'),
      new VoteCard('ciaone', 'forza italia'),
      []
    ),
    new Votation(
      'Comunali',
      'eccezionale votazione',
      this.today,
      this.tomorrow,
      false,
      '',
      new VoteCard('assets/images/noi_per_il_futuro.jpg', 'Noi per il futuro'),
      new VoteCard('assets/images/potere_al_popolo.jpg', 'Potere al Popolo!'),
      [new VoteCard('assets/images/cambiamo.png', 'Cambiamo!	')]
    ),
  ];

  constructor() {}

  getVotations() {
    return this.votations.slice();
  }

  addVotation(votation: Votation) {
    this.votations.push(votation);
  }

  uncompletedVotations() {
    var today = new Date();
    return this.votations.filter((votation) => {
      const dateEnd = new Date(votation.dataEnd);
      return votation.voted === false && today <= dateEnd;
    });
  }

  completedVotations() {
    return this.votations.filter((votation) => {
      return votation.voted !== false;
    });
  }

  changeStatusVotation(card: any, votation: Votation) {
    let found: any = this.votations.find((el) => el === votation);
    found.voted = true;
    found.result = card.name;
  }
}
