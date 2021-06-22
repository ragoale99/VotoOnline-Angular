import { VoteCard } from './vote-card.model';

export class Votation {
  constructor(
    public title: string,
    public description: string,
    public dataStart: Date,
    public dataEnd: Date,
    public voted: boolean,
    public result: string,
    public alternative1: VoteCard,
    public alternative2: VoteCard,
    public alternative3?: VoteCard,
    public alternative4?: VoteCard,
    public alternative5?: VoteCard,
    public alternative6?: VoteCard,
    public alternative7?: VoteCard,
    public alternative8?: VoteCard
  ) {}
}
