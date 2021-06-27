import { VoteCard } from './vote-card.model';

export class Votation {
  constructor(
    public title: string,
    public description: string,
    public dataStart: Date,
    public dataEnd: Date,
    public voted: boolean,
    public result: string,
    public option1: VoteCard,
    public option2: VoteCard,
    public otherOptions?: VoteCard[]
  ) {}
}
