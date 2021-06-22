import { Injectable } from '@angular/core';
import { Votation } from './votation.model';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  votations: Votation[] = [];
  constructor() {}

  getVotations() {
    return this.votations.slice();
  }
}
