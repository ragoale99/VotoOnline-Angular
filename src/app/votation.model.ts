import { VoteCard } from './vote-card.model';

export interface Votation {
  title: string;
  description: string;
  dataStart: Date;
  dataEnd: Date;
  voted: boolean;
  result: string;
  alternative1: VoteCard;
  alternative2: VoteCard;
  alternative3?: VoteCard;
  alternative4?: VoteCard;
  alternative5?: VoteCard;
  alternative6?: VoteCard;
  alternative7?: VoteCard;
  alternative8?: VoteCard;
}
