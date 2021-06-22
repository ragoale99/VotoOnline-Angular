import { Component, OnInit, Input } from '@angular/core';
import { Votation } from 'src/app/votation.model';

@Component({
  selector: 'app-form-votazione',
  templateUrl: './form-votazione.component.html',
  styleUrls: ['./form-votazione.component.css'],
})
export class FormVotazioneComponent implements OnInit {
  @Input() selectedVotation!: Votation;
  constructor() {}

  ngOnInit(): void {}
}
